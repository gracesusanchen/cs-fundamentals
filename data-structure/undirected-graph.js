// implemented using adjacency lists

class EdgeNode {
  constructor(endpoint) {
    this.endpoint = endpoint;
    this.weight = null;
    this.next = null;
  }
}

class UndirectedGraph {
  constructor() {
    this.vertices = {};
    this.verticesCount = 0;
    this.edgesCount = 0;
    this.directed = false;
  }

  initialize() {
    // hardcoded for now
    // read in definitions of edges and will init the graph
    this.insertEdge(1, 2);
    this.insertEdge(1, 3);
    this.insertEdge(2, 8);
    this.insertEdge(3, 4);
    this.insertEdge(3, 17);
    this.insertEdge(3, 18);
    this.insertEdge(4, 5);
    this.insertEdge(4, 6);
    this.insertEdge(4, 15);
    this.insertEdge(4, 16);
    this.insertEdge(14, 1);
    this.insertEdge(4, 14);
    this.insertEdge(6, 7);
    this.insertEdge(8, 9);
    this.insertEdge(8, 10);
    this.insertEdge(8, 11);
    this.insertEdge(8, 12);
  }

  insertEdge(x, y, directed) {
    if (!this.vertices[x]) {
      this.vertices[x] = new EdgeNode(y);
      this.verticesCount++;
    } else {
      // insert in front of the linked list
      const currentHead = this.vertices[x];
      this.vertices[x] = new EdgeNode(y);
      this.vertices[x].next = currentHead;
    }
    this.edgesCount++;
    if (!directed) {
      // also insert the edge in the opposite direction
      this.insertEdge(y, x, true);
    }
  }

  print() {
    console.log(`Vertices: ${this.verticesCount} | Edges: ${this.edgesCount}`);
    Object.keys(this.vertices).forEach((vertex) => {
      process.stdout.write(`${vertex}: `);
      let edges = this.vertices[vertex];
      while (edges !== null) {
        process.stdout.write(`${edges.endpoint}, `);
        edges = edges.next;
      }
      process.stdout.write('\n');
    });
  }
}

module.exports = UndirectedGraph;
