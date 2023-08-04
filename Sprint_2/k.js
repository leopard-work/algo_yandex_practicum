// console.log(fiboRec(3));

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

function fiboRec(number) {
    if (number === 0) return 1;
    if (number < 2) return number;
    return fiboRec(number - 1) + fiboRec(number - 2)
}

function solve() {
    const input = readInt();
    const result = fiboRec(number);

    process.stdout.write(`${result}`);

}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ");
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