const readline = require("readline");
const fs = require("fs");
const path = require("path");

let curLine = 0;
let n = 0;
let m = 0;
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
            const [a,b] = line.split(/\s/).map(item => parseInt(item));
            graph[a].push(b);
            graph[b].push(a);
        }
        curLine++;
    })
    .on("close", () => components(n, m, graph))

function components(n, m, graph) {
    const colors = new Array(n + 1).fill(0);
    let color = 0;

    for (let k = 1; k <= n; k++) {

        if (colors[k] === 0) {
            color++;
            const stack = [k];

            while (stack.length > 0) {
                const v = stack.pop();

                if (colors[v] === 0) {
                    colors[v] = -1;
                    stack.push(v);
                    graph[v].sort((a,b) => b - a);

                    for (let i = 0; i < graph[v].length; i++) {
                        if (colors[graph[v][i]] === 0) {
                            stack.push(graph[v][i]);
                        }
                    }
                } else {
                    if (colors[v] === -1) {
                        colors[v] = color;
                    }
                }
            }
        }
    }

    console.log(color);

    let output = new Array(color).fill("");
    for (let i = 1; i < colors.length; i++) {
        output[colors[i] - 1] += i + " ";
    }

    for (const line of output) {
        console.log(line);
    }
}