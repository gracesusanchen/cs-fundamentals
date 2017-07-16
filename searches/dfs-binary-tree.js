const BinarySearchTree = require('../data-structure/binary-search-tree');

// in order traversal of binary tree

const tree = new BinarySearchTree([
  1, 2, 3, 4, 5, 6, 7, 8
]);

// DFS
tree.printInorder();
tree.printPreorder();
tree.printPostorder();
