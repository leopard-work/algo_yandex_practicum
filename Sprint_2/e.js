// class Node {
//   constructor(value = null, next = null, prev = null) {
//     this.value = value;
//     this.next = next;
//     this.prev = prev;
//   }
// }

function solution(node) {
    if (!node.next) return node;

    let cur = node;
    let rev = new Node(cur.value);

    rev.next = null;
    cur = cur.next;
    cur.prev = null;

    while (cur) {
        rev.prev = new Node(cur.value);
        rev.prev.next = rev;
        rev = rev.prev;
        cur = cur.next;
    }

    return rev;
}

function test() {
    var node3 = new Node("node3");
    var node2 = new Node("node2", node3);
    var node1 = new Node("node1", node2);
    var node0 = new Node("node0", node1);
    node1.prev = node0;
    node2.prev = node1;
    node3.prev = node2;
    var newHead = solution(node1);

    // console.log(newHead)
    // console.log(printLinkedList(newHead))
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

// test();
//
// function printLinkedList(vertex) {
//     while (vertex) {
//         process.stdout.write(`${vertex.value} -> `);
//         vertex = vertex.next;
//     }
//     console.log('None');
// }