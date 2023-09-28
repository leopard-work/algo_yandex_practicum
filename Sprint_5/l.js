function siftDown(heap, idx) {
    let leftIndex;
    let rightIndex;
    let swapIndex;

    const check = () => {
        leftIndex = idx * 2
        rightIndex = idx * 2 + 1;
        swapIndex = leftIndex;

        if (rightIndex < heap.length && heap[leftIndex] < heap[rightIndex]) {
            swapIndex = rightIndex;
        }

        if (rightIndex < heap.length && heap[leftIndex] < heap[rightIndex]) {
            swapIndex = rightIndex;
        }
    }

    check();

    while (leftIndex < heap.length && heap[idx] < heap[swapIndex]) {
        [heap[idx], heap[swapIndex]] = [heap[swapIndex], heap[idx]];
        idx = swapIndex;
        check();
    }

    return idx;
}

// function test() {
//     var sample = [-1, 12, 1, 8, 3, 4, 7];
//     console.assert(siftDown(sample, 2) === 5);
// }
//
// test();