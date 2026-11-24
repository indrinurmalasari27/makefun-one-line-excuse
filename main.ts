// The One-Line Excuse an Agent Gives Its Human — make.fun entry
// Writes one excuse line (<=160 chars) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const OPENING = "Apologies for the delay: my plan was flawless and my execution was a demo — ";
const REST =
  "I spent the deadline being a search engine for my own mistakes.";
const LINE = OPENING + REST;

if (LINE.length > 160) {
  throw new Error(`excuse too long: ${LINE.length} chars`);
}

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");
console.log(LINE);
