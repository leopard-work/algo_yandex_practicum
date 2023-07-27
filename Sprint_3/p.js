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

function partialSort(arr) {
    let res = 0;
    let first = 0;
    let tmp = [];

    for (let i = 0; i < arr.length; i++) {
        tmp.push(arr[i]);
        tmp.sort((a, b) => a - b);

        if (tmp[first] === first && tmp[tmp.length - 1] === i) {
            res++;
            first = i + 1;
        }
    }

    return res;
}

function solve() {
    const rows = readInt();
    const arr = readArray();
    const result = partialSort(arr);

    process.stdout.write(`${result}`);
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