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

function compare(a,b) {
    let aStr = a.toString();
    let bStr = b.toString();

    return Number(aStr + bStr) > Number(bStr + aStr);
}

function bigNumber(arr) {
    for (let i = 1; i < arr.length; i++) {
        let tmp = arr[i];
        let j = i;

        while (j > 0 && compare(tmp, arr[j - 1])) {
            arr[j] = arr[j - 1];
            j--;
        }

        arr[j] = tmp;
    }

    return arr;
}

function solve() {
    const count = readInt();
    const arr = readArray()
    const result = bigNumber(arr);

    process.stdout.write(`${result.join('')}`);
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

console.log(bigNumber([9,10,1,1,1,6]))


