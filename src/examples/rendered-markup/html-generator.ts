import { ROOT, HEADING, BLOCK, TEXT } from "./features";

const appendChildren = (node, children) => {
  children.forEach(child => node.appendChild(child));
  return node;
};

const createElement = name => document.createElement(name);

export const generators = {
  [ROOT]: (node, children) =>
    appendChildren(createElement("div"), children),
  [HEADING]: (node, children, parent, state) =>
    appendChildren(createElement(`h${node.value}`), children),
  [BLOCK]: (node, children, parent, state) =>
    appendChildren(createElement("div"), children),
  [TEXT]: node => new Text(node.value)
};
