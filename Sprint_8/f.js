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
    const obj = {};
    let maxRepeat = 0;
    let ans = null;

    for (let i = 0; i < data.length; i++) {
        if (obj[data[i]]) {
            obj[data[i]]++;
        } else {
            obj[data[i]] = 1;
        }

        maxRepeat = Math.max(maxRepeat, obj[data[i]])
    }

    for (value of Object.entries(obj)) {
        if (value[1] === maxRepeat) {
            if (!ans) {
                ans = value[0];
            } else {
                if (ans > value[0]) {
                    ans = value[0];
                }
            }
        }
    }

    console.log(ans);
}