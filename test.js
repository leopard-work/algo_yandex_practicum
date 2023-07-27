// function trash(arr, search) {
//     arr.sort((a, b) => a - b);
//     const res = [];
//
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             res.push(arr[j] - arr[i]);
//         }
//     }
//
//     return res.sort((a, b) => a - b)[search - 1];
// }
//
//
// console.log(trash([60,88,82,78,86,38,5,76,38,90], 36))



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

function trash(arr, search) {
    arr.sort((a,b) => a - b)

    let end = arr.length - 2;
    let step = 1;
    let res = [];

    while (end >= 0) {
        for (let i = 0; i <= end; i++) {
            res.push(Math.abs(arr[i + step] - arr[i]))
            //j++;
        }
        end--;
        step++;
    }

    console.log(res);

    // j = 0;
    // for (step = 1; step <= res.length; step++) {
    //     if (res[step]) j += res[step];
    //     if (j >= search) {
    //         console.log(res)
    //         return step;
    //     }
    // }
    // return res;

    // let res = Array(500000);
    //
    // for (let i = 0; i < arr.length - 1; i++) {
    //     for (let j = i + 1; j < arr.length; j++) {
    //         if (res[Math.abs(arr[j] - arr[i])]) res[Math.abs(arr[j] - arr[i])]++;
    //         else res[Math.abs(arr[j] - arr[i])] = 1;
    //     }
    // }
    //
    // let k = 0;
    //
    // //console.log(res)
    //
    // for (let j = 0; j < res.length; j++) {
    //     if (res[j]) k+=res[j];
    //     if (k >= search) return j;
    // }
}

function solve() {
    const rows = readInt();
    const arr = readArray();
    const search = readInt();
    const result = trash(arr, search);

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

console.log(trash([1, 3, 5, 7, 9], 4))




