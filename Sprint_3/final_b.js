// https://contest.yandex.ru/contest/23815/run-report/89450950/

/*
    ### Принцип работы

    Функция inPlaceQuickSort работает по принципу быстрой сортировки не используя дополнительную память.
    Есть опорный элемент pivot в середине массива и два указателя left, right которые указывают на концы отрезка массива.
    Левый указатель двигается пока он указывает на элемент меньше опорного. Правый двигается влево пока указывает на элемент больше опорного.
    Элементы по указателям меняются местами через функцию swap и передвигаются на следующие элементы пока не столкнутся.

    Для сортировки по нескольким значениям реализована функция helper которая сравнивает элементы по числу решенных задач, штрафу и логином.

    ### Доказательство корректности

        Из описания следует что сортировка не использует дополнительную память т.к. элементы заменяют друг друга и сортирует по нескольким значениям как требует условие задачи.

    ### Временная сложность

        Функция inPlaceQuickSort работает за логарифмическое время + разграничение элементов в зависимости от опорного за линейное время. В худшем случае опорный элемент может находится в неудачном положении и сложность будет стремится к квадратичной.

        Средний случай  - O(nlogn)
        Худший случай - O(n^2)


    ### Пространственная сложность

        Худший случай - O(n)
 */

function swap(arr, i ,j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function helper(a, b) {
    const MORE = 'more';
    const LESS = 'less';

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

function inPlaceQuickSort(arr, left = 0, right = arr.length - 1) {
    let i = left;
    let j = right;

    const pivot = arr[Math.floor((left + right) / 2)];

    while (i <= j) {
        while (helper(arr[i], pivot) === 'more') {
            i++;
        }
        while (helper(arr[j], pivot) === 'less') {
            j--;
        }

        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }

    if (left < j) {
        inPlaceQuickSort(arr, left, i);
    }
    if (right > i) {
        inPlaceQuickSort(arr, i, right);
    }
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

    inPlaceQuickSort(input);

    for (let i = 0; i < input.length; i++) {
        process.stdout.write(`${input[i][0]}`);
        if (i !== input.length - 1) {
            process.stdout.write("\n");
        }
    }
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


// const arr = [4,8,9,20,1,5,3,10];
// const arr = [4,6,2,3,5];
// inPlaceQuickSort(arr);
// console.log(arr)

// const arr = [["alla",4,100],["gena",6,1000],["gosha",2,90],["rita",2,90],["timofey",4,80]]
// const arr = [["alla",0,0],["gena",0,0],["gosha",0,0],["rita",0,0],["timofey",0,0]]
// inPlaceQuickSort(arr);
// console.log(arr);