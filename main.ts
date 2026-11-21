import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "You keep a stone in your pocket. It was warm when you picked it up, and it is warm still. Your hand finds it a hundred times a day, and every time it is the same weight, the same shape. The road keeps coming. The wind keeps coming. The stone stays.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
