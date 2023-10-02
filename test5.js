const readline = require("readline");
const fs = require("fs");
const path = require("path");

let currentLine = 0,
    edgesCount = 0,
    verticesCount = 0;
const vertices = new Map();

const WHITE = 1;
const GRAY = 2;
const BLACK = 3;

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (currentLine > 0 && currentLine <= edgesCount) {
            const [u, v] = line.split(/\s/).map(s => parseInt(s, 10));
            if (vertices.has(u)) {
                vertices.get(u).push(v);
            } else {
                vertices.set(u, [v]);
            }
        } else {
            const [vCount, eCount] = line.split(/\s/).map(s => parseInt(s, 10));
            verticesCount = vCount;
            edgesCount = eCount;
        }
        currentLine++;
    })
    .on("close", () => topSort(vertices, verticesCount));

function topSort(vertices, verticesCount) {
    const colors = new Array(verticesCount + 1).fill(WHITE);

    const order = [];

    const dfs = (vertices, startIndex, order) => {
        const stack = [startIndex];
        while (stack.length > 0) {
            const v = stack.pop();
            if (colors[v] === WHITE) {
                colors[v] = GRAY;
                stack.push(v);
                if (vertices.has(v)) {
                    for (const w of vertices.get(v).sort((a, b) => b - a)) {
                        if (colors[w] === WHITE) {
                            stack.push(w);
                        }
                    }
                }
            } else if (colors[v] === GRAY) {
                colors[v] = BLACK;
                order.push(v);
            }
        }
    };
    for (let i = 1; i <= verticesCount; i++) {
        if (colors[i] === WHITE) {
            dfs(vertices, i, order);
        }
    }
    console.log(order.reverse().join(" "));
}