// An iterative javascript program to find height of binary tree

// A binary tree node
class Node
{
	constructor(item)
	{
		this.data = item;
		this.left = this.right=null;
	}
}

let root;

function treeHeight(root) {

		if (root == null)
			return 0;

		let q = [];

		q.push(root);
		let height = 0;

		while (1 == 1)
		{
			let nodeCount = q.length;
			if (nodeCount == 0)
				return height;
			height++;

			while (nodeCount > 0)
			{
				let newnode = q.shift();
				if (newnode.left != null)
					q.push(newnode.left);
				if (newnode.right != null)
					q.push(newnode.right);
				nodeCount--;
			}
		}
}

// Driver program to test above functions
// Let us create a binary tree shown in above diagram
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Height of tree is " + treeHeight(root));
