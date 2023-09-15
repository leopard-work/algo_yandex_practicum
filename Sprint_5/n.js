//if (process.env.REMOTE_JUDGE !== 'true') {
    class Node {
        constructor(value, left = null, right = null, size = 0) {
            this.value = value;
            this.left = left;
            this.right = right;
            this.size = size;
        }
    }
//}

function treePrint(head, prefix = "head", line = "") {
    if (!head) {
        return;
    }

    console.log(prefix + line, head.value)

    treePrint(head.left, "left", line + "-")
    treePrint(head.right, "right", line + "-")
}

function getSize(node) {
    if (node) {
        return node.size;
    }

    return 0;
}

function split(node, k) {
    if (node === null) {
        return [null, null];
    }

    const leftSize = getSize(node.left);
    const rightSize = getSize(node.right);

    if (leftSize + 1 <= k) {
        k -= leftSize + 1;
        const [right, rightSide] = split(node.right, k);
        node.right = right;
        return [rightSide, node];
    }

    const [left, leftSide] = split(node.left, k);
    node.left = left;
    return [leftSide, node];
}

function test() {
    const node1 = new Node(3, null, null, 1);
    const node2 = new Node(2, null, node1, 2);
    const node3 = new Node(8, null, null, 1);
    const node4 = new Node(11, null, null, 1);
    const node5 = new Node(10, node3, node4, 3);
    const node6 = new Node(5, node2, node5, 6);
    const res = split(node6, 1);

    treePrint(res[0]);
    console.log('---')
    treePrint(res[1]);

    //console.assert(res[0].size === 4);
    //console.assert(res[1].size === 2);
}

test();


/*
class Node {
    constructor(value, left = null, right = null, size = 0) {
        this.value = value;
        this.left = left;
        this.right = right;
        this.size = size;
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

function split(node, k) {
    if (node === null) {
        return [null, null];
    }

    const [ls, rs] = treeSizes(node.left, node.right);

    if (ls + 1 > k) {
        const [ln, rn] = split(node.left, k);
        const rnSize = treeSizes(ln, rn)[1];

        node.size = node.size - ls + rnSize;
        node.left = rn;

        return [ln, node];
    }

    const [ln, rn] = split(node.right, k - (ls + 1));
    const [lnSize, _] = treeSizes(ln, rn);

    node.size = node.size - rs + lnSize;
    node.right = ln;

    return [node, rn];
}

function treeSizes(l, r) {
    let ls = l ? l.size : 0;
    let rs = r ? r.size : 0;

    return [ls, rs];
}

function test() {
    const node1 = new Node(3, null, null, 1);
    const node2 = new Node(2, null, node1, 2);
    const node3 = new Node(8, null, null, 1);
    const node4 = new Node(11, null, null, 1);
    const node5 = new Node(10, node3, node4, 3);
    const node6 = new Node(5, node2, node5, 6);

    treePrint(node6)

    const res = split(node6, 1);

    console.log('---')
    treePrint(res[0])
    console.log('---')
    treePrint(res[1])

    console.assert(res[0].size === 4);
    console.assert(res[1].size === 2);
}

test()
 */