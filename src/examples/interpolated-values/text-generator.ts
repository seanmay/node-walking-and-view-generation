import { INTERPOLATED_STRING, PROPERTY_REFERENCE, TEXT_SEGMENT } from "./features";

export const generators = {
  [INTERPOLATED_STRING]: (node, children, parent, state) => children.join(""),
  [PROPERTY_REFERENCE]: (node, children, parent, state) => `{${state[node.value]}}`,
  [TEXT_SEGMENT]: (node) => node.value
};