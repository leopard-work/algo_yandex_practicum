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

function movingAverage(array, windowSize) {
    const result = [];
    let tmp = array[0];

    for (let i = 1; i < windowSize; i++) {
        tmp += array[i];
    }
    result.push(tmp / windowSize);

    for (let i = 0; i < array.length - windowSize; i++) {
        tmp -= array[i];
        tmp += array[i + windowSize];
        result.push(tmp / windowSize)
    }

    return result;
}

function solve() {
    const n = readInt();
    const arr = readArray();
    const windowSize = readInt();
    process.stdout.write(`${movingAverage(arr, windowSize).join(' ')}`);
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

console.log(movingAverage([9,3,2,0,1,5,1,0,0],3))