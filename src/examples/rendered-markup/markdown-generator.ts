import { ROOT, HEADING, BLOCK, TEXT } from "./features";

export const generators = {
  [ROOT]: (node, children) => children.join(""),
  [HEADING]: (node, children, parent, state) =>
    "#".repeat(node.value) + " " + children.join("") + "\n",
  [BLOCK]: (node, children, parent, state) =>
    "\n\n" + children.join("") + "\n",
  [TEXT]: node => node.value
};
