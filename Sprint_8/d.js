const readline = require("readline");
const fs = require("fs");
const path = require("path");

let currentLine = 0;
let data = [];

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (currentLine !== 0) {
            data.push(line);
        }
        currentLine++;
    })
    .on("close", () => solve());

function solve() {
    let ans = data[0];

    for (let i = 1; i < data.length; i++) {
        let j = 0;

        while (j < ans.length && j < data[i].length && data[i][j] === ans[j]) {
            j++;
        }

        if (ans.length !== j) {
            ans = data[i].substring(0, j);
        }
    }

    console.log(ans.length)
}