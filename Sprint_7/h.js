const readline = require("readline");
const fs = require("fs");
const path = require("path");

let currentLine = 0;
let m = 0;
let n = 0;
let data = [];

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (currentLine === 0) {
            const inp = line.split(" ").map(elem => Number(elem));
            n = inp[0];
            m = inp[1];
            data.push(new Array(m + 1).fill(-Infinity));
        } else {
            data.push([-Infinity, ...line.split("").map(elem => Number(elem)), -Infinity]);
        }

        if (currentLine === n) {
            data.push(new Array(m + 1).fill(-Infinity));
        }

        currentLine++;
    })
    .on("close", () => fieldWithFlowers());

function fieldWithFlowers() {
    const dp = [];

    for (let i = 0; i <= n + 1; i++) {
        dp.push(new Array(m + 2).fill(0));
    }

    for (let i = n; i > 0; i--) {
        for (let j = 1; j <= m; j++) {
            dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]) + data[i][j];
        }
    }

    console.log(dp[1][m]);
}
