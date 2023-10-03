const readline = require("readline");
const fs = require("fs");
const path = require("path");

let curLine = 0;
let n = 0;
let m = 0;
let graph = null;
let colors = null;


readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (curLine === 0) {
            [n,m] = line.split(/\s/).map(item => parseInt(item));
            graph = new Array(n + 1).fill(null).map(() => []);
            colors = new Array(n + 1).fill(-1);
        } else {
            const [a,b] = line.split(/\s/).map(item => parseInt(item));
            graph[a].push(b);
            graph[b].push(a);
        }
        curLine++;
    })
    .on("close", () => solve())

function components(start = 1) {
    const stack = [start];
    const ans = [];

    while (stack.length > 0) {
        let v = stack.pop();

        if (colors[v] === -1) {
            colors[v] = 0;
            stack.push(v);
            ans.push(v);

            for (let i = 0; i < graph[v].length; i++) {
                if (colors[graph[v][i]] === -1) {
                    stack.push(graph[v][i]);
                }
            }

        } else {
            if (colors[v] === 0) {
                colors[v] = 1;
            }
        }
    }

    return ans;
}

function solve() {
    //const ans = [];
    let output = "";
    let count = 0;

    for (let i = 1; i <= n; i++) {
        if (colors[i] === -1) {
            let tmp = components(i);
            if (tmp.length > 0) {
                //ans.push(tmp)
                count++;
                output += tmp.length + "\n";
                output += tmp.join(' ') + "\n";
            }

        }
    }

    console.log(count);
    console.log(output);

    // for (let i = 0; i < ans.length; i++) {
    //     console.log(ans[i].length);
    //     console.log(ans[i].join(' '));
    // }

}