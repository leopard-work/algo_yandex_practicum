function adjacencyList(n, m, list) {
    const ans = new Array(n).fill(null).map(() => new Array(n).fill(0));

    for (let i = 0; i < list.length; i++) {
        ans[list[i][0] - 1][list[i][1] - 1] = 1;
    }

    let output = "";

    for (let i = 0; i < ans.length; i++) {
        output += ans[i].join(' ');
        if (i !== ans.length - 1) {
            output += "\n";
        }
    }

    return output;
}

// console.log(adjacencyList(5,3,[[1,3], [2,3], [5,2]]))

function solve() {
    const first = readArray();
    let list = [];

    for (let i = 0; i < first[1]; i++) {
        list.push(readArray());
    }

    process.stdout.write(`${adjacencyList(first[0],first[1],list)}`);
}

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ").map(num => Number(num));
    _curLine++;
    return arr;
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