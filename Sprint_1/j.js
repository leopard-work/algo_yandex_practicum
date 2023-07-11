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

function factorize(number) {
    const res = [];

    for (let i = 2; i <= Math.sqrt(number); i++) {
        while (number % i === 0) {
            res.push(i);
            number /= i;
        }
    }

    if (number !== 1) {
        res.push(number);
    }

    return res;
}

function solve() {
    const number = readInt();
    const factorization = factorize(number)
    process.stdout.write(`${factorization.join(' ')}`);
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

// console.log(factorize(917521579))

console.log(factorize(917521579))