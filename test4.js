//if (process.env.REMOTE_JUDGE !== 'true') {
class CNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
//}


function solution(root) {
    // let [, maxTreeSum] = searchMaxPath(root);
    const [, result] = searchMax(root);
    console.log(result)
    return result;
}

function searchMax(root, result) {
    if (root === null) {
        return [0, result];
    }

    let left;

    [left, result] = searchMax(root.left, result);
    let [right,] = searchMax(root.right, result);

    let branch = Math.max(left, right) + root.value;
    let tree = Math.max(branch, left + right + root.value);

    if (!result) {
        result = 0;
    }

    result = Math.max(result, tree);

    return [branch, result];
}

function searchMaxPath(root, maxSum = null) {
    if (root === null) {
        return [0, maxSum];
    }

    let [leftMaxSum, updatedMaxSum] = searchMaxPath(root.left, maxSum);
    let [rightMaxSum, updatedMaxSum2] = searchMaxPath(root.right, updatedMaxSum);

    let branchMaxSum = Math.max(leftMaxSum, rightMaxSum) + root.value;
    let subtreeMaxSum = Math.max(branchMaxSum, leftMaxSum + rightMaxSum + root.value);

    if (updatedMaxSum === null) {
        updatedMaxSum = subtreeMaxSum;
    } else {
        updatedMaxSum = Math.max(subtreeMaxSum, updatedMaxSum);
    }

    return [branchMaxSum, updatedMaxSum];
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