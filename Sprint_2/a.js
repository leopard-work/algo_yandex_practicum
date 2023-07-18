console.log(monitoring([[1,2,3],[0,2,6],[7,4,1],[2,7,0]]))

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

function monitoring(arr) {
    const res = [];
    if (arr[0]) for (let i = 0; i < arr[0].length; i++) res[i] = [];

    for (let i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            res[j][i] = arr[i][j];
        }
    }

    return res;
}

function solve() {
    const rows = readInt();
    const cols = readInt();
    const matrix = readMatrix(rows);
    const result = monitoring(matrix);

    result.forEach((item, i) => {
        process.stdout.write(`${item.join(' ')}`);
        if (i !== result.length - 1) process.stdout.write("\n");
    })

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