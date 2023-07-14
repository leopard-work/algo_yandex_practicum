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

class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
        this.current = null;
    }
}

function Queue() {
    this.node = null;
    this.size = 0;
}

Queue.prototype.put = function (item) {
    if (!this.size) {
        this.node = new Node(item);
        this.current = this.node;
    }
    else {
        this.current.next = new Node(item);
        this.current = this.current.next;
    }
    this.size++;
}

Queue.prototype.getSize = function() {
    return this.size;
}

Queue.prototype.get = function() {
    if (!this.size) return 'error';
    const res = this.node.value;
    if (this.size !== 1) this.node = this.node.next;
    else this.node = null;
    this.size--;
    return res;
}

function solve() {
    const rows = readInt();
    const commandsArr = [];
    for (let i = 0; i < rows; i++) {
        commandsArr.push(_inputLines[_curLine].trim(" "))
        _curLine++;
    }
    const result = [];
    const myQueue = new Queue();

    commandsArr.forEach(el => {
        let commands = el.split(' ');
        if (commands[0] === 'put') myQueue.put(Number(commands[1]));
        if (commands[0] === 'get') {
            const tmp = myQueue.get();
            if (tmp === 'error') result.push(tmp);
            else result.push(Number(tmp));
        }
        if (commands[0] === 'size') {
            result.push(myQueue.getSize());
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


