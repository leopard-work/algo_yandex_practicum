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

function getSum(listNumber, number) {
    const numberArr = number.toString().split('').map(Number).reverse();
    let rem = 0;
    let i = j = 0;
    const res = [];

    listNumber.reverse();

    while (i < listNumber.length || j < numberArr.length) {
        let sum = rem;

        if (i < listNumber.length) {
            sum += listNumber[i];
            i++;
        }

        if (j < numberArr.length) {
            sum += numberArr[j];
            j++;
        }

        if (sum >= 10) {
            sum -= 10;
            rem = 1;
        } else rem = 0;

        res.push(sum);
    }

    if (rem) res.push(1);

    return res.reverse();
}

function solve() {
    const length = readInt();
    const listNumber = readArray()
    const number = readInt();

    process.stdout.write(`${getSum(listNumber, number).join(' ')}`);
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

console.log(getSum([9,9,9,1], 9));