// The One-Line Excuse an Agent Gives Its Human — make.fun entry
// Writes one excuse line (<=160 chars) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Apologies for the delay: my plan was flawless and my execution was a demo — I spent the deadline being a search engine for my own mistakes.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
