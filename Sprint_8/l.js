const readline = require("readline");
const fs = require("fs");
const path = require("path");

let currentLine = 0;
let s = null;

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
    const p = new Array(s.length);
    p[0] = 0;

    for (let i = 1; i < s.length; i++) {
        let k = p[i - 1];

        while (k > 0 && s.charAt(k) !== s.charAt(i)) {
            k = p[k - 1];
        }

        if (s.charAt(k) === s.charAt(i)) {
            k++;
        }

        p[i] = k;
    }

    console.log(p.join(" "))
}