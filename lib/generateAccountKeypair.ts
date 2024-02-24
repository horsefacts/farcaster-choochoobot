import { Hex, toHex } from "viem";
import { ed25519 } from "@noble/curves/ed25519";

function generateAccountKeypair(): {
  privateKey: Hex;
  publicKey: Hex;
} {
  const privateKeyBytes = ed25519.utils.randomPrivateKey();
  const publicKeyBytes = ed25519.getPublicKey(privateKeyBytes);

  const privateKey = toHex(privateKeyBytes);
  const publicKey = toHex(publicKeyBytes);

  return { privateKey, publicKey };
}

export default generateAccountKeypair;
