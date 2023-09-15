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
    return searchLeft(root.left) === searchRight(root.right);
}

function searchLeft(root) {
    if (!root) {
        return "";
    }

    return searchLeft(root.left) + root.value + searchRight(root.right);
}

function searchRight(root) {
    if (!root) {
        return "";
    }

    return searchRight(root.right) + root.value + searchLeft(root.left);
}

function test() {
    var node0 = new CNode(3,  null,  null);
    var node1 = new CNode(3,  null,  null);
    var node2 = new CNode(4,  null,  null);
    var node3 = new CNode(4,  null,  null);
    var node4 = new CNode(3,  null,  null);
    var node5 = new CNode(2, node1, node2);
    var node6 = new CNode(2, node3, node4);
    var node7 = new CNode(1, node5, node6);
    console.log(solution(node7))
    //console.assert(solution(node7));
}

// test()