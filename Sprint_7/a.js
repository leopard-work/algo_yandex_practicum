const readline = require("readline");
const fs = require("fs");
const path = require("path");

let currentLine = 0;
let n = 0;
let shop = null;

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (currentLine === 0) {
            n = parseInt(line);
        } else {
            shop = line.split(' ').map((i) => parseInt(i));
        }
        currentLine++;
    })
    .on("close", () => exchange());

function exchange() {
    let ans = 0;
    let l = null;
    let r = null;

    if (!n) {
        shop = [];
    }

    for (let i = 0; i < shop.length; i++) {
        if (l === null) {
            l = shop[i];
        } else {
            if (l < shop[i]) {
                if (shop[i] > r || r === null) {
                    r = shop[i];
                } else {
                    ans += r - l;
                    l = shop[i];
                    r = null;
                }
            } else {
                if (r) {
                    ans += r - l;
                    r = null
                }
                l = shop[i];
            }
        }
    }

    if (r && l) {
        ans += r - l;
    }

    console.log(ans);
}