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

function getBinaryNumber(number) {
    let res = [];
    while (number > 0) {
        res.push((number % 2).toString());
        number = Math.floor(number / 2);
    }
    return Number(res.reverse().join(''));
}

function solve() {
    const n = readInt();
    process.stdout.write(`${getBinaryNumber(n)}`);
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readLine() {
    const line = _inputLines[_curLine];
    _curLine++;
    return line;
}


function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ").map(num => Number(num));
    _curLine++;
    return arr;
}

console.log(getBinaryNumber(14));