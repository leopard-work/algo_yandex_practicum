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
    let i = 0;

    listNumber.reverse();

    while (rem !== 1 && i < numberArr.length) {
        let sum = numberArr[i] + listNumber[i] + rem;
        console.log(sum)
        rem = 0;
        if (sum >= 10) {
            sum -= 10;
            rem = 1;
        }
        listNumber[i] = sum;
        i++;
    }

    console.log(rem)

    return listNumber
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

console.log(getSum([1,2,6,0], 40));