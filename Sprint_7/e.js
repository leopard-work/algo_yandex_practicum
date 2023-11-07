const readline = require("readline");
const fs = require("fs");
const path = require("path");

let currentLine = 0;
let x = 0;
let k = 0;
let data = [];
let set = null;

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (currentLine === 0) {
            x = Number(line);
        } else {
            if (currentLine === 1) {
                k = Number(line);
            } else {
                data.push(...line.split(' ').map((i) => Number(i)))
                set = new Set(data);
            }
        }
        currentLine++;
    })
    .on("close", () => solve());

function solve() {
    const dp = new Array(x + 1).fill(0);

    for (let i = 1; i <= x; i++) {
        dp[i] = Infinity;

        for (let j of set) {
            if (j <= i) {
                dp[i] = Math.min(dp[i], dp[i - j] + 1);
            }
        }
    }

    if (dp[x] === 0 || dp[x] === Infinity) {
        console.log(-1);
    } else {
        console.log(dp[x]);
    }
}
