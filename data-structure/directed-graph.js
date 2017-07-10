// Each edge node is a link in a linked list
class EdgeNode {
  constructor(value) {
    this.endpoint = value;
    this.next = null;
  }
}

class DirectedGraph {
  constructor() {
    // adjacency matrix here
    this.vertices = {};
    this.verticesCount = 0;
    this.edgesCount = 0;
  }

  initialize() {
    this.insertEdge(1, 2);
    this.insertEdge(1, 3);
    this.insertEdge(2, 8);
    this.insertEdge(3, 4);
    this.insertEdge(3, 17);
    this.insertEdge(3, 18);
    this.insertEdge(4, 5);
    this.insertEdge(4, 6);
  }

  insertEdge(x, y) {
    // A directed graph should only add one edge
    const newEdge = new EdgeNode(y);
    if (!this.vertices[x]) {
      this.vertices[x] = newEdge;
      this.verticesCount++;
    } else {
      const currentHead = this.vertices[x];
      this.vertices[x] = new EdgeNode(y);
      this.vertices[x].next = currentHead;
    }
    this.edgesCount++;
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

module.exports = DirectedGraph;
