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

function lovers(arr, count) {
    let tmp = Array(10001);
    const res = [];

    for (value of arr) {
        if (!tmp[value]) {
            tmp[value] = [1,value];
        } else {
            tmp[value][0]++;
        }
    }

    tmp = tmp.filter(value => value !== null).sort((a, b) => {
        if (a[0] < b[0]) return 1;
        if (a[0] > b[0]) return -1;
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
        return 0;
    });

    let i = 0;

    while (count > 0 && i < tmp.length) {
        res.push(tmp[i][1]);
        i++;
        count--;
    }

    return res;
}

function solve() {
    const rows = readInt();
    const arr = readArray();
    const count = readInt();
    const result = lovers(arr, count);

    process.stdout.write(`${result.join(' ')}`);
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

// console.log(lovers([1], 1))