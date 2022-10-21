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

console.log("The height of the binary tree is: " + treeHeight(root));
