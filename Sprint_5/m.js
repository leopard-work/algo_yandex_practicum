function siftUp(heap, idx) {
    let parentIndex = Math.floor(idx / 2);

    while (heap[idx] > heap[parentIndex] && parentIndex !== 0) {
        swap(heap, idx, parentIndex);
        idx = parentIndex;
        parentIndex = Math.floor(idx / 2);
    }

    return idx;
}

function swap(heap, a, b) {
    let tmp = heap[a];
    heap[a] = heap[b];
    heap[b] = tmp;
}

function test() {
    var sample = [-1, 12, 6, 8, 3, 6, 7];
    console.log(sample)
    console.assert(siftUp(sample, 5) === 1);
}

// test();