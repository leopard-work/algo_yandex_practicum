const readline = require("readline");
const fs = require("fs");
const path = require("path");

let currentLine = 0;
let s = "";

function TrieNode(value = null, last = 0) {
    this.value = value;
    this.last = last;
    this.children = new Map();
}

const trie = new TrieNode();

function addString(s) {
    let cur = trie;

    for (let i = 0; i < s.length; i++) {
        if (!cur.children.has(s[i])) {
            cur.children.set(s[i], new TrieNode(s[i]))
        }

        cur = cur.children.get(s[i]);
    }

    cur.last = 1;
}

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (currentLine === 0) {
            s = line;
        }
        if (currentLine > 1) {
            addString(line);
        }
        currentLine++;
    })
    .on("close", () => solve());

function solve() {
    const dp = new Array(s.length + 1).fill(0);
    dp[0] = 1;

    for (let i = 0; i < s.length; i++) {
        if (dp[i]) {
            let cur = trie;
            let skip = 0;

            while (i + skip < s.length) {
                const l = s[i + skip];

                if (!cur.children.has(l)) {
                    break;
                } else {
                    cur = cur.children.get(l);
                    skip++;

                    if (cur.last) {
                        dp[i + skip] = 1;
                    }
                }
            }
        }
    }

    console.log(dp[dp.length - 1] ? "YES" : "NO");
}