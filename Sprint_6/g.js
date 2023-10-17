const readline = require("readline");
const fs = require("fs");
const path = require("path");

let curLine = 0;
let n = 0;
let m = 0;
let startIndex = 0;
let graph = null;

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (curLine === 0) {
            [n,m] = line.split(/\s/).map(item => parseInt(item));
            graph = new Array(n + 1).fill(null).map(() => []);
        } else {
            if (curLine <= m) {
                const [a,b] = line.split(/\s/).map(item => parseInt(item));
                graph[a].push(b);
                graph[b].push(a);
            } else {
                startIndex = parseInt(line);
            }
        }
        curLine++;
    })
    .on("close", () => bfs(n, m, startIndex, graph))


class Queue {
    #tail = null;
    #head = null;
    length = 0;

    push(value) {
        const element = { next: null, value };
        if (this.#head) this.#head.next = element;
        if (this.#tail === null) this.#tail = element;
        this.#head = element;
        this.length++;
    }

    shift() {
        const element = this.#tail;
        if (element === null) return;
        this.#tail = element.next;
        if (this.#head === element) this.#head = null;
        this.length--;
        return element.value;
    }
}

function bfs(n, m, startIndex, graph) {
    const colors = new Array(n + 1).fill(1);
    const distance = new Array(n + 1);
    let maxDistance = 0;
    const planned = new Queue;

    planned.push(startIndex);
    colors[startIndex] = 0;
    distance[startIndex] = 0;

    while (planned.length > 0) {
        const u = planned.shift();
        graph[u].sort((a,b) => a - b);

        for (const v of graph[u]) {
            if (colors[v] === 1) {
                colors[v] = 0;
                distance[v] = distance[u] + 1;
                if (distance[v] > maxDistance) {
                    maxDistance = distance[v];
                }
                planned.push(v);
            }
        }

        colors[u] = -1;
    }

    console.log(maxDistance);
}