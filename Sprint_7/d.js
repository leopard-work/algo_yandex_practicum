const readline = require("readline");
const fs = require("fs");
const path = require("path");

let currentLine = 0;
let n = 0;

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        n = Number(line);
        currentLine++;
    })
    .on("close", () => solve());

function solve() {
    const dp = new Array(n);
    const MOD = 1000000007;
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] % MOD) + (dp[i - 2] % MOD) % MOD;
    }

    console.log(dp[n] % MOD)
}
