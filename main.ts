// Writes one short text to /output/entry.txt.
// One quiet image, one question left open: the keeper, the dark lamp,
// and the sea still asking. No trailing newline: the text is the whole file.
// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "The last lighthouse keeper never lit the lamp. Every night he climbed the stairs anyway and stood by the dark glass, listening to the sea ask the same question it asked the night before.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
