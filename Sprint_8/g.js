const readline = require("readline");
const fs = require("fs");
const path = require("path");

let currentLine = 0;
let x = null;
let a = null;

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (currentLine === 1) {
            x = line.split(" ").map(Number);
        }
        if (currentLine === 3) {
            a = line.split(" ").map(Number);
        }
        currentLine++;
    })
    .on("close", () => solve());

function solve() {
    let ans = [];

    for (let i = 0; i < x.length - a.length + 1; i++) {
        let ok = 1;

        for (let j = 0; j < a.length; j++) {
            if (a[j] !== x[i + j]) {
                ok = 0;
                break;
            }
        }

        if (!ok) {
            ok = 1;
            const c = x[i] - a[0];

            for (let j = 1; j < a.length; j++) {
                if (x[i + j] !== a[j] + c) {
                    ok = 0;
                    break;
                }
            }
        }

        if (ok) {
            ans.push(i + 1);
        }
    }

    console.log(ans.join(" "))
}
