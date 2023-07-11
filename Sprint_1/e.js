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

function getLongestWord(length, line) {
    const arr = line.trim().split(' ');
    let maxLetters = 0;
    let resultIndex = 0;

    arr.forEach((el, i) => {
        if (el.length > maxLetters) {
            maxLetters = el.length;
            resultIndex = i;
        }
    })
    return arr[resultIndex];
}

function solve() {
    const length = readInt();
    const line = readLine();
    const longestWord = getLongestWord(length, line)
    process.stdout.write(`${longestWord}`);
    process.stdout.write("\n");
    process.stdout.write(`${longestWord.length}`);
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readLine() {
    const line = _inputLines[_curLine];
    _curLine++;
    return line;
}

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ").map(num => Number(num));
    _curLine++;
    return arr;
}

console.log(getLongestWord(1, 'f'))