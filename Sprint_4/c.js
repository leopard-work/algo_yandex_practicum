function polyHash(a, m, s) {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let tmp = result + s[i].charCodeAt();

        if (i !== s.length - 1) {
            result = tmp * a % m;
        } else {
            result = tmp % m;
        }
    }

    return result;
}

function modFix(n,m) {
    return n - (Math.floor(n / m) * m);
}

// function powFix(a, pow, m) {
//     let res = 1;
//
//     while (pow) {
//         pow--;
//         res = modFix(res * a, m);
//     }
//
//     return res;
// }

function powFix(a, pow, m) {
    if(pow === 1) return a;
    if(pow % 2 === 0) return powFix(a, pow / 2, m) ** 2 % m;
    return powFix(a, pow - 1, m) * a % m;
}

function prefixHash(a, m, s, arr) {
    const bank = [polyHash(a, m, s[0])];
    const result = [];

    for (let i = 1; i < s.length; i++) {
        bank[i] = ((bank[i - 1] * a % m) + s[i].charCodeAt()) % m;
    }

    for (value of arr) {
        const x = powFix(a,value[1] - value[0] + 1,m);
        const y = modFix(((bank[value[0] - 2] | 0) * x), m);
        const z = modFix(bank[value[1] - 1] - y, m);

        result.push(z);
    }

    return result;
}

// console.log(prefixHash(100,57,"abc", [[2,2]]))
// console.log(prefixHash(1000,1000009,"abcdefgh", [[1,1],[1,5],[2,3],[3,4],[4,4],[1,8],[5,8]]))
// console.log(prefixHash(939,9538360,"cqvkvmzcab", [[2,4],[7,8],[2,7],[3,9]]))

function solve() {
    const a = readInt();
    const m = readInt();
    const s = readLine();
    const rows = readInt();
    const input = [];

    for (let i = 0; i < rows; i++) {
        const value = readArray();
        input.push(value);
    }

    const result = prefixHash(a, m, s, input);

    for (let i = 0; i < result.length; i++) {
        process.stdout.write(`${result[i]}`);
        if (i !== input.length - 1) {
            process.stdout.write("\n");
        }
    }
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readLine() {
    const n = _inputLines[_curLine];
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
