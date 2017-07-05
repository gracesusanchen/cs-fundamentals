const UndirectedGraph = require('../data-structure/undirected-graph');

const undirectedGraph = new UndirectedGraph();
undirectedGraph.initialize();
undirectedGraph.print();

// Start DFS traversal
// ===================
function depthFirstSearch(graph, root) {

  // DFS: pick a random vertex as starting point, go through its children
  // push and use recursion to simulate going through each the children
  // as if they were pushed to a stack

  // Record the state of each vertice
  const processed = {};
  const discovered = {};
  const parents = { [root]: null };


  function classifyEdge(vertex, endpoint, currentTraversalTree) {
    // Each edge in DFS could either be a TREE edge - pointing forward
    // Or a BACK edge - pointing backward to an already explored node
    if (!discovered[endpoint]) {
      // If the new edge points to an endpoint that has not been discovered
      return 'TREE';
    } else if (processed[endpoint]) {
      // If the edge points to an endpoint that is already processed
      // This must simply be the second edge in our undirected graph
      return 'DUPLICATE';
    }
    // If the endpoint is discovered but not processed:
    // 1. it could be the parent of our vertex, in which case it is a DUP
    if (parseInt(currentTraversalTree[vertex], 10) === parseInt(endpoint, 10)) {
      return 'DUPLICATE';
    }
    // 2. It is not an immeidate parent
    return 'BACK';
  }

  function processNode(currentVertex) {
    // mark vertex as processed
    discovered[currentVertex] = true;

    let edges = graph.vertices[currentVertex];
    while (edges !== null) {
      const nextVertex = edges.endpoint;
      if (!discovered[nextVertex]) {
        // mark vertex as discovered
        parents[nextVertex] = currentVertex;
        //console.log(classifyEdge(currentVertex, nextVertex, parents));

        // recursively go deeper in the graph to check the next vertex
        processNode(nextVertex);
      } else if (!processed[nextVertex]) {
        console.log(classifyEdge(currentVertex, nextVertex, parents));
      }
      edges = edges.next;
    }

    // Mark as processed only after all edges are done
    processed[currentVertex] = true;
  }

  processNode(root);

  // return the resultant "tree" of traversal
  return parents;
}

const root = Object.keys(undirectedGraph.vertices)[0];
depthFirstSearch(undirectedGraph, root);

// Use DFS to find cycles in the graph - if a BACK edge exists
// it will show up in the classifyEdge method
