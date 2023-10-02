const readline = require("readline");
const fs = require("fs");
const path = require("path");

let currentLine = 0;
let n = 0;
let m = 0;
let graph = null;

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (currentLine > 0 && currentLine <= m) {
            const [a, b] = line.split(/\s/).map(s => parseInt(s, 10));
            graph[a].push(b);
        } else {
            const [a, b] = line.split(/\s/).map(s => parseInt(s, 10));
            n = a;
            m = b;
            graph = new Array(n + 1).fill(null).map(() => [])
        }
        currentLine++;
    })
    .on("close", () => topSort(n, m, graph));


const WHITE = -1;
const GRAY = 0;
const BLACK = 1;

function topSort(n, m, graph) {
    const ans = [];
    const colors = new Array(n + 1).fill(WHITE);

    for (let k = 1; k <= n; k++) {
        if (colors[k] === WHITE) {
            const stack = [k];

            while (stack.length > 0) {
                const v = stack.pop();

                if (colors[v] === WHITE) {
                    colors[v] = GRAY;
                    stack.push(v);

                    graph[v].sort((a, b) => b - a);

                    for (let i = 0; i < graph[v].length; i++) {
                        if (colors[graph[v][i]] === WHITE) {
                            stack.push(graph[v][i]);
                        }
                    }
                } else {
                    if (colors[v] === GRAY) {
                        ans.push(v);
                        colors[v] = BLACK;
                    }

                }
            }
        }
    }

    console.log(ans.reverse().join(' '));
}