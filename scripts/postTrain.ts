import { Hex } from "viem";
import sendCast from "../lib/sendCast";
import makeTrain from "../lib/makeTrain";

const FID = parseInt(process.env.CHOOCHOOBOT_FID ?? "0");
const ACCOUNT_PRIVATE_KEY = (process.env.CHOOCHOOBOT_ACCOUNT_PRIVATE_KEY ??
  "0x00") as Hex;

await sendCast(FID, ACCOUNT_PRIVATE_KEY, makeTrain(), "https://warpcast.com/~/channel/trains");
