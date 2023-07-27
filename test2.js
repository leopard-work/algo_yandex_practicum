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
    arr.sort((a,b) => a-b);
    let lo = 0;
    let hi = arr[arr.length - 1] - arr[0];

    while (lo < hi) {
        let mi = lo + Math.floor((hi-lo) / 2);
        // Sliding window
        let count = 0, left = 0;
        for (let right = 1; right < arr.length; ++right) {
            // Keep moving left pointer until we reach a difference between two pointers that is less than mi
            while (arr[right] - arr[left] > mi) left++;
            // Add the amount of pairs in the window to the count
            count += right - left;
        }
        //count = number of pairs with distance <= mi
        if (count >= search) hi = mi;
        else lo = mi + 1;
    }
    return lo;
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

console.log(trash([27,91,8,68,35,71,32,49,6], 22))