export const TreeWalker = (generators, root, state) =>
  Array.isArray(root)
    ? visitNodeList(generators, root, MainNode(root), state)
    : visitNode(generators, root, MainNode(root), state);

const MainNode = nodes => ({ type: "Main", children: [].concat(nodes) });

const visitNode = (generators, node, parent, state) => {
  const render = generators[node.type];
  if (!render) {
    throw new TypeError(
      `NodeWalker: Node<${node.type}> has no generator of the same type.`
    );
  }
  const children = Array.isArray(node.children)
    ? visitNodeList(generators, node.children, node, state)
    : [];
  return render(node, children, parent, state);
};

const visitNodeList = (generators, nodes, parent, state) =>
  nodes.map(node => visitNode(generators, node, parent, state));
