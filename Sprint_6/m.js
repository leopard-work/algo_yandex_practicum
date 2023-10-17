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
        let [a, b] = line.split(/\s/).map(s => parseInt(s, 10));

        if (currentLine > 0 && currentLine <= m) {
            graph[a].push(b);
            graph[b].push(a);
        } else {
            n = a;
            m = b;
            graph = new Array(n + 1).fill(null).map(() => [])
        }
        currentLine++;
    })
    .on("close", () => check());

function check(start = 1) {
    const colors = new Array(n + 1).fill(0);
    let thisColor = 1;
    let ans = true;

    for (let k = 1; k <= n; k++) {
        const stack = [[k, thisColor]];

        while (stack.length > 0) {
            let v = stack.pop();
            //thisColor = thisColor === 1 ? 2 : 1;

            if (colors[v[0]] === 0) {
                colors[v[0]] = v[1];
                //thisColor = thisColor === 1 ? 2 : 1;

                for (let i = 0; i < graph[v[0]].length; i++) {
                    const u = graph[v[0]][i];

                    if (colors[u] === v[1]) {
                        ans = false;
                    }

                    if (colors[u] === 0) {
                        let tmp = v[1] === 1 ? 2 : 1;
                        stack.push([u, tmp]);
                    }
                }
            }
        }
    }

    if (ans) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}