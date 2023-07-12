// https://contest.yandex.ru/contest/22450/run-report/88993972/
// console.log(sleightOfHand(3, [['1','2','3','1'],['2','.','.','2'],['2','.','.','2'],['2','.','.','2']]))

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

function sleightOfHand(keys, arr) {
    const numbers = Array(9).fill(0);

    keys += keys;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] !== '.') {
                numbers[Number(arr[i][j]) - 1]++;
            }
        }
    }

    return numbers.filter(el => el <= keys && el !== 0).length;
}

function solve() {
    const keys = readInt();
    const matrix = readMatrix(4);

    process.stdout.write(`${sleightOfHand(keys, matrix)}`);
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split("");
    _curLine++;
    return arr;
}

function readMatrix(rowsCount) {
    var arr = [];
    for (let i = 0; i !== rowsCount; i++) {
        arr.push(readArray())
    }
    return arr;
}