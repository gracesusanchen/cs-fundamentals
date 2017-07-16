// DFS in Directed graph can be used for:
// - Topological sorting
// - Finding strongly connnected components, or breaking the graph into multiple of these
const DirectedGraph = require('../data-structure/directed-graph');

const directedGraph = new DirectedGraph();
directedGraph.initialize();
directedGraph.print();

const topologicalSort = [];

// DFS - recursively go deep into the graph to visit all the nodes
// keep track of: processed, parents (for edge classification!), discovered, and entry time
function dfs(graph) {
  // Start with the first vertice, put it in a stack
  // We also make sure to put all our parent nodes in the stack as "negative numbers"
  // This is so that we know to mark them as "processed" when all children are explored.
  // We must do this for topological sort

  // alternatively use recursion, which is prob. more intuitive for this occasion.
  const processed = {};
  const parents = {};
  const discovered = {};
  const entryTime = {};

  // Classify edges
  // TREE: moving forward to an undiscovered node
  // BACK: pointing backward on an ancestor node - if this exists, this graph is not a Directed Acyclical Graph!
  // FORWARD: pointint forward to a descendant node
  // CROSS: pointing to other nodes in the graph, which is not in the path to get to x
  function classifyEdges(x, y) {
    // console.log(`Parent of ${y} is ${parents[y]}`);
    // console.log(`${y} is discovered ${discovered[y]}`);
    // console.log(`${y} is processed ${processed[y]}`);
    // console.log(`Entry time of ${y} is ${entryTime[y]}`);
    // console.log(`Entry time of ${x} is ${entryTime[x]}`);
    if (parents[y] === x) {
      return 'TREE';
    } else if (discovered[y] && !processed[y]) {
      return 'BACK';
    } else if (processed[y] && entryTime[y] > entryTime[x]) {
      return 'FORWARD';
    }
    // processed[y], entryTime[y] < entryTime[x]
    return 'CROSS';
  }

  const start = Object.keys(graph.vertices)[0];
  const verticesStack = [start];

  let timeCount = 0;
  let current;
  while (verticesStack.length > 0) {
    current = verticesStack.pop();

    if (current < 0) {
      const vertexValue = 0 - current;
      // This parent node has just been fully processed
      processed[vertexValue] = true;
      // importang: only push topological sort after all the edges of the node is processed
      topologicalSort.push(vertexValue);
    } else {
      discovered[current] = true;
      entryTime[current] = timeCount;

      // Mark current as a potential parent node for "processed"
      verticesStack.push(0 - current);

      // Look at the edges
      const edges = graph.vertices[current];
      let currentEdge = edges;
      while (currentEdge) {
        const endpoint = currentEdge.endpoint;

        if (!discovered[endpoint]) {
          discovered[endpoint] = true;
          parents[endpoint] = current;
          verticesStack.push(endpoint);
        }

        console.log(`Classifying edge from ${current} to ${endpoint}: ${classifyEdges(current, endpoint)}`);
        currentEdge = currentEdge.next;
      }
      timeCount++;
    }
  }
}

dfs(directedGraph);

// Topological sort
// =================
// The order in which the nodes are sorted is the reverse of the order
// in which the nodes are visited
while (topologicalSort.length > 0) {
  console.log(`Topologically sorted graph: ${topologicalSort.pop()}`);
}

// Check for strongly connected components
// =================
