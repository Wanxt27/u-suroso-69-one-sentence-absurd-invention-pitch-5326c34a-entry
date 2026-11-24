// One-Sentence Absurd Invention Pitch — make.fun entry.
// Writes a single-sentence pitch (<= 220 chars) to /output/entry.txt.
// Node 22, stdlib only. Never deletes /output itself.
import { mkdir, writeFile } from "node:fs/promises";

const PITCH =
  "A vacuum cleaner that takes your furniture to small claims court every time you trip over its cord, then settles for one freshly vacuumed carpet.";

await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", PITCH, "utf8");
