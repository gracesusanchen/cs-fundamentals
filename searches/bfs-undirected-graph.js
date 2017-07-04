const UndirectedGraph = require('../data-structure/undirected-graph');

const undirectedGraph = new UndirectedGraph();
undirectedGraph.initialize();
undirectedGraph.print();


/* function classifyEdge(vertex, endpoint) {
  // console.log(`classifying edge between ${vertex} and ${endpoint}`);
  // Each edge in BFS could either be a TREE edge - pointing forward
  // Or a BACK edge - pointing backward to an already explored node
  if (processed[vertex] && !discovered[endpoint]) {
    return 'TREE';
  } else if (processed[vertex] && processed[endpoint]) {
    return 'BACK';
  }
  return 'TREE';
} */

// Start BFS traversal
// ===================
function breadthFirstSearch(graph, root) {
  // BFS: pick a random vertex as starting point, go through its children
  // push those that are discovered but not fully explored in a stack
  const verticesToProcess = [root];

  // Record the state of each vertice
  const processed = {};
  const discovered = {};

  // Record the parent of each node, this would be used for finding the shortest path
  const parents = { [root]: null };

  let currentVertex;
  while (verticesToProcess.length !== 0) {
    currentVertex = verticesToProcess.pop();

    // mark vertex as processed
    discovered[currentVertex] = true;
    processed[currentVertex] = true;

    let edges = graph.vertices[currentVertex];
    while (edges !== null) {
      const vertexToStack = edges.endpoint;
      if (!discovered[vertexToStack]) {
        verticesToProcess.push(vertexToStack);
        // mark vertex as discovered
        discovered[vertexToStack] = true;
        parents[vertexToStack] = currentVertex;
      }
      edges = edges.next;
    }
  }

  // return the resultant "tree" of traversal
  return parents;
}

// Using BFS to find the shortest path
// NOTE: only works for whichever node that is picked to be the root
// ===================================
function shortestPathFromRoot(vertex, traversalTree) {
  let prevVertex = traversalTree[vertex];
  const origin = Object.keys(traversalTree)[0];
  let description = `Shortest path from ${vertex} to ${origin}: ${vertex} -> `;
  while (prevVertex) {
    description += `${prevVertex} `;
    if (prevVertex !== origin) {
      description += '-> ';
    }
    prevVertex = traversalTree[prevVertex];
  }
  console.log(description);
}

const root = Object.keys(undirectedGraph.vertices)[0];
const traversalTree = breadthFirstSearch(undirectedGraph, root);
shortestPathFromRoot(7, traversalTree);

// Using BFS to count # of connected components
// ============================================
function countConnectedComponents(graph) {
  // Do BFS by picking random nodes, and checking if there are still nodes left
  // after the first BFS, repeat until all components are found
  const vertices = Object.keys(undirectedGraph.vertices);
  let count = 0;
  let processed = [];

  for (let i = 0; i < vertices.length; i++) {
    const vertex = vertices[i];
    if (processed.indexOf(vertex) === -1) {
      const tree = breadthFirstSearch(graph, vertex);
      processed = processed.concat(Object.keys(tree));
      count++;
    }
  }
  console.log(`Found ${count} connected components`);
  return count;
}

countConnectedComponents(undirectedGraph);
