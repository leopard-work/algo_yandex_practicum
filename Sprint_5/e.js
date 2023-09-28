//  class CNode {
//     constructor(value, left = null, right = null) {
//         this.value = value;
//         this.left = left;
//         this.right = right;
//     }
// }


function solution(root) {
    return search(root, -Infinity, Infinity);
}

function search(root, left, right) {
    if (!root) {
        return true;
    }

    if (root.value <= left || root.value >= right) {
        return false;
    }

    const leftResult = search(root.left, left, root.value);
    const rightResult = search(root.right, root.value, right);

    return leftResult && rightResult;
}

// function test() {
//     var node1 = new CNode(1, null, null);
//     var node2 = new CNode(4, null, null);
//     var node3 = new CNode(3, node1, node2);
//     var node4 = new CNode(8, null, null);
//     var node5 = new CNode(5, node3, node4);
//     console.assert(solution(node5));
//     node4.value = 5;
//     //console.log(node5)
//     console.assert(!solution(node5));
// }
//
// test()