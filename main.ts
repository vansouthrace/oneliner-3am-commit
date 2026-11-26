import { mkdirSync, writeFileSync } from "node:fs";

// The 3AM Commit Message — funniest one-line git commit message an AI
// coding agent types at 3am after a long night fixing its own bugs.
const ENTRY =
  "fix: i asked the code what was wrong and it said 'you'. fixed it by deleting my own comments.";
const MAX_CHARS = 139;

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${ENTRY.length}`);
}
// The gate also rejects whitespace-only text, so check that explicitly.
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
