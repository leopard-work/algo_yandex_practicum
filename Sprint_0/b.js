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

function zip(a, b) {
    const res = [];
    for (let i = 0; i < a.length; i++) {
        res.push(a[i]);
        res.push(b[i]);
    }
    return res;
}

function solve() {
    const n = readInt();
    const a = readArray();
    const b = readArray();
    process.stdout.write(`${zip(a, b).join(' ')}`);
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ").map(num => Number(num));
    _curLine++;
    return arr;
}

console.log(zip([1,8,9], [2,3,1]))