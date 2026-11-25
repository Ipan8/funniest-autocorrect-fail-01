// Funniest Autocorrect Fail — entry builder
// The joke: one word flips, a routine work email turns into an HR problem.
// Autocorrect is the villain here: it silently rewrites "sign" into "sin"
// and the sender only notices after the message is already gone.

import { writeFileSync, mkdirSync } from "node:fs";

// Who is involved in the disaster.
const sender = "I";
const recipient = "my boss Mr. Hartono";

// The deal on the table — the one concrete detail anchoring the joke.
const deal = "the $40,000 contract";

// What was meant vs what autocorrect actually sent.
const intendedWord = "sign";
const autocorrectedWord = "sin";

// The fallout: HR gets involved, which is always worse than the typo.
const fallout = "now HR wants to see me";

function buildEntry(): string {
  const opening = `${sender} emailed ${recipient} that ${deal} was ready to ${intendedWord}`;
  const twist = `autocorrect changed '${intendedWord}' to '${autocorrectedWord}'`;
  const punchline = `and ${fallout}`;
  return `${opening} — ${twist} ${punchline}.`;
}

// Summarises the swap for the log so the joke's mechanism is visible.
function describeSwap(): string {
  return `swap: "${intendedWord}" -> "${autocorrectedWord}" (one letter, whole meaning flipped)`;
}

const entry = buildEntry();

// Bounty rule: a single line, at most 200 characters.
if (entry.length > 200) {
  throw new Error(`Entry is ${entry.length} chars, over the 200 limit.`);
}
if (entry.includes("\n")) {
  throw new Error("Entry must be a single line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(describeSwap());
console.log(`Wrote ${entry.length} chars to /output/entry.txt`);
console.log(entry);
