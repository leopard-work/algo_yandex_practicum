const WHITE = -1;
const GRAY = 0;
const BLACK = 1;

function timeToOut(n, m, graph) {
    const colors = new Array(n + 1).fill(WHITE);
    let start = [];
    let end = [];
    //const time = new Array(n + 1).fill(0).map(() => []);

    const stack = [startIndex];
    let ms = 0;

    while (stack.length) {
        let v = stack.pop();

        if (colors[v] === WHITE) {
            time[v].push(ms);
            ms++;
            colors[v] = GRAY;
            stack.push(v);

            graph[v].sort((a,b) => b - a)
            for (let i = 0; i < graph[v].length; i++) {
                if (colors[graph[v][i]] === WHITE) {
                    stack.push(graph[v][i]);
                }
            }
        } else {
            if (colors[v] === GRAY) {
                colors[v] = BLACK
                time[v].push(ms);
                ms++;
            }
        }
    }

    return time.join('\n').replace(/[,]+/g,' ');
}



// console.log(timeToOut(3, 2, [[1,2], [2,3]]))
// console.log(timeToOut(6, 8, [[2,6], [1,6], [3,1], [2,5], [4,3], [3,2], [1,2], [1,4]]))

function solve() {
    const input = readArray();
    const graph = new Array(input[0] + 1).fill(null).map(() => []);

    for (let i = 0; i < input[1]; i++) {
        let tmp = readArray();
        graph[tmp[0]].push(tmp[1]);
    }

    process.stdout.write(`${timeToOut(input[0], input[1], graph)}`);
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

// let test = [[1,2],[3,4]];
// test.shift();
//
// console.log(test.join('\n').replace(/[,]+/g,' '))