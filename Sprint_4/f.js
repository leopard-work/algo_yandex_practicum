function anagram(arr) {
    const hash = new Map();

    for (let i = 0; i < arr.length; i++) {
        const word = arr[i].split('').sort().join('');

        if (hash.has(word)) {
            const tmp = hash.get(word);
            tmp.push(i);
            hash.set(word, tmp)
        } else {
            hash.set(word,[i])
        }
    }

    return hash;
}

//console.log(anagram(["tan", "eat", "tea", "ate", "nat", "bat"]))
// console.log(anagram(["aaa", "aaa", "bbb", "bbb", "aaa"]))
// console.log(anagram(["xkumi", "rjvew"]))


function solve() {
    const rows = readInt();
    const arr = readArrayLine();
    const result = anagram(arr);

    let i = 1;

    for (value of result.values()) {
        process.stdout.write(`${value.join(' ')}`);
        if (i !== result.size) {
            process.stdout.write("\n");
        }
        i++;
    }

    // for (let i = 0; i < result.length; i++) {
    //     process.stdout.write(`${result[i].join(' ')}`);
    //     if (i !== result.length - 1) {
    //         process.stdout.write("\n");
    //     }
    // }
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readArrayLine() {
    var arr = _inputLines[_curLine].trim(" ").split(" ");
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