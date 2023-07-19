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

function bracket(n, prefix = "", left = 0, right = 0, res = []) {
    if (left === n && right === n) {
        res.push(prefix);
    } else {
        if (left < n) {
            bracket(n, prefix + "(", left + 1, right, res);
        }
        if (right < left) {
            bracket(n, prefix + ")", left, right + 1, res);
        }
    }

    return res;
}

function solve() {
    const count = readInt();
    const result = bracket(count);

    result.forEach((item, i) => {
        process.stdout.write(`${item}`);
        if (i !== result.length - 1) {
            process.stdout.write("\n");
        }
    })
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

console.log(bracket(3))