function dfs(list, startIndex, colors, ans) {
    const stack = [startIndex]
    while (stack.length) {
        const v = stack.pop();

        if (colors[v] === "white") {
            colors[v] = "gray";
            ans.push(v);
            stack.push(v);

            list[v].sort((a,b) => b - a)
            for (let i = 0; i < list[v].length; i++) {
                if (colors[list[v][i]] === "white") {
                    stack.push(list[v][i]);
                }
            }
        } else {
            colors[v] = "black";
        }
    }
}

function dfsFn(n, m, list, startIndex) {
    const colors = new Array(n + 1).fill("white");
    const graph = new Array(n + 1).fill(null).map(() => []);
    const ans = [];

    //list.sort((a, b) => a[0] - b[0] || a[1] - b[1])

    for (let i = 0; i < list.length; i++) {
        graph[list[i][0]].push(list[i][1]);
        graph[list[i][1]].push(list[i][0])
    }

    dfs(graph, startIndex, colors, ans);

    return ans.join(' ');
}

//console.log(dfsFn(4, 4, [[3,2], [4,3], [1,4], [1,2]], 3))
//console.log(dfsFn(2, 1, [[1,2]], 1))

//console.log(dfsFn(6, 7, [[3,2], [5,4], [3,1], [1,4], [1,6], [1,2], [1,5], ], 1))

function solve() {
    const input = readArray();
    let list = [];

    for (let i = 0; i < input[1]; i++) {
        list.push(readArray());
    }

    const startIndex = readInt();

    process.stdout.write(`${dfsFn(input[0], input[1], list, startIndex)}`);
}

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ").map(num => Number(num));
    _curLine++;
    return arr;
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
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