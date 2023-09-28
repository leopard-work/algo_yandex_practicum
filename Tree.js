class Node {
    constructor(obj, children = []) {
        this.obj = obj;
        this.children = children;
    }
}

class Node {
    constructor(obj, left = null, right = null) {
        this.obj = obj;
        this.left = left;
        this.right = right;
    }
}

function findNode(root, value) {
    if (root == null) {
        return null;
    }
    if (value < root.value) {
        return findNode(root.left, value);
    }
    if (value == root.value) {
        return root;
    }
    if (value > root.value) {
        return findNode(root.right, value);
    }
}