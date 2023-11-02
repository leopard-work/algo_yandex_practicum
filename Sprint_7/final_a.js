// https://contest.yandex.ru/contest/25597/run-report/95508559/

/*
    ### Принцип работы

        1. Создадим матрицу dp размерами длины строк n * m + 1 и заполним верхнюю и левую границы от 0 до n и от 0 до m.
        2. С помощью двух вложенных циклов проходим по матрице и расчитываем цену операций для символов:
           - вставка символа [i - 1][j] + 1
           - удаление символа [i][j - 1] + 1
           - замена символа [i - 1][j - 1], если символы в строках по индексами не равны, добавляем единицу
           Из этих операций выбираем и записываем в матрицу минимальный.
        3. Ответом будет является крайни правый элемент в матрице.

    ### Доказательство корректности

        В данной задаче используется алгоритм Вагнера — Фишера

    ### Временная сложность

        O(n * m)

    ### Пространственная сложность

        O(n * m)
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
    const dp = new Array(t.length + 1);
    dp[0] = [...Array(s.length + 1).keys()];

    for (let i = 1; i <= t.length; i++) {
        dp[i] = new Array(s.length + 1).fill(0);
        dp[i][0] = i;
    }

    for (let i = 1; i <= t.length; i++) {
        for (let j = 1; j <= s.length; j++) {
            let replace = dp[i - 1][j - 1];

            if (t[i - 1] !== s[j - 1]) {
                replace++;
            }

            dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, replace)
        }
    }

    console.log(dp[t.length][s.length]);
}
