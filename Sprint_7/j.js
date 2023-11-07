const readline = require("readline");
const fs = require("fs");
const path = require("path");

let currentLine = 0;
let n = 0;
let data = null;

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (currentLine === 0) {
            n = Number(line);
        } else {
            data = line.split(" ").map(elem => Number(elem));
        }
        currentLine++;
    })
    .on("close", () => solve());

function solve() {
    const dp = new Array(n).fill(1);
    let maxValue = 1;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (data[i] > data[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
                maxValue = Math.max(maxValue, dp[i])
            }
        }
    }

    const ans = [];
    for (let i = dp.length - 1; i >= 0; i--) {
        if (dp[i] === maxValue) {
            maxValue--;
            ans.push(i + 1);
        }
    }

    console.log(ans.length)
    console.log(ans.reverse().join(" "))
}
