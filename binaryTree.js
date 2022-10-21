/* For this coding solution I chose to use a Breadth-First Search algorithm to find the height of
the binary tree, I also utilized a queue data structure within my Breadth-First Search algorithm 
to help me keep track of and manipulate the nodes as I traversed the tree. I believe that this is
a good solution for this problem because it has a good Big O time complexity of O(n) where n is the 
number of nodes in the binary tree.
*/

/* Pseudo-code : 
  1. Check to make sure that the root node is not null.
  2. Initialize an empty array that will work as a queue to keep track of nodes as I traverse
     the tree.
  3. Push the root node into the queue array.
  4. Initialize a height variable and set it equal to zero.
  5. Create a while loop that continues looping until all nodes of the tree have been checked.
  6. Create a variable to keep track of the number of nodes that are in the current level.
  7. After all nodes at each level of the tree have been visited, increment the height variable
     by 1.
  8. While there are nodes at the current level, create a new variable to represent the current 
     node and set it equal to the node in my queue at index zero of the queue.
  9. If current node.left is not equal to null then push it into the queue.
  10.If current node.right is not equal to null then push it into the queue.
  11.Then decrement the variable that is keeping track of the nodes at the current level by 1.
*/

/* The Big O time and space complexity of my solution for this problem is time complexity = O(n) and space complexity = O(n) where n is the number of nodes in the binary tree.
*/

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
  return console.log('height is zero, root value can not be null');

 let q = [];

 q.push(root);
 let height = 0;

 while (1 == 1) {
  let nodesAtThisLevel = q.length;
  if (nodesAtThisLevel == 0)
   return height;
  height++;

  while (nodesAtThisLevel > 0)
  {
   let currentNode = q.shift();
   if (currentNode.left != null)
    q.push(currentNode.left);
   if (currentNode.right != null)
    q.push(currentNode.right);
   nodesAtThisLevel--;
  }
 }
}

// Inserting nodes to the Binary Tree - height of tree is 4
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

// Another Binary tree test - height of tree is 6
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

// Another test with only root node - height of tree is 1
let root3 = new Node(1);

// Test with null passed in for the root value
let root4 = null;

console.log("The height of the binary tree is: " + treeHeight(root));
console.log("The height of the binary tree is: " + treeHeight(root2));
console.log("The height of the binary tree is: " + treeHeight(root3));

console.log('***************Testing with bad input*****************');

treeHeight(root4);
