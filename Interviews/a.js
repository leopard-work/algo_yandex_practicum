const readline = require("readline");
const fs = require("fs");
const path = require("path");

let currentLine = 0;
let n = 0;
let k = 0;
let data = [];

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (currentLine === 0) {
            n = Number(line);
        }
        if (currentLine === 1) {
            k = Number(line);
        }
        if (currentLine === 2) {
            data = line.split(" ").map(Number);
        }
        currentLine++;
    })
    .on("close", () => solve());

function solve() {
    let ans = -Infinity;

    const l = new Array(n + 1).fill(0);
    const r = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        l[i] = l[i - 1] + data[i - 1];
        r[i] = r[i - 1] + data[n - i]
    }

    for (let i = 0; i <= Math.min(n, k); i++) {
        ans = Math.max(ans, l[i] + r[k - i])
    }

    console.log(ans);
}
