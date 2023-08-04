class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

function printLinkedList(vertex) {
    while (vertex) {
        process.stdout.write(`${vertex.value} -> `);
        vertex = vertex.next;
    }
    console.log('None');
}

const n3 = new Node('third');
const n2 = new Node('second', n3);
const n1 = new Node('first', n2);
//
// printLinkedList(n1);
// printLinkedList(n2);

// INSERT

function get_node_by_index(node, index) {
    while (index) {
        node = node.next;
        index -= 1;
    }
    return node;
}

function insert_node(head, index, value) {
    const new_node = new Node(value);
    if (index === 0) {
        new_node.next = head;
        return new_node;
    }
    const previous_node = get_node_by_index(head, index - 1);

    new_node.next = previous_node.next;
    printLinkedList(previous_node.next);
    printLinkedList(new_node);
    previous_node.next = new_node;
    return head;
}

let node = n1, index = 2, value = 'new_node';
// let head = insert_node(node, index, value);

let newNode = get_node_by_index(node,1);
printLinkedList(newNode);
node.next = newNode.next
printLinkedList(node);


// 2 LinkedList

/*
Comment it before submitting
class Node {
  constructor(value = null, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}
*/

function solution(node) {
    // Your code
    // ヽ(´▽`)/
}

function test() {
    var node3 = new Node("node3");
    var node2 = new Node("node2", node3);
    var node1 = new Node("node1", node2);
    var node0 = new Node("node0", node1);
    node1.prev = node0;
    node2.prev = node1;
    node3.prev = node2;
    var newHead = solution(node0);
    /*
    result is newHead === node3
    node0.prev === node1
    node1.next === node0
    node1.prev === node2
    node2.next === node1
    node2.prev === node3
    node3.next === node2
    */
}