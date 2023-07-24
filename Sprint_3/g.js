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

function wardrobe(arr) {
    const res = [];
    const tmp = new Array(3).fill(0);

    for (const value of arr) {
        tmp[value]++;
    }

    let i = 0;

    while (i < tmp.length) {
        if (tmp[i] !== 0) {
            res.push(i);
            tmp[i]--;
        } else {
            i++;
        }
    }

    return res
}

function solve() {
    const rows = readInt();
    if (rows) {
        const arr = readArray();
        const result = wardrobe(arr);

        process.stdout.write(`${result.join(' ')}`);
    }
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

// console.log(wardrobe([0]))