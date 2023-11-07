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
        s = line;
        currentLine++;
    })
    .on("close", () => solve());

function solve() {
    console.log(s.split(" ").reverse().join(" "));
}
