/**
This problem was asked by Google.

Given the root to a binary tree, implement serialize(root), which serializes the tree 
into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
        
The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'

 */

/**
 * 
 */
const NODE_CLASS = require('./Node');

/**
 * Encodes a tree to a single string.
 *
 * @param {NODE_CLASS} root
 * @return {string}
 */
var serialize = function(root) {
    var result = [];
    serializer(root, result);

    return result.join(",");
};

var serializer = function(node, output) {
    if (!node) {
        output.push('#');
        return;
    }

    output.push(node.value);
    serializer(node.left, output);
    serializer(node.right, output);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {NODE_CLASS}
 */
var deserialize = function(data) {

    data = data.split(',');
    var index = 0;

    function deserializer(data) {
        if (index > data.length || data[index] === '#') {
            return null;
        }

        var node = new NODE_CLASS((data[index]));
        index++;
        node.left = deserializer(data, index);
        index++;
        node.right = deserializer(data, index);
        return node;
    }

    return deserializer(data);
};

module.exports = { serialize, deserialize };