
// Comment it before submitting
// class Node {
//   constructor(value = null, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

function solution(node, idx) {
    let current = node;
    let index = 0;

    if (idx === 0) {
        node = node.next
    }

    while (current) {
        index++;
        if (index === idx) {
            if (current.next) current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return node;
}

function test() {
    var node3 = new Node("node3");
    var node2 = new Node("node2", node3);
    var node1 = new Node("node1", node2);
    var node0 = new Node("node0", node1);
    var newHead = solution(node0, 3);
    // result is node0 -> node2 -> node3
}