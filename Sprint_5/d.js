if (process.env.REMOTE_JUDGE !== 'true') {
    class CNode {
        constructor(value, left = null, right = null) {
            this.value = value;
            this.left = left;
            this.right = right;
        }
    }
}

function solution(root1, root2) {
    return searchLeft(root1) === searchLeft(root2)
}

function searchLeft(root) {
    if (!root) {
        return "";
    }

    return searchLeft(root.left) + root.value + searchLeft(root.right);
}

function test() {
    var node1 = new CNode(1,  null,  null);
    var node2 = new CNode(2,  null,  null);
    var node3 = new CNode(3,  node1,  node2);

    var node4 = new CNode(1,  null,  null);
    var node5 = new CNode(2,  null,  null);
    var node6 = new CNode(3,  node4,  node5);

    // var l1 = new CNode(3,  null,  null);
    // var l2 = new CNode(1,  l1,  null);
    //
    // var l3 = new CNode(3,  null,  null);
    // var l4 = new CNode(1,  null,  l3);

    console.assert(solution(node3, node6));
    // console.assert(solution(l2, l4));
}

// test();