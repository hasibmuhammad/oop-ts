type Graph = Map<number, number[]>;

const bfs = (graph: Graph, startNode: number): void => {
  const queue: number[] = [startNode];
  const visited = new Set<number>();
  visited.add(startNode);

  while (queue.length > 0) {
    console.log("Queue: ", queue);

    const currentlySelectedNode: number = queue.shift()!;
    const adjucentsofCurrentlySelectedNode =
      graph.get(currentlySelectedNode) || [];

    for (const adjucentItem of adjucentsofCurrentlySelectedNode) {
      if (!visited.has(adjucentItem)) {
        queue.push(adjucentItem);
        visited.add(adjucentItem);
      }
    }
    console.log("Visited: ", visited);
  }

  console.log("Result: ", visited);
};

// const graph: Graph = new Map([
//   [1, [2, 3]],
//   [2, [4, 5]],
//   [3, [6]],
//   [4, []],
//   [5, [6]],
//   [6, []],
// ]);

const graph: Graph = new Map([
  [1, [2, 3]],
  [2, [4, 5]],
  [3, [6]],
  [4, []],
  [5, [7, 8]],
  [6, []],
  [7, []],
  [8, []],
]);

bfs(graph, 1);
