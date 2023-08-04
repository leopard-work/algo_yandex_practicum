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

function buyingHouses(money, cost) {
    let result = 0;

    cost.sort((a, b) => a - b);

    for (value of cost) {
        if (money - value < 0) {
            break;
        } else {
            money = money - value;
            result++;
        }
    }

    return result;
}

function solve() {
    const line1 = readArray();
    const money = line1[1];
    const cost = readArray();
    const result = buyingHouses(money, cost);

    process.stdout.write(`${result}`);
}

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ").map(num => Number(num));
    _curLine++;
    return arr;
}

// console.log(buyingHouses(300,[350, 999, 700]))