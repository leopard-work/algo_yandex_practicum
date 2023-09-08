// https://contest.yandex.ru/contest/24810/run-report/90242237/

if (process.env.REMOTE_JUDGE !== 'true') {
    class Node {
        constructor(value, left = null, right = null) {
            this.value = value;
            this.left = left;
            this.right = right;
        }
    }
}


function treePrint(head, prefix = "head", line = "") {
    if (!head) {
        return;
    }

    console.log(prefix + line, head.value)

    treePrint(head.left, "left", line + "-")
    treePrint(head.right, "right", line + "-")
}

function searchNode(DNode, DParent, key) {
    while (DNode && DNode.value !== key) {
        DParent = DNode;

        if (key >= DNode.value) {
            DNode = DNode.right;
        } else {
            DNode = DNode.left;
        }
    }

    return [DNode, DParent]
}

function findReplaceNode(PNode, PParent) {
    while (PNode.right) {
        PParent = PNode;
        PNode = PNode.right;
    }

    return [PNode, PParent];
}

function remove(node, key) {
    let DNode = node;
    let DParent = null;

    [DNode, DParent] = searchNode(DNode, DParent, key);

    if (!DNode) {
        return node;
    }

    if (!DNode.left && !DNode.right) {
        if (DNode === node) {
            return null;
        } else {
            if (DParent.left === DNode) {
                DParent.left = null;
            } else {
                DParent.right = null;
            }
        }

        return node;
    }

    if (DNode.left && DNode.right) {

        let PParent = DNode;
        [PNode, PParent] = findReplaceNode(DNode.left, PParent);

        DNode.value = PNode.value;

        if (PParent.left === PNode) {
            PParent.left = PNode.left;
        } else {
            PParent.right = PNode.left;
        }

    } else {
        let PNode;

        if (DNode.left) {
            PNode = DNode.left;
        } else {
            PNode = DNode.right;
        }

        if (DNode !== node) {
            if (DNode === DParent.left) {
                DParent.left = PNode;
            } else {
                DParent.right = PNode;
            }
        } else {
            node = PNode;
        }
    }

    return node;
}

function test() {
    // var node8 = new Node(2.5, null, null);
    // var node4 = new Node(3, node8, null);
    // var node7 = new Node(4.4, null, null);
    // var node6 = new Node(4.5, node7, null);
    // var node5 = new Node(5, node6, null);
    // var node2 = new Node(4, node4, node5);
    // var node9 = new Node(8.5, null, null);
    // var node3 = new Node(9, node9, null);
    // var node1 = new Node(7, node2, node3);
    // var main = new Node(15, node1, null);
    // var newHead = remove(main, 8.5);

    var node1 = new Node(2, null, null);
    var node2 = new Node(3, node1, null);
    var node3 = new Node(1, null, node2);
    var node4 = new Node(6, null, null);
    var node5 = new Node(8, node4, null);
    var node6 = new Node(10, node5, null);
    var node7 = new Node(5, node3, node6);
    var newHead = remove(node7, 5);

    console.log("\n----- Result\n")
    treePrint(newHead)
}

//test()
