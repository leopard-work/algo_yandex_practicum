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

function cookies(childs, sizes) {
    childs.sort((a,b) => a - b);
    sizes.sort((a,b) => a - b);

    let i = 0;
    let j = 0;

    while (i < childs.length && j < sizes.length) {
        if (childs[i] <= sizes[j]) {
            i++;
            j++;
        } else {
            j++;
        }
    }

    return i;
}

function solve() {
    const childsSize = readInt();
    const childs = readArray();
    const sizesSize = readInt();
    const sizes = readArray();

    const result = cookies(childs,sizes);

    process.stdout.write(`${result}`);
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

//console.log(cookies([], [1]))