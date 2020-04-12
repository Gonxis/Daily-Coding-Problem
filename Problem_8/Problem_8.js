/**
This problem was asked by Google.

A unival tree (which stands for "universal value") 
is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:

   0
  / \
 1   0
    / \
   1   0
  / \
 1   1
 */

let countUnivalSubtrees = root => {
    let count = helper(root);
    return count
};

let helper = root => {
    if (root === null) return 0;
    let left_count = helper(root.left);
    let right_count = helper(root.right);
    let total_count = left_count + right_count;

    if (root.left != null && root.value != root.left.value) {
        return total_count;
    }

    if (root.right != null && root.value != root.right.value) {
        return total_count;
    }

    return total_count + 1;
};

module.exports = { countUnivalSubtrees, helper };