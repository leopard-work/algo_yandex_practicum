const readline = require("readline");
const fs = require("fs");
const path = require("path");

let currentLine = 0;
let s = null;
let n = null;
let data = [];

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (currentLine === 0) {
            s = line;
        } else {
            if (currentLine === 1) {
                n = Number(line);
            } else {
                data.push(line.split(" "))
                data[data.length - 1][1] = Number(data[data.length - 1][1])
            }
        }
        currentLine++;
    })
    .on("close", () => solve());

function solve() {
    data.sort((a,b) => a[1] - b[1]);
    let ans = [];
    let tmp = 0;

    for (let i = 0; i < data.length; i++) {
        ans.push(s.substring(tmp, data[i][1]));
        ans.push(data[i][0]);
        tmp = data[i][1];
    }

    if (tmp < s.length) {
        ans.push(s.substring(tmp, s.length))
    }

    console.log(ans.join(''));
}
