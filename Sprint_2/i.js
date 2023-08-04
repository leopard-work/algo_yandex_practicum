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

class MyQueueSized {
    constructor(maxSize) {
        this.items = new Array(maxSize).fill(null);
        this.maxSize = maxSize
        this.queueSize = 0;
        this.tail = 0;
        this.head = 0;
    }

    push(number) {
        if (this.queueSize === this.maxSize) return 'error';
        this.items[this.tail] = number;
        this.queueSize++;
        this.tail = (this.tail + 1) % this.maxSize;
    }

    pop() {
        if (!this.queueSize) return 'None';
        const res = this.items[this.head];
        this.items[this.head] = null;
        this.queueSize--;
        this.head = (this.head + 1) % this.maxSize;
        return res;
    }

    peek() {
        if (!this.queueSize) return 'None';
        return this.items[this.head];
    }

    size() {
        return this.queueSize;
    }
}

function solve() {
    const rows = readInt();
    const maxSize = readInt();
    const commandsArr = [];
    for (let i = 0; i < rows; i++) {
        commandsArr.push(_inputLines[_curLine].trim(" "))
        _curLine++;
    }
    const result = [];
    const queue = new MyQueueSized(maxSize);

    commandsArr.forEach(el => {
        let commands = el.split(' ');
        if (commands[0] === 'push') {
            const tmp = queue.push(Number(commands[1]));
            if (tmp === 'error') result.push(tmp);
        }
        if (commands[0] === 'pop') result.push(queue.pop());
        if (commands[0] === 'peek') result.push(queue.peek());
        if (commands[0] === 'size') result.push(queue.size());
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

// const myQueue = new MyQueueSized(2);
// console.log(myQueue.push(1))
// console.log(myQueue.push(2))
// console.log(myQueue.push(3))
// console.log(myQueue.size())
// console.log(myQueue.peak())
// console.log(myQueue.pop())
// console.log(myQueue.pop())
// console.log(myQueue.pop())
// console.log(myQueue)
