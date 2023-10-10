const readline = require("readline");
const fs = require("fs");
const path = require("path");

let curLine = 0;
let n = 0;
let m = 0;
let graph = null;
let weight = new Map();
let visited = null;
let key = null;

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
    .on("close", () => maxSpanningTree())

function maxSpanningTree() {
    let ans = 0;
    let ansType = 1;

    key = new Array(n + 1).fill(0);

    const stack = [1];
    key[1] = 0;
    let tmp = [];

    while (stack.length) {
        let v = stack.pop();

        if (!visited[v]) {
            visited[v] = true;

            for (let i = 0; i < graph[v].length; i++) {
                let u = graph[v][i];

                if (!visited[u]) {
                    tmp.push([u,weight.get(`${v}-${u}`)]);
                }
            }

            if (tmp.length > 0) {
                tmp.sort((a, b) => a[1] - b[1])
                let big = tmp.pop();
                while (big && visited[big[0]]) {
                    big = tmp.pop();
                }

                if (big) {
                    if (big[1] > key[big[0]]) {
                        key[big[0]] = big[1];
                    }
                    stack.push(big[0])
                }
            }
        }
    }


    for (let i = 0; i < key.length; i++) {
        ans += key[i];
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