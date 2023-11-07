const readline = require("readline");
const fs = require("fs");
const path = require("path");

let currentLine = 0;
let n = 0;
let m = 0;
let a = null;
let b = null;

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (currentLine === 0) {
            n = Number(line);
        }
        if (currentLine === 1) {
            a = line.split(" ").map(elem => Number(elem));
        }
        if (currentLine === 2) {
            m = Number(line);
        }
        if (currentLine === 3) {
            b = line.split(" ").map(elem => Number(elem));
        }
        currentLine++;
    })
    .on("close", () => solve());

function solve() {
    const dp = new Array(n + 1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(m + 1).fill(0);
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (a[i - 1] === b[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    let ansA = [];
    let ansB = [];

    let i = n;
    let j = m;

    while (dp[i][j] !== 0) {
        if (dp[i - 1][j] === dp[i][j - 1]) {
            if (b[j - 1] === a[i - 1]) {
                ansB.push(j);
                ansA.push(i);
                i--;
                j--;
            } else {
                i--;
            }
        } else {
            if (dp[i - 1][j] >= dp[i][j - 1]) {
                i--
            } else {
                j--;
            }
        }
    }

    console.log(dp[n][m]);
    console.log(ansA.reverse().join(" "));
    console.log(ansB.reverse().join(" "));
}
