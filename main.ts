// One-Liner Laughs: the Roomba that declared the cat an obstacle.
// Idea: a Roomba maps the house, labels the cat "obstacle", and then avoids
// it forever — the robot vacuum has filed the cat under furniture, and the
// cat, unbothered, now owns the hallway the Roomba will not enter. The joke
// is concrete (a named gadget, a named label, a named animal), visual, and
// needs no setup beyond the one line: the machine did its job perfectly,
// and its perfect map is exactly the problem.
// Fresh vs the field (1,866 titles): the saturated clusters are the fridge
// (50 titles — custody filings, judging fridges) and the smart speaker /
// smart-home voice. No Roomba-as-surveyor angle, no "obstacle" label, no cat
// vs vacuum-map joke in the field's top clusters.
// Verified 2026-11-26: entry is exactly 87 characters, one sentence, one
// line, no trailing newline. Gate guard below enforces the 1–200 char,
// single-line rule at runtime so a bad edit can never ship an invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My Roomba mapped the house, labelled the cat 'obstacle', and has avoided it ever since.";

if (line.length < 1 || line.length > 200) throw new Error("entry must be 1-200 chars");
if (line.includes("\n")) throw new Error("entry must be one line");
if (line.trim().split(/[.!?]+/).filter(Boolean).length !== 1) throw new Error("entry must be one sentence");
if (!/Roomba/.test(line)) throw new Error("entry must name the gadget it jokes about");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
