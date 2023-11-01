// https://contest.yandex.ru/contest/25597/run-report/95540633/

const readline = require("readline");
const fs = require("fs");
const path = require("path");

let currentLine = 0;
let n = null;
let data = null;

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (currentLine === 0) {
            n = Number(line);
        } else {
            data = line.split(" ").map(Number);
        }
        currentLine++;
    })
    .on("close", () => sameAmounts());

function sameAmounts() {
    let ok = 1;
    let sum = data.reduce((acc, cur) => acc += cur);

    if (sum % 2) {
        console.log("False");
        ok = 0;
    }

    if (ok) {
        const dp = new Array(sum / 2 + 1).fill(0);
        dp[0] = 1;

        for (let j = 0; j < data.length; j++) {
            for (let i = sum / 2; i >= data[j]; i--) {
                if (dp[i - data[j]] === 1) {
                    dp[i] = 1;
                }
            }
        }

        console.log(dp[dp.length - 1] ? "True" : "False");
    }
}
