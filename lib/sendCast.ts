import { FarcasterNetwork, makeCastAdd } from "@farcaster/hub-nodejs";
import { getSigner, hubClient } from "./farcaster";
import { Hex } from "viem";

async function sendCast(fid: number, accountPrivateKey: Hex, text: string) {
  const signer = getSigner(accountPrivateKey);
  const cast = await makeCastAdd(
    {
      text,
      embeds: [],
      embedsDeprecated: [],
      mentions: [],
      mentionsPositions: [],
    },
    {
      fid,
      network: FarcasterNetwork.MAINNET,
    },
    signer
  );
  if (cast.isOk()) {
    await hubClient.submitMessage(cast.value);
  } else {
    console.log("Failed to create cast:", cast.error);
  }
}

export default sendCast;
