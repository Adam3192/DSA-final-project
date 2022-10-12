// Node class - a class to store a binary tree node
class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
     Node(data) {
        this.key = data;
    }

    findMaxHeight(node = this.root) {
     if (node == null) {
         return -1;
     };
     let left = this.findMaxHeight(node.left);
     let right = this.findMaxHeight(node.right);
     if (left > right) {
         return left + 1;
     } else {
         return right + 1;
     };
 }
}

// Inserting nodes to the Binary Tree
let root = new Node(1);
root.left = new Node(8);
root.right = new Node(17);
root.left.left = new Node(3);
root.left.left.left = new Node(8);
root.left.left.right = new Node(5);
root.left.right = new Node(2);
root.right.left = new Node(14);
root.right.left.left = new Node(4);
root.right.left.right = new Node(6);

/* What this Binary Tree looks like:
Node {
  data: 1,
  left: Node {
    data: 8,
    left: Node { 
        data: 3, 
        left: Node {
            data: 8,
            left: null,
            right: null
        },
        right: Node {
            data: 5,
            left: null,
            right: null
         }
    },
    right: Node { data: 2, left: null, right: null}
},
  right: Node {
    data: 17,
    left: Node {
        data: 14, 
        left: Node {
            data: 4,
            left: null,
            right: null
        },
        right: null
        },
    right: null
  }
}

// Binary Tree visualization of the output:
            1       <-- root, height = 1
          /   \
         8     17   <-- height = 2
        / \    / 
       3   2  14    <-- height = 3
      / \    / 
     8   5  4       <-- height = 4

*/
 
// Write a function that prints out the height of this tree

// The desired output of example is 4, as there is a height of 4 in this binary tree

console.log(root.findMaxHeight(root))
