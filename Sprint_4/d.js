function mugs(arr) {
    const map = new Map();
    const res = [];

    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i],1)
    }

    for (let key of map.keys()) {
        res.push(key);
    }

    return res;
}

// console.log(mugs(["вышивание крестиком", "рисование мелками на парте", "настольный керлинг", "настольный керлинг", "кухня африканского племени ужасмай", "тяжелая атлетика", "таракановедение", "таракановедение"]))

function solve() {
    const rows = readInt();
    const input = [];

    for (let i = 0; i < rows; i++) {
        const value = readLine();
        input.push(value);
    }

    const res = mugs(input);

    for (let i = 0; i < res.length; i++) {
        process.stdout.write(`${res[i]}`);
        if (i !== input.length - 1) {
            process.stdout.write("\n");
        }
    }
}

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

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readLine() {
    const n = _inputLines[_curLine];
    _curLine++;
    return n;
}