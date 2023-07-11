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

function getWeatherRandomness(temperatures) {
    let left = right = res = 0;

    for (let i = 0; i < temperatures.length; i++) {
        left = temperatures[i - 1];
        right = temperatures[i + 1];
        if (left === undefined) left = -274;
        if (right === undefined) right = -274;
        if (temperatures[i] > left && temperatures[i] > right) res++;
    }

    return res
}

function solve() {
    const n = readInt();
    const temperatures = readArray();
    process.stdout.write(`${getWeatherRandomness(temperatures)}`);
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

//console.log(getWeatherRandomness([-1,-10,-8,0,2,0,5]))
//console.log(getWeatherRandomness([1,2,5,4,8]))
//console.log(getWeatherRandomness([0,0]))