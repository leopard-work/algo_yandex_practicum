const readline = require("readline");
const fs = require("fs");
const path = require("path");

let currentLine = 0;
let n = 0;
let m = 0;
let data = null;

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (currentLine === 0) {
            [n,m] = line.split(" ").map(elem => Number(elem));
        } else {
            data = line.split(" ").map(elem => Number(elem));
        }
        currentLine++;
    })
    .on("close", () => solve());

function solve() {
    const dp = new Array(m + 1).fill(0);
    dp[0] = 1;
    let ans = 0;


    for (let j = 0; j < data.length; j++) {
        for (let i = m; i >= data[j]; i--) {
            if (dp[i - data[j]] === 1) {
                dp[i] = 1;
                ans = Math.max(ans, i);
            }
        }
    }

    console.log(ans)
}
