const readline = require("readline");
const fs = require("fs");
const path = require("path");

let currentLine = 0;
let input = null
let s = null;
let t = null;

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (currentLine === 0) {
            input = line;
        }
        if (currentLine === 1) {
            s = line;
        }
        if (currentLine === 2) {
            t = line;
        }
        currentLine++;
    })
    .on("close", () => solve());

function solve() {
    const p = new Array(input.length);
    p[0] = 0;
    let searchText = s + "#" + input;
    let pos = [];
    let kPrev = 0;

    for (let i = 1; i < searchText.length; i++) {
        let k = kPrev;

        while (k > 0 && searchText.charAt(k) !== searchText.charAt(i)) {
            k = p[k - 1];
        }

        if (searchText.charAt(k) === searchText.charAt(i)) {
            k++;
        }

        kPrev = k;

        if (i < p.length) {
            p[i] = k;
        }

        if (k === s.length) {
            pos.push(i - 2 * s.length)
        }
    }

    const ans = [];
    let start = 0;

    for (let i = 0; i < pos.length; i++) {
        ans.push(input.substring(start, pos[i]));
        ans.push(t);
        start = s.length + pos[i];
    }

    if (start < input.length) {
        ans.push(input.substring(start, input.length));
    }

    console.log(ans.join(""));
}