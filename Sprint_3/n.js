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

function flowerbeds(arr) {
    const res = [];

    arr.sort((a,b) => a[0] - b[0]);
    let tmp = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (tmp[1] >= arr[i][0]) {
            if (tmp[1] < arr[i][1]) {
                tmp[1] = arr[i][1];
            }
        } else {
            res.push(tmp);
            tmp = arr[i];
        }
    }

    res.push(tmp);

    return res;
}

function solve() {
    const rows = readInt();
    const arr = [];
    const price = readInt();

    const result1 = twoBikes(arr, price);
    const result2 = twoBikes(arr, price + price);

    process.stdout.write(`${result1} ${result2}`);
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

// console.log(flowerbeds([[7,8],[7,8],[2,3],[6,10]]))
// console.log(flowerbeds([[1,3],[3,5],[4,6],[5,6],[2,4],[7,10]]))