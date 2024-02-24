import {
  KEY_GATEWAY_ADDRESS,
  ViemLocalEip712Signer,
  keyGatewayABI,
} from "@farcaster/hub-nodejs";
import { Hex, fromHex, toHex } from "viem";
import { toAccount } from "viem/accounts";
import { account, publicClient, walletClient } from "./ethereum";
import { optimism } from "viem/chains";

async function registerAccountKey(fid: number, publicKey: Hex) {
  const localAccount = toAccount(account);
  const eip712signer = new ViemLocalEip712Signer(localAccount);

  const metadata = await eip712signer.getSignedKeyRequestMetadata({
    requestFid: BigInt(fid),
    key: fromHex(publicKey, "bytes"),
    deadline: BigInt(Math.floor(Date.now() / 1000) + 60 * 60), // 1 hour from now
  });

  if (metadata.isOk()) {
    const metadataHex = toHex(metadata.value);

    const { request: signerAddRequest } = await publicClient.simulateContract({
      account,
      abi: keyGatewayABI,
      address: KEY_GATEWAY_ADDRESS,
      chain: optimism,
      functionName: "add",
      args: [1, publicKey, 1, metadataHex],
    });
    const signerAddTxHash = await walletClient.writeContract(signerAddRequest);
    console.log(
      `Waiting for account key add tx to confirm: ${signerAddTxHash}`
    );
    await publicClient.waitForTransactionReceipt({ hash: signerAddTxHash });
    console.log(`Registered new signer with public key: ${publicKey}`);
  } else {
    console.log("Failed to generate metadata:", metadata.error);
  }
}

export default registerAccountKey;
