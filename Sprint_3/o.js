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

function searchAmount(arr, minValue, maxValue, search) {
    if (minValue === maxValue) {
        return minValue;
    }

    let midValue = minValue + Math.floor((maxValue - minValue) / 2);
    let count = 0;
    let left = 0;

    for (let right = 1; right < arr.length; right++) {
        while (arr[right] - arr[left] > midValue) {
            left++;
        }
        count += right - left;
    }

    if (count >= search) {
        minValue = searchAmount(arr, minValue, midValue, search);
    } else {
        minValue = searchAmount(arr, midValue + 1, maxValue, search);
    }

    return minValue;
}

function trash(arr, search) {
    arr.sort((a,b) => a-b);

    let minValue = 0;
    let maxValue = arr[arr.length - 1] - arr[0];

    // while (minValue !== maxValue) {
    //     let midValue = minValue + Math.floor((maxValue - minValue) / 2);
    //     //let midValue = Math.floor((maxValue + minValue) / 2);
    //     let count = 0;
    //
    //     for (let right = 1; right < arr.length; right++) {
    //         let left = 0;
    //
    //         while (arr[right] - arr[left] > midValue) {
    //             left++;
    //         }
    //
    //         count += right - left;
    //     }
    //
    //     if (count >= search) {
    //         maxValue = midValue;
    //     } else {
    //         minValue = midValue + 1;
    //     }
    // }

    return searchAmount(arr, minValue, maxValue, search);
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

console.log(trash([1,2,3,4,5], 5))