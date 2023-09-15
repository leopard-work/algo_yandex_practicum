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
    if (!root) {
        return -1;
    }

    const left = solution(root.left);
    console.log('left', left);
    const right = solution(root.right);
    console.log('right', right);

    return root.value;
}

function test() {
    var node1 = new CNode(5, null, null);
    var node2 = new CNode(1, null, null);
    var node3 = new CNode(-3, node2, node1);
    var node4 = new CNode(2, null, null);
    var node5 = new CNode(2, node4, node3);
    console.assert(solution(node5) === 6);
}

test();