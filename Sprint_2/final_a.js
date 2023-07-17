// https://contest.yandex.ru/contest/22781/run-report/89108603/

// console.log(myDeq.push_back(102))
// console.log(myDeq.push_front(20))
// console.log(myDeq.pop_front())
// console.log(myDeq.pop_back())
// console.log(myDeq)


// push_front -323
// push_front -415
// push_back -868
// push_front 765
// push_front 938
// pop_front
// push_front -773
// pop_front
// push_back -724
// pop_front
// pop_back
// push_back -20
// pop_front
// push_back 27
// pop_back
// push_front -738
// push_back -619
// pop_front
// pop_back
// pop_front
// push_back -289
// pop_back
// pop_back
// pop_back
// push_back -251
// pop_front
// pop_back
// push_front -89
// pop_back

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

function Deq(size) {
    this.items = Array(size);
    this.head = 0;
    this.tail = size - 1;
    this.size = 0;
    this.maxSize = size;
}

Deq.prototype.push_front = function (value) {
    if (this.size === this.maxSize) return 'error';

    this.items[this.head] = value;
    this.head = (this.head + 1) % this.maxSize;
    this.size++;
}

Deq.prototype.push_back = function (value) {
    if (this.size === this.maxSize) return 'error';

    this.items[this.tail] = value;
    this.tail--;
    if (this.tail < 0) this.tail = this.maxSize - 1;
    this.size++;
}

Deq.prototype.pop_back = function () {
    if (!this.size) return 'error';

    this.tail = (this.tail + 1) % this.maxSize;
    let tmp = this.items[this.tail];
    this.items[this.tail] = null;
    this.size--;
    return tmp;
}

Deq.prototype.pop_front = function () {
    if (!this.size) return 'error';

    this.head--;
    if (this.head < 0) this.head = this.maxSize - 1;
    let tmp = this.items[this.head];
    this.items[this.head] = null;
    this.size--;
    return tmp;
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
    const myDeq = new Deq(maxSize);

    commandsArr.forEach(el => {
        let commands = el.split(' ');
        if (commands[0] === 'push_front') {
            const tmp = myDeq.push_front(Number(commands[1]));
            if (tmp === 'error') result.push(tmp);
        }
        if (commands[0] === 'push_back') {
            const tmp = myDeq.push_back(Number(commands[1]));
            if (tmp === 'error') result.push(tmp);
        }
        if (commands[0] === 'pop_front') result.push(myDeq.pop_front());
        if (commands[0] === 'pop_back') result.push(myDeq.pop_back());
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

const myDeq = new Deq(113);
// myDeq.push_front(1)
// myDeq.push_front(2)
// console.log(myDeq.pop_back())
// console.log(myDeq.pop_front())
// myDeq.push_front(1)
// console.log(myDeq.pop_back())
// console.log(myDeq)


console.log(myDeq.push_front(-323))
console.log(myDeq.push_front(-415))
console.log(myDeq.push_back(-868))
console.log(myDeq.push_front(765))
console.log(myDeq.push_front(938))
console.log(myDeq.pop_front())
console.log(myDeq.push_front(-773))
console.log(myDeq.pop_front())
console.log(myDeq.push_back(-724))
console.log(myDeq.pop_front())
console.log(myDeq.pop_back())
console.log(myDeq.push_back(-20))
console.log(myDeq.pop_front())
console.log(myDeq.push_back(-27))
console.log(myDeq.pop_back())
console.log(myDeq.push_front(-738))
console.log(myDeq.push_back(-619))
console.log(myDeq.pop_front())
console.log(myDeq.pop_back())
console.log(myDeq.pop_front())
console.log(myDeq.push_back(-278))
console.log(myDeq.pop_back())
console.log(myDeq.pop_back())
console.log(myDeq.pop_back())
console.log(myDeq.push_back(-251))
console.log(myDeq.pop_front())
console.log(myDeq.pop_back())
console.log(myDeq.push_front(-89))
console.log(myDeq.pop_back())
console.log(myDeq.pop_front())

// console.log(myDeq)
//
console.log(myDeq.push_front(-1))
console.log(myDeq.push_front(-2))
console.log(myDeq.push_front(-3))
// console.log(myDeq)
console.log(myDeq.pop_back())
