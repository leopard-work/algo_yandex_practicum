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

function bubleSort(arr) {
    let result = [];
    let swap = 0;

    for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) {
                let tmp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = tmp;
                swap = 1;
            }
        }
        if (swap) result.push([...arr]);
        swap = 0;
    }

    if (!result.length) result.push(arr);

    return(result);
}

function solve() {
    const count = readInt();
    const arr = readArray()
    const result = bubleSort(arr);

    result.forEach((item, i) => {
        process.stdout.write(`${item.join(' ')}`);
        if (i !== result.length - 1) {
            process.stdout.write("\n");
        }
    })
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

console.log(bubleSort([1,2,3,4,5]))