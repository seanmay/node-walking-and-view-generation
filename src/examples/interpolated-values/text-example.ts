import { TreeWalker } from "../../tree-walker";

import { generators } from "./text-generator";
import { nodes } from "./input-nodes";

export const output = TreeWalker(generators, nodes, { role: "Adventurer", properNoun: "you" });
