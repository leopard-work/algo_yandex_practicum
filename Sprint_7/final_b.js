// https://contest.yandex.ru/contest/25597/run-report/95540633/

/*
    ### Принцип работы

        1. Проверяем сумму элементов на четность, если нечетная, то на две одинаковые части разбить невозможно.
        2. Создаем массив dp размером половины суммы элементов и ищем все подмножества сумм через цикл i от 1 до sum/2 внутри которого цикл j по всем исходным элементам.
        3. Если dp[i - j] == 1, то сумму i можно составить.
        4. Исходные элементы всегда будут иметь подмножество (например 7 - 7 = 1), т.к. нулевой элемент массива dp изначально равняется 1.
        5. Ответом будет является последний элемент в массиве dp.

    ### Доказательство корректности

        Если найдено подмножество для sum/2, то оставшиеся элементы будет составлять такую же сумму, соответственно произвести разбиение возможно.

    ### Временная сложность

        O(n * sum), где sum, сумма всех элементов / 2

    ### Пространственная сложность

        O(sum)
*/

const readline = require("readline");
const fs = require("fs");
const path = require("path");

let currentLine = 0;
let n = null;
let data = null;

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (currentLine === 0) {
            n = Number(line);
        } else {
            data = line.split(" ").map(Number);
        }
        currentLine++;
    })
    .on("close", () => sameAmounts());

function sameAmounts() {
    let ok = 1;
    let sum = data.reduce((acc, cur) => acc += cur);

    if (sum % 2) {
        console.log("False");
        ok = 0;
    }

    if (ok) {
        const dp = new Array(sum / 2 + 1).fill(0);
        dp[0] = 1;

        for (let j = 0; j < data.length; j++) {
            for (let i = sum / 2; i >= data[j]; i--) {
                if (dp[i - data[j]] === 1) {
                    dp[i] = 1;
                }
            }
        }

        console.log(dp[dp.length - 1] ? "True" : "False");
    }
}
