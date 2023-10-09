const readline = require("readline");
const fs = require("fs");
const path = require("path");

let currentLine = 0;
let n = 0;
let m = 0;
//let graph = null;
const repeat = new Set();
let count = null;

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        let [a, b] = line.split(/\s/).map(s => parseInt(s, 10));

        if (currentLine > 0 && currentLine <= m) {
            if (a !== b) {
                if (a > b) {
                    [a,b] = [b,a];
                }
                if (!repeat.has(`${a}-${b}`)) {
                    //graph[a].push(b);
                    //graph[b].push(a);
                    repeat.add(`${a}-${b}`);
                    count[a]++;
                    count[b]++;
                }
            }
        } else {
            n = a;
            m = b;
            //graph = new Array(n + 1).fill(null).map(() => [])
            count = new Array(n + 1).fill(0);
        }
        currentLine++;
    })
    .on("close", () => complete());

function complete() {
    let ans = "YES";

    if (count[1] === 0 && n !== 1) {
        ans = "NO";
    }

    for (let i = 2; i < count.length; i++) {
        if (count[i] !== count[1]) {
            ans = "NO";
            break;
        }
    }

    console.log(ans);
}