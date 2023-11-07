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
    let fail = 1;
    const maxL = Math.max(s1.length, s2.length);
    let i = 0;
    let j = 0;

    while (i < maxL && j < maxL) {
        if (s1[i] === s2[j]) {
            i++;
            j++;
        } else {
            if (s1.length === s2.length) {
                i++;
                j++;
            } else {
                if (s1.length > s2.length) {
                    i++;
                } else {
                    j++;
                }
            }

            fail--;
        }
    }

    console.log(fail >= 0 ? "OK" : "FAIL");
}
