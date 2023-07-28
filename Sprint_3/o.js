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
    // let tmp = 0;
    // let m = 0;
    // let sortArr = Array(1000000);
    // arr.forEach((el,i) => {
    //     if (sortArr[el]) sortArr[el]++;
    //     else sortArr[el] = 1;
    //     m = Math.max(m,el);
    // })
    // let k = 0;
    // while (tmp <= m) {
    //     if (sortArr[tmp] != null) {
    //         arr[k] = tmp;
    //         sortArr[tmp]--;
    //         if (sortArr[tmp]) tmp--;
    //         k++;
    //     }
    //     tmp++;
    // }

    // console.log(arr);

    let minValue = 0;
    let maxValue = arr[arr.length - 1] - arr[0];

    while (minValue !== maxValue) {
        // let midValue = minValue + Math.floor((maxValue - minValue) / 2);
        let midValue = Math.floor((maxValue + minValue) / 2);
        let count = 0;

        for (let right = 1; right < arr.length; right++) {
            let left = 0;

            while (arr[right] - arr[left] > midValue) {
                left++;
            }

            count += right - left;
        }

        if (count >= search) {
            maxValue = midValue;
        } else {
            minValue = midValue + 1;
        }
    }

    return minValue;
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