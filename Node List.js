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

printLinkedList(n1);
printLinkedList(n2);

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
    previous_node.next = new_node;
    return head;
}

let node = n1, index = 2, value = 'new_node';
let head = insert_node(node, index, value);
print_linked_list(head);