const readline = require("readline");
const fs = require("fs");
const path = require("path");

let currentLine = 0;
let m = 0;
let n = 0;
let data = [];

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (currentLine === 0) {
            m = Number(line);
        } else {
            if (currentLine === 1) {
                n = Number(line);
            } else {
                data.push(line.split(' ').map((i) => Number(i)))
            }
        }
        currentLine++;
    })
    .on("close", () => goldenFever());

function goldenFever() {
    data.sort((a,b) => b[0] - a[0]);

    let i = 0;
    let ans = 0;

    while (m > 0 && i < data.length) {
        if (m < data[i][1]) {
            ans += m * data[i][0];
        } else {
            ans += data[i][0] * data[i][1];
        }

        m -= data[i][1];
        i++;
    }

    console.log(ans);
}
