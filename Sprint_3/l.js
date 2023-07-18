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

function twoBikes(arr, price, left = 0, right = arr.length) {
    if (right <= left) {
        //console.log(['error',left, right, arr[left]])
        if (arr[left] > price) return left + 1;
        if (arr[left] <= price) return left + 1;

        return -1;
    }

    if (arr[right - 1] >= price && arr[right - 2] < price) {
        return right;
    }
    else {
        const mid = Math.floor((right + left) / 2);

        //console.log([left, right, mid])

        if (arr[mid] >= price) {
            return twoBikes(arr, price, left, mid);
        } else {
            return twoBikes(arr, price, mid + 1, right);
        }
    }
}

function solve() {
    const rows = readInt();
    const arr = readArray()
    const price = readInt();

    const result1 = twoBikes(arr, price);
    const result2 = twoBikes(arr, price + price);

    process.stdout.write(`${result1} ${result2}`);
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

//console.log(twoBikes([1,2,4,4,6,8],9))
//console.log(twoBikes([12,19,29,31,33],28))
//console.log(twoBikes([1,1,1,3],3))
//console.log(twoBikes([5],5))