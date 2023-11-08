// https://contest.yandex.ru/contest/26133/run-report/96372836/

/*
    ### Принцип работы

        Решение задачи происходит в два этапа, распаковка строк и поиск общего префикса.

        Распаковка происходит с помощью стеков из скобок и цифр количества умножения строки, после открытия скобки символы внутри или выполненные операции с скобками умножаются на элемент из стека цифр и добавляются в результат.

        Поиск максимального префикса происходит по алгоритму:

        1. Возьмем в качестве базового элемента первую строку.
        2. Каждую следующую строку проверяем с базовой и ищем одинаковые элементы с начала строк, пока не наткнемся на символы, которые отличаются.
        3. В общий результат записываем минимум количества одинаковых символов.
        4. Обрезаем базовый элемент от 0 до общего результата и выводим на экран.

    ### Доказательство корректности

        Поиск происходит посимвольно для каждой строки и если символы не сходятся, префиксом будет являться все что находится левее. Минимум из всех префиксов будет являться наибольшим общим.

    ### Временная сложность

        Функция распаковки строки работает за O(M), где M - длина строки
        Общая сложность O(n * M^2);

    ### Пространственная сложность

        O(n * M);
*/

const readline = require("readline");
const fs = require("fs");
const path = require("path");

let currentLine = 0;
let data = [];

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (currentLine !== 0) {
            data.push(line);
        }
        currentLine++;
    })
    .on("close", () => solve());

function solve() {
    const first = unpack(data[0]);

    if (data.length === 1) {
        console.log(first);
    } else {
        let ans = 0;

        for (let i = 1; i < data.length; i++) {
            const second = unpack(data[i]);
            let tmp = 0;

            for (let j = 0; j < second.length; j++) {
                if (first[j] === second[j]) {
                    tmp++;
                } else {
                    break;
                }
            }

            if (!ans) {
                ans = tmp;
            } else {
                ans = Math.min(ans, tmp);
            }
        }

        console.log(first.substring(0, ans));
    }
}

function unpack(s) {
    const nums = [];
    const brackets = [];
    const ans = [];

    for (let i = 0; i < s.length; i++) {
        const l = s[i];

        if (/\d/g.test(l)) {
            nums.push(+l);
            continue;
        }

        if (/[a-z]+/g.test(l)) {
            if (brackets.length) {
                brackets[brackets.length - 1].push(l);
            } else {
                ans.push(l);
            }
            continue;
        }

        if (/\[/g.test(l)) {
            brackets.push([]);
            continue;
        }

        if (/]/g.test(l)) {
            const bracket = brackets.pop().join("");
            const n = nums.pop();
            const tmp = [];

            for (let j = 0; j < n; j++) {
                tmp.push(bracket);
            }

            if (brackets.length) {
                brackets[brackets.length - 1].push(tmp.join(""))
            } else {
                ans.push(tmp.join(""));
            }
        }
    }

    return ans.join("");
}