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

function getExcessiveLetter(firstLine, secondLine) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < firstLine.length; i++) {
        sum1 += firstLine.charCodeAt(i);
        sum2 += secondLine.charCodeAt(i);
    }
    sum2 += secondLine.charCodeAt(firstLine.length);
    return String.fromCharCode(sum2 - sum1);
}

function solve() {
    const firstLine = readLine();
    const secondLine = readLine();
    process.stdout.write(`${getExcessiveLetter(firstLine, secondLine)}`);
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

function readLine() {
    const line = _inputLines[_curLine];
    _curLine++;
    return line;
}

console.log(getExcessiveLetter('xtkpx','xkctpx'))