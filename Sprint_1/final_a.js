// https://contest.yandex.ru/contest/22450/run-report/88991355/
// console.log(nearestZero([0,7,9,4,8,20]))

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

function nearestZero(arr) {
    const MAX = Math.pow(10,9);
    let zeros = [MAX];
    let zeroIndex = 1;
    const res = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) zeros.push(i);
    }
    zeros.push(MAX);

    for (let i = 0; i < arr.length; i++) {
        let pos = Math.min(Math.abs(zeros[zeroIndex] - i), Math.abs(zeros[zeroIndex + 1] - i), Math.abs(zeros[zeroIndex - 1] - i));
        res.push(pos);
        if (arr[i] === 0 && zeroIndex < zeros.length - 2) {
            zeroIndex++;
        }
    }

    return res.join(' ');
}

function solve() {
    const length = readInt();
    const listNumber = readArray()

    process.stdout.write(`${nearestZero(listNumber)}`);
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