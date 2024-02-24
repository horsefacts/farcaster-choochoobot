import { Hex } from "viem";
import registerAccountKey from "../lib/registerAccountKey";

const FID = parseInt(process.env.CHOOCHOOBOT_FID ?? "0");
const ACCOUNT_PUBLIC_KEY = (process.env.CHOOCHOOBOT_ACCOUNT_PUBLIC_KEY ?? "0x00") as Hex;

await registerAccountKey(FID, ACCOUNT_PUBLIC_KEY);
