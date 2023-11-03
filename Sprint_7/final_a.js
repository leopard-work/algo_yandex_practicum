// https://contest.yandex.ru/contest/25597/run-report/95770306/

/*
    ### Принцип работы

        1. Создадим два массива - before и now размером n, before заполняем цифрами от 0 до n, в now меняем 0 элемент на единицу.
        2. С помощью двух вложенных циклов проходим по массиву now и расчитываем цену операций для символов:
           - вставка символа before[j] + 1
           - удаление символа now[j - 1] + 1
           - замена символа before[j - 1], если символы в строках по индексами не равны, добавляем единицу
           Из этих операций выбираем и записываем минимальный.
           В конце каждой итерации происходит замена массивов now и before, в now[0] записываем номер следующей итерации.
        3. Ответом будет является крайни правый элемент в массиве before.

    ### Доказательство корректности

        В данной задаче используется алгоритм Вагнера — Фишера

    ### Временная сложность

        O(n * m)

    ### Пространственная сложность

        O(n)
*/

const readline = require("readline");
const fs = require("fs");
const path = require("path");

let currentLine = 0;
let s = null;
let t = null;

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (currentLine === 0) {
            s = line;
        } else {
            t = line;
        }
        currentLine++;
    })
    .on("close", () => distance());

function distance() {
    let before = [...Array(s.length + 1).keys()];
    let now = new Array(s.length + 1).fill(0);
    now[0] = 1;

    for (let i = 1; i <= t.length; i++) {
        for (let j = 1; j <= s.length; j++) {
            let replace = before[j - 1];

            if (t[i - 1] !== s[j - 1]) {
                replace++;
            }

            now[j] = Math.min(before[j] + 1, now[j - 1] + 1, replace)
        }

        [before, now] = [[...now], [...before]]
        now[0] = i + 1;
    }

    console.log(before[before.length - 1]);
}
