import { TreeWalker } from "../../tree-walker";

import { generators } from "./markdown-generator";
import { nodes } from "./input-nodes";

export const output = TreeWalker(generators, nodes, {});