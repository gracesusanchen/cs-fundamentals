class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function sortedArrayToBST(nums) {
  if (nums.length === 0) {
    return null;
  }
  if (nums.length === 1) {
    return new TreeNode(nums[0]);
  }

  // sorted array - from small to large
  // binary search tree, all nodes on one side of the tree is smaller than the root
  // select median as root
  const medianIndex = Math.floor((nums.length - 1) / 2);

  const medianNode = new TreeNode(nums[medianIndex]);
  const leftArray = nums.slice(0, medianIndex);
  const rightArray = nums.slice(medianIndex + 1);

  // on either side, we repeat the same process to create a valid subtree
  medianNode.left = sortedArrayToBST(leftArray);
  medianNode.right = sortedArrayToBST(rightArray);
  return medianNode;
}

// TODO sortedListToBST()

// left - parent - right
// nodes are given in non-decreasing oder
// expected: 1, 2, 3, 4, 5, 6, 7, 8
function inorder(tree) {
  if (tree.left) {
    inorder(tree.left);
  }
  // once left tree is fully traversed
  process.stdout.write(`${tree.val},`);
  // move onto right subtree
  if (tree.right) {
    inorder(tree.right);
  }
}

// parent - left - right
// good for giivng a copy of the tree
// expected: 4, 2, 1, 3, 6, 5, 7, 8
function preorder(tree) {
  process.stdout.write(`${tree.val},`);
  if (tree.left) {
    inorder(tree.left);
  }
  if (tree.right) {
    inorder(tree.right);
  }
}

// left, right, root
// good for deletion of trees
// expected: 1, 3, 2, 5, 7, 6, 4
function postorder(tree) {
  if (tree.left) {
    inorder(tree.left);
  }
  if (tree.right) {
    inorder(tree.right);
  }
  process.stdout.write(`${tree.val},`);
}

class BinarySearchTree {
  constructor(array) {
    // Given an array, we want to create a Binary Search tree with
    // the left element smaller than the root
    // and the root smaller than the right element
    this.tree = sortedArrayToBST(array);
  }

  // traverse tree to find where to put the element
  push(element) {
    let parentNode = this.tree;
    while (parentNode) {
      if (element > parentNode.val) {
        if (parentNode.right !== null) {
          // move to the right
          parentNode = parentNode.right;
        } else {
          parentNode.right = new TreeNode(element);
          break;
        }
      } else {
        if (parentNode.left !== null) {
          // move to the left
          parentNode = parentNode.left;
        } else {
          parentNode.right = new TreeNode(element);
          break;
        }
      }
    }
  }

  delete(element) {
    //TODO
  }

  search(element) {
    //TODO
  }

  copy() {

  }

  printInorder() {
    process.stdout.write('Inorder: ');
    inorder(this.tree);
    process.stdout.write('\b\n');
  }

  printPreorder() {
    process.stdout.write('Preorder: ');
    preorder(this.tree);
    process.stdout.write('\b\n');
  }

  printPostorder() {
    process.stdout.write('Postorder: ');
    postorder(this.tree);
    process.stdout.write('\b\n');
  }
}

module.exports = BinarySearchTree;
