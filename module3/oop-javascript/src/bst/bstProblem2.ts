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

// // Create a simple binary tree
// const root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);
// root.right.left = new TreeNode(6);
// root.right.right = new TreeNode(7);
// root.left.left.left = new TreeNode(8);
// root.left.left.right = new TreeNode(9);

// /*
//      1
//    /   \
//   2     3
//  / \   / \ 
//  4  5  6  7
// / \
// 8 9

// */

// // DFS traversal function -
// const bstDfs = (root: TreeNode): void => {
//   if (!root) return;

//   const stack: TreeNode[] = [root];
//   const result: number[] = [];

//   while (stack.length > 0) {
//     const currentNode: TreeNode = stack.pop()!; // Destack the first element
//     result.push(currentNode.value);

//     // Enstack left child if it exists
//     if (currentNode.left) {
//       stack.push(currentNode.left);
//     }

//     // Enstack right child if it exists
//     if (currentNode.right) {
//       stack.push(currentNode.right);
//     }
//   }

//   console.log(result);
// };

// // Execute BFS on the binary tree
// bstDfs(root);
