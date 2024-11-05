type Tree = Map<number, number[]>;

const dfs = (graph: Tree, startNode: number): void => {
  const visited = new Set<number>();
  const stack: number[] = [startNode];
  const result: number[] = [];
  visited.add(startNode);

  while (stack.length > 0) {
    console.log("Stack: ", stack);
    const node: number = stack.pop()!;
    const neighbors = graph.get(node) || [];
    result.push(node);

    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        stack.push(neighbor);
      }
    }
  }

  console.log("Result:", result);
};

const inputGraph: Tree = new Map([
  [1, [2, 3]],
  [2, [4, 5]],
  [3, [6]],
  [4, []],
  [5, [7, 8]],
  [6, []],
  [7, []],
  [8, []],
]);
dfs(inputGraph, 1);
