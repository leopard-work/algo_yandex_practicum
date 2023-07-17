//console.log(calcPoland(['7','2','+','4','*','2','+']))
//console.log(calcPoland(['2','1','+','3','*']))
//console.log(calcPoland(['3','4','+']))
//console.log(calcPoland(['10','2','4','*','-']))
//console.log(calcPoland(['10','8','-']))
//console.log(calcPoland(['12','5','/']))
//console.log(calcPoland(['1','2','2','2','+','-','+']))

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

function calcPoland(arr) {
    const numbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(Number(arr[i]))) numbers.push(Number(arr[i]));
        else {
            let tmp = 0;
            if (arr[i] === '+') tmp = numbers[numbers.length - 1] + numbers[numbers.length - 2];
            if (arr[i] === '-') tmp = numbers[numbers.length - 2] - numbers[numbers.length - 1];
            if (arr[i] === '*') tmp = numbers[numbers.length - 1] * numbers[numbers.length - 2];
            if (arr[i] === '/') tmp = Math.floor(numbers[numbers.length - 2] / numbers[numbers.length - 1]);
            numbers.pop();
            numbers.pop();
            numbers.push(tmp);
        }
    }

    return numbers[numbers.length - 1];
}

function solve() {
    const arr = readArray();
    const result = calcPoland(arr);

    process.stdout.write(`${result}`);
}

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ");
    _curLine++;
    return arr;
}