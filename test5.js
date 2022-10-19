class Node {
 constructor(data)
 {
     this.data = data;
     this.left = null;
     this.right = null;
 }
  Node(data) {
     this.key = data;
 }
}

function treeHeight(root) {

if (root == null)
return 0;

let q = [];

q.push(root);
let height = 0;

while (1 == 1) {
let nodesAtThisLevel = q.length;

if (nodesAtThisLevel == 0) {
  return height;
}

height++;

while (nodesAtThisLevel > 0) {
let currentNode = q.shift();

if (currentNode.left != null)
 q.push(currentNode.left);
if (currentNode.right != null)
 q.push(currentNode.right);
nodesAtThisLevel--; // paint the square
}
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

// Another Binary tree test
let root2 = new Node(1);
root2.left = new Node(8);
root2.right = new Node(17);
root2.left.left = new Node(3);
root2.left.left.left = new Node(8);
root2.left.left.right = new Node(5);
root2.left.right = new Node(2);
root2.right.left = new Node(14);
root2.right.left.left = new Node(4);
root2.right.left.right = new Node(6);
root2.right.left.left.right = new Node(2);
root2.right.left.left.right.left = new Node(7);

console.log("The height of the binary tree is: " + treeHeight(root2));

treeHeight(root);
