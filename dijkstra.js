const readline = require("readline");
const fs = require("fs");
const path = require("path");

let curLine = 0;
let n = 0;
let m = 0;
let graph = null;
let weight = new Map();

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (curLine === 0) {
            [n,m] = line.split(/\s/).map(item => parseInt(item));
            graph = new Array(n + 1).fill(null).map(() => []);
        } else {
            const [a,b,c] = line.split(/\s/).map(item => parseInt(item));
            graph[a].push(b);
            graph[b].push(a);
            if (!weight.has(`${a}-${b}`) || weight.get(`${a}-${b}`) > c) {
                weight.set(`${a}-${b}`, c);
            }
            if (!weight.has(`${b}-${a}`) || weight.get(`${b}-${a}`) > c) {
                weight.set(`${b}-${a}`, c);
            }
        }
        curLine++;
    })
    .on("close", () => ans())

function getMinDistance(dist, visited) {
    let curMin = Number.POSITIVE_INFINITY;
    let curV = null;

    for (let i = 1; i <= graph.length; i++) {
        if (!visited[i] && dist[i] < curMin) {
            curMin = dist[i];
            curV = i;
        }
    }

    return curV;
}

function relax(dist, previous, u, v) {
    if (dist[v] > dist[u] + weight.get(`${u}-${v}`)) {
        dist[v] = dist[u] + weight.get(`${u}-${v}`);
        previous[v] = u;
    }
}


function ans(start = 4) {
    const dist = new Array(n + 1).fill(Number.POSITIVE_INFINITY);
    const visited = new Array(n + 1).fill(false);
    const previous = new Array(n + 1).fill(null);

    dist[start] = 0;

    while (true) {
        let u = getMinDistance(dist, visited);

        if (u === null || dist[u] === Number.POSITIVE_INFINITY) {
            break;
        }

        visited[u] = true;

        for (let i = 0; i < graph[u].length; i++) {
            relax(dist, previous, u, graph[u][i])
        }
    }

    console.log(previous);
}