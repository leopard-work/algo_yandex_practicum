// https://contest.yandex.ru/contest/24810/run-report/90565752/

/*
    ### Принцип работы

        1. Исходные данные добавляются по очереди в кучу и при каждом добавлении происходит просеивание вверх по индексу добавленного элемента. Для сравнения элементов служит функция helper, которая фильтрует по нескольким показателям. В конечном итоге корнем кучи будет являться первый отсортированный элемент.

        2. В новый объект с результатами добавляется по очереди первый элемент из кучи и удаляется из нее пока куча не пустая. При каждом действии запускается просеивание вниз по первому индексу. После всех действий все значения будут отсортированы.


    ### Доказательство корректности

        Алгоритм использует самостоятельную реализацию кучи и выполняет сортировку в соответствии с условием задачи

    ### Временная сложность

        O(n * log(n)), где n - количество элементов

    ### Пространственная сложность

        O(n)
*/


const MORE = 'more';
const LESS = 'less';

function helper(a, b) {
    if (a[1] < b[1]) {
        return LESS;
    }
    if (a[1] > b[1]) {
        return MORE;
    }

    if (a[1] === b[1]) {
        if (a[2] < b[2]) {
            return MORE;
        }
        if (a[2] > b[2]) {
            return LESS;
        }

        if (a[2] === b[2]) {
            if (a[0] < b[0]) {
                return MORE;
            }
            if (a[0] > b[0]) {
                return LESS;
            }
        }
    }
}

function siftUp(heap, idx) {
    let parentIndex = Math.floor(idx / 2);

    while (parentIndex !== 0 && helper(heap[idx], heap[parentIndex]) === MORE) {
        [heap[parentIndex], heap[idx]] = [heap[idx], heap[parentIndex]]
        idx = parentIndex;
        parentIndex = Math.floor(idx / 2);
    }

    return idx;
}

function siftDown(heap, idx) {
    let leftIndex;
    let rightIndex;
    let swapIndex;

    const check = () => {
        leftIndex = idx * 2
        rightIndex = idx * 2 + 1;
        swapIndex = leftIndex;

        if (rightIndex < heap.length && helper(heap[leftIndex], heap[rightIndex]) === LESS) {
            swapIndex = rightIndex;
        }
    }

    check();

    while (leftIndex < heap.length && helper(heap[idx], heap[swapIndex]) === LESS) {
        [heap[idx], heap[swapIndex]] = [heap[swapIndex], heap[idx]];
        idx = swapIndex;
        check();
    }

    return idx;
}

function heapAdd(heap, key) {
    const index = heap.length;
    heap.push(key);
    if (heap.length) {
        siftUp(heap, index);
    }
}

function heapSort(arr) {
    const heap = [null];
    for (value of arr) {
        heapAdd(heap, value);
    }

    let result = "";

    while (heap.length > 2) {
        result += `${heap[1][0]}`;
        heap[1] = heap.pop();
        siftDown(heap, 1);
        result += `\n`
    }
    result += `${heap[1][0]}`;

    return result;
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

function solve() {
    const rows = readInt();
    const input = [];

    for (let i = 0; i < rows; i++) {
        const arr = readArray();
        arr[1] = parseInt(arr[1]);
        arr[2] = parseInt(arr[2]);
        input.push(arr);
    }

    const result = heapSort(input);

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

//const arr = [["alla",4,100]];
//const arr = [["gena",6,1000],["gosha",2,90],["rita",2,90],["timofey",4,80],["alla",4,100]];
//const arr = [["alla",0,0],["gena",0,0],["gosha",0,0],["rita",0,0],["timofey",0,0]]

// const arr = [["tufhdbi",76,58],["rqyoazgbmv",59,78],["qvgtrlkmyrm",35,27],["tgcytmfpj",70,27],["xvf",84,19],["jzpnpgpcqbsmczrgvsu",30,3],["evjphqnevjqakze",92,15],["wwzwv",87,8],["tfpiqpwmkkduhcupp",1,82],["tzamkyqadmybky",5,81],["amotrxgba",0,6],["easfsifbzkfezn",100,28],["kivdiy",70,47]]
// const arr = [["evjphqnevjqakze",92,15],["wwzwv",87,8],["tfpiqpwmkkduhcupp",1,82],["tzamkyqadmybky",5,81],["amotrxgba",0,6],["easfsifbzkfezn",100,28],["kivdiy",70,47]]

// console.log(heapSort(arr));