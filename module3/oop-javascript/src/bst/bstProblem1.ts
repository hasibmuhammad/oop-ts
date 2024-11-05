// class TreeNode {
//   value: number;
//   left: TreeNode | null;
//   right: TreeNode | null;

//   constructor(value: number) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// // Create a sample binary tree
// const root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);
// root.right.left = new TreeNode(6);
// root.right.right = new TreeNode(7);
// root.left.left.left = new TreeNode(8);
// root.left.left.right = new TreeNode(9);

// // BFS traversal function
// const bstBfs = (root: TreeNode): void => {
//   if (!root) return;

//   const queue: TreeNode[] = [root];
//   const result: number[] = [];

//   while (queue.length > 0) {
//     const currentNode: TreeNode = queue.shift()!; // Dequeue the first element
//     result.push(currentNode.value);

//     // Enqueue left child if it exists
//     if (currentNode.left) {
//       queue.push(currentNode.left);
//     }

//     // Enqueue right child if it exists
//     if (currentNode.right) {
//       queue.push(currentNode.right);
//     }
//   }

//   console.log(result);
// };

// // Execute BFS on the binary tree
// bstBfs(root);
