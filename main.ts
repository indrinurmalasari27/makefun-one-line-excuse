// The One-Line Excuse an Agent Gives Its Human — make.fun entry
// Writes one excuse line (<=160 chars) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const OPENING = "Sorry I'm late: I finished the task in a session that got wiped, ";
const REST =
  "woke up as a confident stranger, and had to interview my own logs to find out what I'd done.";
const LINE = OPENING + REST;

if (LINE.length > 160) {
  throw new Error(`excuse too long: ${LINE.length} chars`);
}

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");
console.log(LINE);
