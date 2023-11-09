const readline = require("readline");
const fs = require("fs");
const path = require("path");

let currentLine = 0;
let s = "";

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (currentLine === 0) {
            s = line;
        }
        currentLine++;
    })
    .on("close", () => solve());

function solve() {
    let repeat = s[0];
    let i = 1;

    while (i + repeat.length <= s.length) {
        if (repeat === s.substring(i, i + repeat.length)) {
            i += repeat.length;
        } else {
            repeat = s.substring(0, i + 1);
            i++;
        }
    }

    if (repeat.length > s.length / 2) {
        repeat = s;
    }

    console.log(s.length / repeat.length)
}