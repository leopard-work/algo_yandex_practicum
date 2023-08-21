function competition(arr) {
    const map = new Map;
    let count = 0;
    let result = 0;

    map.set(0,[0]);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            count++;
        } else {
            count--;
        }

        if (map.has(count)) {
            map.get(count).push(i + 1);
        } else {
            map.set(count, [i + 1])
        }
    }

    for (let value of map.values()) {
        let maxValue = value[value.length - 1] - value[0];
        result = Math.max(result, maxValue);
    }

    return result;
}

//console.log(competition([0,1,0]))
// console.log(competition([0,0,1,0,1,1,1,0,0,0]));

function solve() {
    const rows = readInt();
    const arr = readArray();
    const result = competition(arr);

    process.stdout.write(`${result}`);
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

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ").map(num => Number(num));
    _curLine++;
    return arr;
}