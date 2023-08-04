// https://contest.yandex.ru/contest/22781/run-report/89102749/

/*
    ### Принцип работы

    Калькулятор реализован через стек, куда попадают все числа из цикла
    Если в цикле подан знак операции, то эта операция выполняется с 2-мя первыми элементами из стека которые в последствии удаляются и результат помещается обратно в начало

    ### Оценка сложности

    Временная и пространственная сложность зависит от количества элементов входного массива и работает за линейное время O(n) т.к. все значения перебираются только в одном цикле
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

function calcPoland(arr) {
    const numbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(Number(arr[i]))) numbers.push(Number(arr[i]));
        else {
            let tmp = 0;
            if (arr[i] === '+') tmp = numbers[numbers.length - 1] + numbers[numbers.length - 2];
            if (arr[i] === '-') tmp = numbers[numbers.length - 2] - numbers[numbers.length - 1];
            if (arr[i] === '*') tmp = numbers[numbers.length - 1] * numbers[numbers.length - 2];
            if (arr[i] === '/') tmp = Math.floor(numbers[numbers.length - 2] / numbers[numbers.length - 1]);
            numbers.pop();
            numbers.pop();
            numbers.push(tmp);
        }
    }

    return numbers[numbers.length - 1];
}

function solve() {
    const arr = readArray();
    const result = calcPoland(arr);

    process.stdout.write(`${result}`);
}

function readArray() {
    var arr = _inputLines[_curLine].trim(" ").split(" ");
    _curLine++;
    return arr;
}