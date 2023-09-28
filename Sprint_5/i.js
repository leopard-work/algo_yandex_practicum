function factorial(n) {
    if (n === 1) {
        return 1;
    } else {
        return  n * factorial(n - 1);
    }
}

function searchTrees(n) {
    return Math.round(factorial(2 * n) / (factorial(n) * factorial(n + 1)))
}

// console.log(searchTrees(14))

function solve() {
    const n = readInt();

    const result = searchTrees(n);

    process.stdout.write(`${result}`);
}

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

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}