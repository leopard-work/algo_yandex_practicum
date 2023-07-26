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

function goldenMean(arr1, arr2) {
    let mid = Math.ceil((arr1.length + arr2.length) / 2);
    let left = 0;
    let right = 0;
    let i = 0;
    let j = 0;

    for (k = 0; k <= mid; k++) {
        let cur = null;

        if (i >= arr1.length) {
            cur = arr2[j];
            j++;
        } else if (j >= arr2.length) {
            cur = arr1[i];
            i++;
        } else {
            if (arr1[i] < arr2[j]) {
                cur = arr1[i];
                i++;
            } else {
                cur = arr2[j];
                j++;
            }
        }

        if (k === mid - 1) {
            left = cur;
        }

        if (k === mid) {
            right = cur;
        }
    }

    if ((arr1.length + arr2.length) % 2 === 1) {
        return left
    } else {
        return (left + right) / 2;
    }
}

function solve() {
    const rows1 = readInt();
    const rows2 = readInt();
    const arr1 = readArray();
    const arr2 = readArray();

    const result = goldenMean(arr1, arr2);
    process.stdout.write(`${result}`);
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

// console.log(goldenMean([1,2], [3,4]))