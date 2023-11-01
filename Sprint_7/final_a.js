// https://contest.yandex.ru/contest/25597/run-report/95508559/

const readline = require("readline");
const fs = require("fs");
const path = require("path");

let currentLine = 0;
let s = null;
let t = null;

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (currentLine === 0) {
            s = line;
        } else {
            t = line;
        }
        currentLine++;
    })
    .on("close", () => distance());

function distance() {
    const dp = new Array(t.length + 1);
    dp[0] = [...Array(s.length + 1).keys()];

    for (let i = 1; i <= t.length; i++) {
        dp[i] = new Array(s.length + 1).fill(0);
        dp[i][0] = i;
    }

    for (let i = 1; i <= t.length; i++) {
        for (let j = 1; j <= s.length; j++) {
            let replace = dp[i - 1][j - 1];

            if (t[i - 1] !== s[j - 1]) {
                replace++;
            }

            dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, replace)
        }
    }

    console.log(dp[t.length][s.length]);
}
