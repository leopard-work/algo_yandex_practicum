const readline = require("readline");
const fs = require("fs");
const path = require("path");

let currentLine = 0;
let n = 0;
let m = 0;
let graph = null;
let start = 0;
let end = 0;

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        const [a, b] = line.split(/\s/).map(s => parseInt(s, 10));

        if (currentLine > 0 && currentLine <= m) {
            graph[a].push(b);
            graph[b].push(a);
        } else {
            if (currentLine === 0) {
                n = a;
                m = b;
                graph = new Array(n + 1).fill(null).map(() => [])
            } else {
                start = a;
                end = b;
            }
        }
        currentLine++;
    })
    .on("close", () => distance());

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

function distance() {
    const visited = new Array(n + 1).fill(false);
    const prev = new Array(n + 1).fill(null);
    const queue = new Queue();

    queue.push(start);
    visited[start] = true;

    while (queue.length > 0) {
        let u = queue.shift();

        for (let i = 0; i < graph[u].length; i++) {
            const v = graph[u][i];

            if (!visited[v]) {
                visited[v] = true;
                prev[v] = u;
                queue.push(v);
            }
        }
    }

    //console.log(prev);
    //console.log(shortestPath(end, prev))

    const ans = [];
    let cur = end;

    while (cur !== null) {
        ans.push(cur);
        cur = prev[cur];
    }

    let output = ans.length - 1;

    if (output === 0) {
        if (start === end) {
            console.log(0);
        } else {
            console.log(-1);
        }
    } else {
        console.log(output);
    }
}