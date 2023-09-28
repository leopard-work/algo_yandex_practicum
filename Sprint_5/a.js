// class CNode {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }


function solution(root) {
    let maxValue = root.value;

    if (root.left) {
        maxValue = Math.max(maxValue, solution(root.left))
    }

    if (root.right) {
        maxValue = Math.max(maxValue, solution(root.right))
    }

    return maxValue;
}

// function test() {
//     var node1 = new CNode(1);
//     var node2 = new CNode(-5);
//     var node3 = new CNode(3);
//     node3.left = node1;
//     node3.right = node2;
//     var node4 = new CNode(2);
//     node4.left = node3;
//     console.log(solution(node4))
//     console.assert(solution(node4) === 3);
// }
//
// test();