// console.log(is_correct_bracket_seq('()[]'))

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

function is_correct_bracket_seq(str) {
    const stack = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '[' || str[i] === '{') stack.push(str[i]);
        if (str[i] === ')') {
            if (stack[stack.length - 1] !== '(') return false;
            else stack.pop();
        }
        if (str[i] === ']') {
            if (stack[stack.length - 1] !== '[') return false;
            else stack.pop();
        }
        if (str[i] === '}') {
            if (stack[stack.length - 1] !== '{') return false;
            else stack.pop();
        }
    }

    return !stack.length;
}

function solve() {
    const str = readString();
    if (is_correct_bracket_seq(str)) process.stdout.write(`True`);
    else process.stdout.write(`False`);
}

function readString() {
    const n = _inputLines[_curLine];
    _curLine++;
    return n;
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