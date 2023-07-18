// https://contest.yandex.ru/contest/22781/run-report/89108603/

/*
    ### Принцип работы

    Дек реализован через стек и 2х указаиелей начала и конца, они указыают на пустую ячейку в которую можно добавить элемент (если стек не переполнен)
    Соответственно работает все по кольцевому принципу, элемнты могут быть расположены в разнгых ячейках, но по очереди

    ### Оценка сложности

    Временная сложность всех операций O(1) не зависимо от количества элементов
    Пространсвенная сложность зависит от максимального размера стека и составляет O(n)
 */

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