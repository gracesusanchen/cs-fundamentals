const UndirectedGraph = require('../data-structure/undirected-graph');

const graph = new UndirectedGraph();
graph.initialize();
graph.print();

// BFS: pick a random vertex as starting point, go through its children
// push those that are discovered but not fully explored in a stack

const root = Object.keys(graph.vertices)[1];
const verticesToProcess = [root];

// Record the state of each vertice
const processed = {};
const discovered = {};

let currentVertex;
while (verticesToProcess.length !== 0) {
  currentVertex = verticesToProcess.pop();

  // mark vertex as processed
  console.log(`Processed: ${currentVertex}`);
  discovered[currentVertex] = true;
  processed[currentVertex] = true;

  let edgesToExplore = graph.vertices[currentVertex];
  while (edgesToExplore !== null) {
    const vertexToStack = edgesToExplore.endpoint;
    //console.log('edgesToExplore', edgesToExplore);
    // console.log('vertexToStack', vertexToStack);
    if (!discovered[vertexToStack]) {
      verticesToProcess.push(vertexToStack);
      // mark vertex as discovered
      discovered[vertexToStack] = true;
    }
    edgesToExplore = edgesToExplore.next;
  }
}
