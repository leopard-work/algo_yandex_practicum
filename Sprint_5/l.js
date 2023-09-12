function siftDown(heap, idx) {
    let leftIndex = idx * 2
    let rightIndex = idx * 2 + 1;
    let swapIndex = leftIndex;

    if (rightIndex < heap.length && heap[leftIndex] < heap[rightIndex]) {
        swapIndex = rightIndex;
    }

    while (leftIndex < heap.length && heap[idx] < heap[swapIndex]) {
        [heap[idx], heap[swapIndex]] = [heap[swapIndex], heap[idx]];
        idx = swapIndex;
        leftIndex = idx * 2
        rightIndex = idx * 2 + 1;
        swapIndex = leftIndex;

        if (rightIndex < heap.length && heap[leftIndex] < heap[rightIndex]) {
            swapIndex = rightIndex;
        }
    }

    return idx;
}

function test() {
    var sample = [-1, 12, 1, 8, 3, 4, 7];
    console.assert(siftDown(sample, 2) === 5);
}

//test();