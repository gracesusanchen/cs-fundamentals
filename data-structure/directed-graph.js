// Each edge node is a link in a linked list
class EdgeNode {
  constructor(value) {
    this.destination = value;
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

  addEdge(x, y) {
    // A directed graph should only add one edge
    const newEdge = new EdgeNode(y);
    if (!this.vertices[x]) {
      this.vertices[x] = newEdge;
    } else {
      newEdge.next = this.vertices[x];
      this.vertices[x] = newEdge;
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

module.exports = DirectedGraph;
