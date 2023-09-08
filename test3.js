// Helper function to find the node with the minimum key in the subtree with root `curr`
function getMinimumKey(curr) {
    while (curr.left !== null) {
        curr = curr.left;
    }
    return curr;
}

// Recursive function to insert a key into the BST
function insert(root, key) {
    // if the root is null, create a new node and return it
    if (root === null) {
        return { data: key, left: null, right: null };
    }

    // if the given key is less than the root node, recurse for the left subtree
    if (key < root.data) {
        root.left = insert(root.left, key);
    }

    // if the given key is greater than the root node, recurse for the right subtree
    else {
        root.right = insert(root.right, key);
    }

    return root;
}

// Iterative function to search for a key in the subtree with root `curr` and set its parent.
// Note that `curr` and `parent` are passed by reference to the function.
function searchKey(curr, key, parent) {
    // traverse the tree and search for the key
    while (curr !== null && curr.data !== key) {
        // update the parent to the current node
        parent[0] = curr;

        // if the given key is less than the current node, go to the left subtree;
        // otherwise, go to the right subtree
        if (key < curr.data) {
            curr = curr.left;
        }
        else {
            curr = curr.right;
        }
    }
}

// Function to delete a node from the BST
function deleteNode(root, key) {
    // pointer to store the parent of the current node
    let parent = [null];

    // start with the root node
    let curr = root;

    // search for the key in the BST and set its parent pointer
    searchKey(curr, key, parent);

    // return if the key is not found in the tree
    if (curr === null) {
        return;
    }

    // Case 1: the node to be deleted is a leaf node (i.e., it has no children)
    if (curr.left === null && curr.right === null) {
        // if the node to be deleted is not the root node, set its parent's left/right child to null
        if (curr !== root) {
            if (parent[0].left === curr) {
                parent[0].left = null;
            }
            else {
                parent[0].right = null;
            }
        }
        // if the tree has only the root node, set it to null
        else {
            root = null;
        }

        // free the memory
        curr = null;
    }

    // Case 2: the node to be deleted has two children
    else if (curr.left && curr.right) {
        // find its in-order successor node
        let successor = getMinimumKey(curr.right);

        // save the value of the successor node
        let val = successor.data;

        // recursively delete the successor node. Note that the successor
        // will have at most one child (right child)
        deleteNode(root, successor.data);

        // copy the value of the successor node to the current node
        curr.data = val;
    }

    // Case 3: the node to be deleted has only one child
    else {
        // select the child node
        let child = (curr.left !== null) ? curr.left : curr.right;

        // if the node to be deleted is not the root node, set its parent
        // to its child node
        if (curr !== root) {
            if (curr === parent[0].left) {
                parent[0].left = child;
            }
            else {
                parent[0].right = child;
            }
        }

        // if the node to be deleted is the root node, set the root to its child node
        else {
            root = child;
        }

        // free the memory
        curr = null;
    }
}