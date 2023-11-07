const readline = require("readline");
const fs = require("fs");
const path = require("path");

let currentLine = 0;
let n= 0;
let k = 0;
const MOD = 1000000007;

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        const inp = line.split(" ").map(elem => Number(elem));
        n = inp[0];
        k = inp[1];

        currentLine++;
    })
    .on("close", () => jumpingStairs());

function jumpingStairs() {
    const dp = [];

    dp[1] = 1;
    dp[2] = 1;

    for (let i = 3; i <= n; i++) {
        let value = 0;

        let j = i - 1;
        let prev = k;

        while (j > 0 && prev > 0) {
            value += dp[j] % MOD;
            j--;
            prev--;
        }

        dp[i] = value % MOD;
    }

    console.log(dp[n] % MOD);
}