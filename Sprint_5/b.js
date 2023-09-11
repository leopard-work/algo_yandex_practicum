//if (process.env.REMOTE_JUDGE !== 'true') {
    class CNode {
        constructor(value) {
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }
//}

function solution(root) {

    console.log(isBalace(root.left, root.right, 0))

    return true;
}

function isBalace(left, right, count) {
    if (Math.abs(count) > 1) {
        return false;
    }

    if (!left) {
        count--;
    } else {
        isBalace(left.left, left.right, count);
    }
    if (!right) {
        count++;
    } else {
        isBalace(right?.left, right?.right, count);
    }
}

function test() {
    var node0 = new CNode(0);
    var node1 = new CNode(1);
    node1.left = node0;
    var node2 = new CNode(-5);
    var node3 = new CNode(3);
    node3.left = node1;
    node3.right = node2;
    var node4 = new CNode(10);
    var node5 = new CNode(2);
    node5.left = node3;
    node5.right = node4;
    console.assert(solution(node5));
}

test();