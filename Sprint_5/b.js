if (process.env.REMOTE_JUDGE !== 'true') {
    class CNode {
        constructor(value) {
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }
}

function solution(root) {
    return dfs(root) !== -1;
}

function dfs(node) {
    if (!node) {
        return 0;
    }

    const left = dfs(node.left);

    if (left === -1) {
        return -1;
    }

    const right = dfs(node.right);

    if (right === -1) {
        return -1;
    }

    if (Math.abs(left - right) > 1) {
        return -1;
    }

    return Math.max(left, right) + 1;
}

function test() {
    var node0 = new CNode(0);
    var node1 = new CNode(1);
    //node1.left = node0;
    var node2 = new CNode(-5);
    var node3 = new CNode(3);
    node3.left = node1;
    node3.right = node2;
    var node4 = new CNode(10);
    var node5 = new CNode(2);
    node5.left = node3;
    node5.right = node4;
    console.log(node5)
    console.assert(solution(node5));
}

//test();