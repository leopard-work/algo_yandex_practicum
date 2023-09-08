class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function treePrint(head, prefix = "head", line = "") {
    if (!head) {
        return;
    }

    console.log(prefix + line, head.value)

    treePrint(head.left, "left", line + "-")
    treePrint(head.right, "right", line + "-")
}

function remove(node, key) {
    if (!node) {
        return null;
    }
    const LEFT_IN_RIGHT_TREE = 1;
    const RIGHT_IN_LEFT_TREE = 2;

    const findNodeToDelete = (node, key, parent = null) => {
        if (node.left && node.value > key) {
            return findNodeToDelete(node.left, key, node);
        } else if (node.right && node.value < key) {
            return findNodeToDelete(node.right, key, node);
        } else if (node.value === key) {
            return [parent, node];
        }
        return [null, null];
    };

    const findNodeToReplace = (node, direction, parent = null) => {
        if (!node) {
            return [null, null];
        }
        if (direction === LEFT_IN_RIGHT_TREE) {
            if (!node.left) {
                return [parent, node];
            } else {
                return findNodeToReplace(node.left, direction, node);
            }
        } else {
            if (!node.right) {
                return [parent, node];
            } else {
                return findNodeToReplace(node.right, direction, node);
            }
        }
    };
    // получаем вершину для удаления и ее родителя
    const [deleteParent, deleteNode] = findNodeToDelete(node, key);
    // нет такой вершины
    if (!deleteNode) {
        return node;
    }
    // дерево состоит из одной вершины, нет ни родителей, ни предков, ее и удаляем
    if (!deleteParent && !deleteNode.left && !deleteNode.right) {
        return null;
    }
    // если вершина - лист, то просто удаляем информацию о ней у родителя
    if (!deleteNode.left && !deleteNode.right) {
        if (deleteParent.left && deleteParent.left.value === deleteNode.value) {
            deleteParent.left = null;
        } else {
            deleteParent.right = null;
        }
        return node;
        // далее общий случай
    } else {
        const direction = deleteNode.left
            ? RIGHT_IN_LEFT_TREE
            : LEFT_IN_RIGHT_TREE;
        // получаем вершину для замены и ее родителя
        // если родитель равен null, то вершина для замены replaceNode -
        // это потомок вершины для удаления deleteNode
        const [replaceParent, replaceNode] = findNodeToReplace(
            deleteNode.left || deleteNode.right,
            direction
        );
        // удаляем у текущего родителя сведения о вершине для замены
        if (replaceParent) {
            if (direction === LEFT_IN_RIGHT_TREE) {
                replaceParent.left = replaceNode.right;
            } else {
                replaceParent.right = replaceNode.left;
            }
        }
        // удаляем вершину, которую требуется удалить
        if (deleteNode.left && deleteNode.left.value !== replaceNode.value) {
            replaceNode.left = deleteNode.left;
        }
        if (deleteNode.right && deleteNode.right.value !== replaceNode.value) {
            replaceNode.right = deleteNode.right;
        }
        // если вершина, которую требуется удалить, не корень дерева,
        // то необходимо внести изменения в ее родителя
        if (deleteParent) {
            if (
                deleteParent.left &&
                deleteParent.left.value === deleteNode.value
            ) {
                deleteParent.left = replaceNode;
            } else {
                deleteParent.right = replaceNode;
            }
        } else {
            // частный случай - если удалили корень дерева, нужно вернуть новый корень
            return replaceNode;
        }
        return node;
    }
}

function test() {
    var node1 = new Node(2, null, null);
    var node2 = new Node(3, node1, null);
    var node3 = new Node(1, null, node2);
    var node4 = new Node(6, null, null);
    var node5 = new Node(8, node4, null);
    var node6 = new Node(10, node5, null);
    var node7 = new Node(5, node3, node6);
    var newHead = remove(node7, 5);

    treePrint(newHead)

    // var node8 = new Node(2.5, null, null);
    // var node4 = new Node(3, node8, null);
    // var node7 = new Node(4.4, null, null);
    // var node6 = new Node(4.5, node7, null);
    // var node5 = new Node(5, node6, null);
    // var node2 = new Node(4, node4, node5);
    // var node9 = new Node(8.5, null, null);
    // var node3 = new Node(9, node9, null);
    // var node1 = new Node(7, node2, node3);
    // var main = new Node(15, node1, null);
    // var newHead = remove(main, 8.5);
    // treePrint(newHead)

}

test();