const readline = require("readline");
const fs = require("fs");
const path = require("path");

let currentLine = 0;
let s1 = null;
let s2 = null;

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (currentLine === 0) {
            s1 = line;
        } else {
            s2 = line;
        }
        currentLine++;
    })
    .on("close", () => solve());

function solve() {
    const trimS1 = [];
    const trimS2 = [];

    for (let i = 0; i < s1.length; i++) {
        if (s1.charCodeAt(i) % 2 === 0) {
            trimS1.push(s1[i]);
        }
    }

    for (let i = 0; i < s2.length; i++) {
        if (s2.charCodeAt(i) % 2 === 0) {
            trimS2.push(s2[i]);
        }
    }

    s1 = trimS1.join("");
    s2 = trimS2.join("");

    if (s1 === s2) {
        console.log(0);
    } else if (s1 > s2) {
        console.log(1);
    } else {
        console.log(-1);
    }
}
