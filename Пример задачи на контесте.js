const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

// Установим callback на считывание строки - так мы получим
// все строки из ввода в массиве _inputLines.
_reader.on('line', line => {
    _inputLines.push(line);
});

// Когда ввод закончится, будет вызвана функция solve.
process.stdin.on('end', solve);

// Функция парсит число из очередной строки массива _inputLines
// и сдвигает указатель на единицу вперёд.
function readNumber() {
    return Number(_inputLines[_curLine++]);
}

function solve() {
    const a = readNumber();
    const b = readNumber();

    const answer = a + b;

    console.log(answer);
}


///////////


const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
    _inputLines.push(line);
});

// Когда ввод закончится, будет вызвана функция solve.
process.stdin.on('end', solve);

function solve() {
    var splitted = _inputLines[0].trim(" ").split(" ").map(num => Number(num));
    const a = splitted[0];
    const b = splitted[1];

    const answer = a + b;

    console.log(answer);
}


//////////



// JavaScript

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
    const n = Number(_inputLines[0]);
    var arr = _inputLines[1].trim(" ").split(" ").map(num => Number(num));
    process.stdout.write(`${arr.join(' ')}`);
}