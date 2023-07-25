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

function perimeter(arr) {
    let res = 0;

    arr.sort((a, b) => b - a);

    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 2; j < arr.length; j++) {
            if (arr[i] >= arr[i + 1] + arr[j]) break;
            res = Math.max(res, arr[i] + arr[i + 1] + arr[j]);
        }
    }

    return res;
}

function solve() {
    const rows = readInt();
    const arr = readArray()
    const result = perimeter(arr);

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

// console.log(perimeter([5,3,7,2,8,3]))