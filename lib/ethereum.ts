import {
  HttpTransport,
  PublicClient,
  WalletClient,
  createPublicClient,
  createWalletClient,
  http,
} from "viem";
import { mnemonicToAccount } from "viem/accounts";
import { optimism } from "viem/chains";

export const account = mnemonicToAccount(
  process.env.CHOOCHOOBOT_WARPCAST_MNEMONIC ?? ""
);

export const publicClient: PublicClient<HttpTransport, typeof optimism> =
  createPublicClient({
    chain: optimism,
    transport: http(),
  });

export const walletClient: WalletClient<HttpTransport, typeof optimism> =
  createWalletClient({
    account,
    chain: optimism,
    transport: http(),
  });
