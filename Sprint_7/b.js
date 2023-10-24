const readline = require("readline");
const fs = require("fs");
const path = require("path");

let currentLine = 0;
let n = 0;
let data = [];

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (currentLine === 0) {
            n = parseInt(line);
        } else {
            data.push(line.split(' ').map((i) => Number(i)))
        }
        currentLine++;
    })
    .on("close", () => schedule());

function schedule() {
    data.sort((a,b) => a[1] - b[1] || a[0] - b[0]);

    const ans = [];
    let last = 0;

    for (let i = 0; i < data.length; i++) {
        if (i === 0 || data[i][0] >= last) {
            last = data[i][1];
            ans.push(data[i].join(' '));
        }
    }

    console.log(ans.length)
    console.log(ans.join('\n'))
}
