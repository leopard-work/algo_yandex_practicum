function strangeComparison(str1, str2) {
    if (str1.length !== str2.length) return false;

    const map1 = new Map();
    const map2 = new Map();
    let result = true;

    for (let i = 0; i < str1.length; i++) {
        if (map1.has(str1[i])) {
            map1.set(str1[i], map1.get(str1[i]) + 1);
        } else {
            map1.set(str1[i], 1);
        }

        if (map2.has(str2[i])) {
            map2.set(str2[i], map2.get(str2[i]) + 1);
        } else {
            map2.set(str2[i], 1);
        }
    }

    map2Arr = Array.from(map2.values());
    Array.from(map1.values()).forEach((item, i) => {
        if (map2Arr[i] !== item) {
            result = false;
        }
    })

    return result;
}

// console.log(strangeComparison('mxyskaoghi', 'qodfrgmslc'))
// console.log(strangeComparison('agg', 'xdd'))
// console.log(strangeComparison('agg', 'xda'))

function solve() {
    const str1 = readLine();
    const str2 = readLine();
    const result = strangeComparison(str1, str2);

    if (result) {
        process.stdout.write(`YES`);
    } else {
        process.stdout.write(`NO`);
    }
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

function readLine() {
    const n = _inputLines[_curLine];
    _curLine++;
    return n;
}