const readline = require("readline");
const fs = require("fs");
const path = require("path");

let curLine = 0;
let n = 0;
let graph = null;
const colors = new Map();

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (curLine === 0) {
            n = parseInt(line);
            graph = new Array(n).fill(null).map(() => []);
        } else {
            const s = line.trim().split("");

            for (let i = curLine; i < n; i++) {
                graph[curLine].push(i + 1);
            }

            for (let i = 0; i < s.length; i++) {
                colors.set(`${curLine}-${curLine + 1 + i}`, s[i]);
            }
        }
        curLine++;
    })
    .on("close", () => railways())

function railways() {
    console.log(graph)
    console.log(colors)
}