// https://contest.yandex.ru/contest/24414/run-report/89630056/

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

function Node(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
}

function LinkedList(head = null) {
    this.head = head;
    this.tail = null;
}

LinkedList.prototype.add = function (key, value) {
    const node = new Node(key, value);

    if (!this.head || !this.tail) {
        this.head = node;
        this.tail = node;
    } else {
        this.tail.next = node;
        this.tail = node;
    }
}

LinkedList.prototype.find = function (key) {
    if (!this.head) {
        return null;
    }

    let cur = this.head;

    while (cur) {
        if (cur.key === key) {
            return cur;
        }
        cur = cur.next;
    }

    return null;
}

LinkedList.prototype.remove = function(key) {
    if (!this.head) {
        return null;
    }

    let result = null;
    let cur = this.head;

    if (this.head.key === key) {
        result = this.head;
        this.head = this.head.next;
    }

    while (cur.next) {
        if (cur.next.key === key) {
            const result = cur.next;
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }

    if (this.tail.key === key) {
        result = this.tail;
        this.tail = cur;
    }

    return result;
}

function HashTable(size = 10000, base = 103, module = 10003) {
    this.size = size;
    this.base = base;
    this.module = module;
    this.table = new Array(size);
}

HashTable.prototype.generateHash = function(key) {
    return polyHash(this.base, this.module, key.toString()) % this.size;
}

HashTable.prototype.put = function(key, value) {
    const hash = this.generateHash(key);

    if (!this.table[hash]) {
        const list = new LinkedList();
        list.add(key, value);
        this.table[hash] = list;
    } else {
        const list = this.table[hash];
        const find = list.find(key);

        if (find) {
            find.value = value;
        } else {
            list.add(key, value);
        }
    }
}

HashTable.prototype.get = function(key) {
    const hash = this.generateHash(key);

    if (this.table[hash]) {
        const list = this.table[hash];
        const find = list.find(key);

        if (find) {
            return find.value;
        }
    }

    return null;
}

HashTable.prototype.remove = function(key) {
    const hash = this.generateHash(key);

    if (this.table[hash]) {
        const list = this.table[hash];
        const find = list.find(key);

        if (find) {
            let result = find.value;

            list.remove(key);
            if (list.head === null) {
                this.table[hash] = null;
            }
            return result;
        }
    }

    return null;
}

function solve() {
    const rows = readInt();
    let result = "";
    const table = new HashTable();

    for (let i = 0; i < rows; i++) {
        const arr = readArray();
        let tmp = 'None';

        if (arr[0] === 'put') {
            table.put(arr[1], arr[2]);
        }

        if (arr[0] === 'get') {
            const value = table.get(arr[1]);
            if (value) {
                tmp = value;
            }
            result += tmp;

            if (i !== rows - 1) {
                result += "\n";
            }
        }

        if (arr[0] === 'delete') {
            const value = table.remove(arr[1]);
            if (value) {
                tmp = value;
            }
            result += tmp;

            if (i !== rows - 1) {
                result += "\n";
            }
        }
    }

    process.stdout.write(`${result}`);
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


// let table = new HashTable();
// table.put('20', '27');
// console.log(table.get('20'))
//
// console.log(table.get(9));
// console.log(table.remove(9));
// table.put(9, 1);
// console.log(table.get(9));
// table.put(9, 2);
// console.log(table.get(9));
// table.put(9, 3);
// console.log(table.get(9));

// console.log(table.get(1));
// table.put(1, 10);
// table.put(2, 4);
// console.log(table.get(1));
// console.log(table.get(2));
// console.log(table.remove(2));
// console.log(table.get(2));
// table.put(1, 5);
// console.log(table.get(1));
// console.log(table.remove(2));

//console.log(myList);
// console.log(table);
