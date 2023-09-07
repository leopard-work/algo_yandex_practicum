//if (process.env.REMOTE_JUDGE !== 'true') {
    class Node {
        constructor(value, left = null, right = null) {
            this.value = value;
            this.left = left;
            this.right = right;
        }
    }
//}


function treeShow(head, prefix = "head", line = "") {
    if (!head) {
        return;
    }

    console.log(prefix + line, head.value)

    treeShow(head.left, "left", line + "-")
    treeShow(head.right, "right", line + "-")
}

function remove(node, key) {
    let current = node;
    let parent = null;

    while (current && current.value !== key) {
        if (key >= current.value) {
            parent = current;
            current = current.right;
        } else {
            parent = current;
            current = current.left;
        }
    }

    if (!current) {
        return node;
    }

    let change = current;
    let changeParent = null;

    if (current.left) {
        change = current.left;

        while (change.right) {
            changeParent = change;
            change = change.right;
        }

        //changeParent.right = null;
    } else {
        if (current.right) {
            change = current.right;

            while (change.left) {
                changeParent = change;
                change = change.left;
            }

            //changeParent.left = null;
        }
    }

    ///////

    // if (!change.left && !change.right) {
    //     change.right = current.right;
    //     change.left = current.left;
    //
    //     if (parent.right.value === key) {
    //         parent.right = change;
    //     } else {
    //         parent.left = change;
    //     }
    // }

    console.log('------')
    treeShow(current)
    console.log('------')
    treeShow(parent)
    console.log('Элемент который меняем')
    treeShow(change)
    console.log('Предыдущий заменяемый элемент')
    treeShow(changeParent)
    console.log('Нода конечная')
    treeShow(node)


    return node;
}

function test() {
    const l1 = 0

    var node1 = new Node(1, null, null);
    var node2 = new Node(3, null, null);
    var node3 = new Node(2, node1, node2);
    var node4 = new Node(5, null, null);
    var node5 = new Node(7, null, null);
    var node6 = new Node(6, node4, node5);
    var left = new Node(4, node3, node6);

    var node7 = new Node(9, null, null);
    var node8 = new Node(11, null, null);
    var node9 = new Node(10, node7, node8);
    var node10 = new Node(13, null, null);
    var node11 = new Node(15, null, null);
    var node12 = new Node(14, node10, node11);
    var right = new Node(12, node9, node12);

    var main = new Node(8, left, right);


    var newHead = remove(main, 14);

    //console.log(newHead)
    //console.log(newHead)
    //console.assert(newHead.value === 5);
    //console.assert(newHead.right === node5);
    // console.assert(newHead.right.value === 8);
}

test()
