// https://contest.yandex.ru/contest/25070/run-report/92659141/

const readline = require("readline");
const fs = require("fs");
const path = require("path");

let curLine = 0;
let n = 0;
let m = 0;
let graph = null;
const weight = new Map();
let visited = null;
let dist = null;

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (curLine === 0) {
            [n,m] = line.split(/\s/).map(item => parseInt(item));
            graph = new Array(n + 1).fill(null).map(() => []);
            visited = new Array(n + 1).fill(false);
        } else {
            const [a,b,c] = line.split(/\s/).map(item => parseInt(item));
            graph[a].push(b);
            graph[b].push(a);
            if (!weight.has(`${a}-${b}`) || weight.get(`${a}-${b}`) < c) {
                weight.set(`${a}-${b}`, c);
            }
            if (!weight.has(`${b}-${a}`) || weight.get(`${b}-${a}`) < c) {
                weight.set(`${b}-${a}`, c);
            }
        }
        curLine++;
    })
    .on("close", () => maxSpanningTree(1))


function compare(a, b) {
    if (a[1] < b[1]) {
        return -1;
    }
    if (a[1] > b[1]) {
        return 1;
    }

    return 0;
}

function siftUp(heap, idx) {
    let parentIndex = Math.floor(idx / 2);

    while (parentIndex !== 0 && compare(heap[idx], heap[parentIndex]) === 1) {
        [heap[parentIndex], heap[idx]] = [heap[idx], heap[parentIndex]]
        idx = parentIndex;
        parentIndex = Math.floor(idx / 2);
    }

    return idx;
}

function siftDown(heap, idx) {
    let leftIndex;
    let rightIndex;
    let swapIndex;

    const check = () => {
        leftIndex = idx * 2
        rightIndex = idx * 2 + 1;
        swapIndex = leftIndex;

        if (rightIndex < heap.length && compare(heap[leftIndex], heap[rightIndex]) === -1) {
            swapIndex = rightIndex;
        }
    }

    check();

    while (leftIndex < heap.length && compare(heap[idx], heap[swapIndex]) === -1) {
        [heap[idx], heap[swapIndex]] = [heap[swapIndex], heap[idx]];
        idx = swapIndex;
        check();
    }

    return idx;
}

function heapPush(heap, key) {
    const index = heap.length;
    heap.push(key);
    if (heap.length) {
        siftUp(heap, index);
    }
}

function heapPop(heap) {
    if (heap.length <= 1) {
        return null;
    }

    const ans = heap[1];
    if (heap.length > 2) {
        heap[1] = heap.pop();
    } else {
        heap.pop();
    }
    siftDown(heap, 1);

    return ans;
}

function maxSpanningTree(start) {
    let ans = 0;
    let ansType = 1;

    dist = new Array(n + 1).fill(0);

    const stack = [start];
    dist[start] = 0;

    let heap = [null];

    while (stack.length) {
        let v = stack.pop();

        if (!visited[v]) {
            visited[v] = true;

            for (let i = 0; i < graph[v].length; i++) {
                let u = graph[v][i];

                if (!visited[u]) {
                    heapPush(heap, [u,weight.get(`${v}-${u}`)]);
                }
            }

            if (heap.length > 1) {
                let maxDist = heapPop(heap);

                while (maxDist && visited[maxDist[0]]) {
                    maxDist = heapPop(heap);
                }

                if (maxDist) {
                    if (maxDist[1] > dist[maxDist[0]]) {
                        dist[maxDist[0]] = maxDist[1];
                    }
                    stack.push(maxDist[0])
                }
            }
        }
    }


    for (let i = 0; i < dist.length; i++) {
        ans += dist[i];
    }

    for (let i = 1; i < visited.length; i++) {
        if (!visited[i]) ansType = 0;
    }

    if (ansType) {
        console.log(ans);
    } else {
        console.log("Oops! I did it again");
    }
}