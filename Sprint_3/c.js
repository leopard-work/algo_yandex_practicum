const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
    _inputLines.push(line);
});

process.stdin.on('end', solve);

function subsequence(s, t) {
    if (s.length > t.length) return false;

    let i = 0;
    let j = 0;

    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
            j++;
        } else {
            j++;
        }
    }

    return i === s.length;
}

function solve() {
    const s = readLine();
    const t = readLine();
    const result = subsequence(s,t);
    if (result) {
        process.stdout.write(`True`);
    } else {
        process.stdout.write(`False`);
    }
}

function readLine() {
    const n = _inputLines[_curLine];
    _curLine++;
    return n;
}

console.log(subsequence('a', 'b'))