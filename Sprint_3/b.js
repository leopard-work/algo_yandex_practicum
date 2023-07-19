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

function combinations(nums) {
    const letters = [];

    nums = nums.toString();

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === '2') letters.push(['a','b','c']);
        if (nums[i] === '3') letters.push(['d','e','f']);
        if (nums[i] === '4') letters.push(['g','h','i']);
        if (nums[i] === '5') letters.push(['j','k','l']);
        if (nums[i] === '6') letters.push(['m','n','o']);
        if (nums[i] === '7') letters.push(['p','q','r','s']);
        if (nums[i] === '8') letters.push(['t','u','v']);
        if (nums[i] === '9') letters.push(['w','x','y','z']);
    }

    return combinationsSearch(letters);
}

function combinationsSearch(letters, prefix = "", index = 0, res = []) {
    if (index >= letters.length) {
        res.push(prefix);
    } else {
        for (let i = 0; i < letters[index].length; i++) {
            combinationsSearch(letters, prefix + letters[index][i], index + 1, res)
        }
    }

    return res;
}

function solve() {
    const nums = readInt();
    const result = combinations(nums);

    process.stdout.write(`${result.join(' ')}`);
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

//console.log(combinations(92))