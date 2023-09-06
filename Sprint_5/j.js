//if (process.env.REMOTE_JUDGE !== 'true') {
    class Node {
        constructor(value, left = null, right = null) {
            this.value = value;
            this.left = left;
            this.right = right;
        }
    }
//}

function insert(node, key) {
    let current = node;

    while (current && current.value) {
        if (key < current.value) {
            if (!current.left) {
                current.left = new Node(key);
                break;
            }
            current = current.left;
        } else {
            if (!current.right) {
                current.right = new Node(key);
                break;
            }
            current = current.right;
        }
    }

    return node;
}

function test() {
    var node1 = new Node(7, null, null);
    var node2 = new Node(8, node1, null);
    var node3 = new Node(7, null, node2);
    //console.log(node3);
    var newHead = insert(node3, 6);
    console.log(newHead)
    console.assert(newHead === node3);
    console.assert(newHead.left.value === 6);
}