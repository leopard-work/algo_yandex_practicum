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

class StackMax {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (!this.items.length) return 'error';
        else this.items.pop();
    }

    get_max() {
        if (!this.items.length) return 'None';
        return Math.max.apply(null, this.items);
    }
}

function solve() {
    const rows = readInt();
    const commandsArr = [];
    for (let i = 0; i < rows; i++) {
        commandsArr.push(_inputLines[_curLine].trim(" "))
        _curLine++;
    }
    const result = [];
    const stack = new StackMax();

    commandsArr.forEach(el => {
        let commands = el.split(' ');
        if (commands[0] === 'push') stack.push(Number(commands[1]));
        if (commands[0] === 'pop') {
            const tmp = stack.pop();
            if (tmp) result.push(tmp);
        }
        if (commands[0] === 'get_max') {
            const tmp = stack.get_max();
            result.push(tmp);
        }
    })

    result.forEach((item, i) => {
        process.stdout.write(`${item}`);
        if (i !== result.length - 1) process.stdout.write("\n");
    })

}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ");
    _curLine++;
    return arr;
}

function readMatrix(rowsCount) {
    var arr = [];
    for (let i = 0; i !== rowsCount; i++) {
        arr.push(readArray())
    }
    return arr;
}

// const arr = new StackMax();

// console.log(arr.get_max())
// console.log(arr.push(7))
// console.log(arr.pop())
// console.log(arr.push(-2))
// console.log(arr.push(-1))
// console.log(arr.pop())
// console.log(arr.get_max())
// console.log(arr.get_max())

// console.log(arr.get_max())
// console.log(arr.pop())
// console.log(arr.pop())
// console.log(arr.pop())
// console.log(arr.push(10))
// console.log(arr.get_max())
// console.log(arr.push(-9))