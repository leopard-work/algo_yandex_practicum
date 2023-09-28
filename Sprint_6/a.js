function adjacencyList(n, m, list) {
    const ans = new Array(n + 1).fill(null).map(() => [0]);

    list.sort((a, b) => a[0] - b[0] || a[1] - b[1])

    for (let i = 0; i < list.length; i++) {
        ans[list[i][0]][0]++;
        ans[list[i][0]].push(list[i][1])
    }

    let output = "";

    for (let i = 1; i < ans.length; i++) {
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

    const ans = adjacencyList(first[0],first[1],list);

    process.stdout.write(`${ans}`);
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