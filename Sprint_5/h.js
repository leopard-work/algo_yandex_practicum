if (process.env.REMOTE_JUDGE !== 'true') {
    class CNode {
        constructor(value, left = null, right = null) {
            this.value = value;
            this.left = left;
            this.right = right;
        }
    }
}

function solution(root) {
    const sumArr = findBranchSum(root);
    return sumArr.reduce((acc, cur) => acc += cur, 0);
}

function findBranchSum(root, tmp = "", results = []) {
    tmp += root.value;

    if (!root.left && !root.right) {
        results.push(Number(tmp));
        return results;
    } else {
        if (root.left) {
            findBranchSum(root.left, tmp, results);
        }
        if (root.right) {
            findBranchSum(root.right, tmp, results);
        }
    }

    return results;
}

function test() {
    // var node1 = new CNode(2, null, null);
    // var node2 = new CNode(1, null, null);
    // var node3 = new CNode(3, node1, node2);
    // var node4 = new CNode(2, null, null);
    // var node5 = new CNode(1, node4, node3);
    // console.assert(solution(node5) === 275);

    var node7 = new CNode(1, null, null);
    var node8 = new CNode(0, null, null);

    console.assert(solution(node8) === 1)
}

// test();