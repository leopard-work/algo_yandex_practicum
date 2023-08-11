function genSubArr(arr1, arr2) {
    const map = {};
    let res = 0;

    for (let i = 0; i < arr1.length; i++) {
        if (map[arr1[i]]) {
            map[arr1[i]].push(i)
        } else {
            map[arr1[i]] = [i];
        }
    }

    for (let i = 0; i < arr2.length - 1; i++) {
        let count = 0;

        if (map[arr2[i]]) {
            let pos = map[arr2[i]];
            count = 1;

            for (j = i + 1; j < arr2.length; j++) {
                if (!map[arr2[j]]) break;

                const next = map[arr2[j]];
                pos = next.filter(item => pos.includes(item - 1))
                if (pos.length) {
                    count++;
                    i = j;
                }
            }
        }

        if (count) res = Math.max(count, res);
    }

    if (arr2.length === 1) {
        if (arr1.includes(arr2[0])) res = 1;
    }

    return res;
}


// console.log(genSubArr([1],[1]))
// console.log(genSubArr([1,2,3],[3,1,2]))
// console.log(genSubArr([11, 22, 33, 22, 111], [33, 22, 11, 55, 66]))
// console.log(genSubArr([1,1,1,1,1], [1,1,1,1,1]))
// console.log(genSubArr([1,1,1,1,1], [1,1,2,1,1]))
// console.log(genSubArr([1, 2, 3, 2, 1, 3], [3, 2, 1, 5, 6, 3]))
// console.log(genSubArr([3, 2, 1, 5, 6], [1,2,3,2,1]))
// console.log(genSubArr([1, 2, 3, 4, 5], [4, 5, 9]))
// console.log(genSubArr([238, 200, 244, 226, 59, 50, 165, 95, 245, 27, 73, 97, 77, 149, 21, 88, 46, 162, 72, 119, 152, 136, 134, 50, 240, 34, 57, 28, 170, 188], [251, 5, 68, 16, 226, 201, 33, 222, 122, 3, 58, 251, 250, 243, 133, 117, 74, 71, 30, 34, 179, 23, 253, 240, 30, 106, 14, 186, 50, 237]))
// console.log(genSubArr([156, 176, 45, 212, 116, 8, 165, 5, 15, 111, 147, 223, 30, 119, 175, 139, 131, 205, 199, 138, 178, 26, 80, 76, 180, 67, 125, 109, 83, 12], [105, 200, 10, 213, 83, 123, 168, 74, 226, 43, 44, 228, 185, 188, 49, 104, 78, 200, 162, 193, 20, 7, 64, 125, 197, 199, 197, 184, 201, 59]))

function solve() {
    const rows1 = readInt();
    const arr1 = readArray();
    const rows2 = readInt();
    const arr2 = readArray();
    const result = genSubArr(arr1, arr2);

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