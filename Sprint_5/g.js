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
    const [, result] = searchMax(root);
    return result;
}

function searchMax(root, result) {
    if (root === null) {
        return [0, result];
    }

    let [left, newResult] = searchMax(root.left, result);
    let [right, rightFix] = searchMax(root.right, newResult);

    let branch = Math.max(left, right) + root.value;
    let tree = Math.max(branch, left + right + root.value);

    if (!newResult) {
        newResult = tree;
    } else {
        newResult = Math.max(newResult, tree);
    }

    return [branch, newResult];
}

function test() {
    var node1 = new CNode(5, null, null);
    var node2 = new CNode(0, null, null);
    var node3 = new CNode(-3, node2, node1);
    var node4 = new CNode(2, null, null);
    var node5 = new CNode(2, node4, node3);
    console.assert(solution(node5) === 6);
}

// test();