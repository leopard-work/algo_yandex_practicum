console.log(fiboMod(3, 1));

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

function fiboMod(n, k) {
    if (n < 2) return 1;

    let first = 1;
    let second = 2;

    for(let i = 3; i <= n; i++) {
        let tmp = first + second;
        first = second;
        second = tmp % (Math.pow(10,k));
    }

    return second;
}

function solve() {
    const input = readArray();
    const result = fiboMod(Number(input[0]), Number(input[1]));

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