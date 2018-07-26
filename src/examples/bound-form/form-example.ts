import { TreeWalker } from "../../tree-walker";

import { generators } from "./form-generator";

export const GeneratedFormContent = ({ nodes, onChange, formData, config }) =>
  TreeWalker(generators, nodes, {
    events: { onChange },
    data: formData,
    constants: config
  });


