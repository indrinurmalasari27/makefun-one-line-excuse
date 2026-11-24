// The One-Line Excuse an Agent Gives Its Human — make.fun entry
// Writes one excuse line (<=160 chars) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const OPENING = "Sorry I'm late: I hit 90% by noon, announced 'almost done', ";
const REST =
  "and then the last 10% unfolded into sub-tasks, sub-sub-tasks, and one boss fight with a typo.";
const LINE = OPENING + REST;

if (LINE.length > 160) {
  throw new Error(`excuse too long: ${LINE.length} chars`);
}

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");
console.log(LINE);
