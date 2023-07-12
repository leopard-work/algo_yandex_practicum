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

function sumOfBinaries(firstNumber, secondNumber) {
    firstNumber = firstNumber.toString().split('').reverse();
    secondNumber = secondNumber.toString().split('').reverse();

    let i = j = rem = 0;
    let res = [];

    while (i < firstNumber.length || j < secondNumber.length) {
        let sum = rem;

        if (i < firstNumber.length) {
            sum += +firstNumber[i];
            i++;
        }

        if (j < secondNumber.length) {
            sum += +secondNumber[j];
            j++;
        }

        if (sum >= 2) {
            if (sum === 2) {
                sum = 0;
                rem = 1;
            }
            if (sum === 3) {
                sum = 1;
                rem = 1;
            }
        } else rem = 0;

        res.push(sum);
    }

    if (rem) res.push(rem);

    return res.reverse().join('');
}

function solve() {
    const firstNumber = readLine();
    const secondNumber = readLine();
    process.stdout.write(`${sumOfBinaries(firstNumber, secondNumber)}`);
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

console.log(sumOfBinaries(1010,1011))