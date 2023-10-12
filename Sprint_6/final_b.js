// https://contest.yandex.ru/contest/25070/run-report/92779303/

/*
    ### Принцип работы

        Из входных данных создается граф в формате списка смежности, под буквой "R" будем считать что дорога идет от города i до j, под буквой "B" - наоборот.
        Дополнительно создаем массив цветов размера количества городов, который будет состоять из белого, серого или черного цвета для каждой вершины.
        Далее выполняется поиск в глубину для поиска цикла, по условию задачи от одного города до другого можно проехать только по маршруту, состоящему исключительно из дорог типа R или только из дорог типа B, если найден цикл, то существует несколько маршрутов R и B.

    ### Доказательство корректности

        Алгоритм проверяет повторый вход в вершину, что по условию задачи недопустимо.

    ### Временная сложность

        O(E + V)

    ### Пространственная сложность

        O(V)
*/

const readline = require("readline");
const fs = require("fs");
const path = require("path");

let curLine = 0;
let n = 0;
let graph = null;
let colors = null;

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (curLine === 0) {
            n = parseInt(line);
            graph = new Array(n + 1).fill(null).map(() => []);
            colors = new Array(n + 1).fill(-1);
        } else {
            const s = line.trim().split("");

            for (let i = 0; i < s.length; i++) {
                if (s[i] === "R") {
                    graph[curLine].push(curLine + i + 1);
                } else {
                    graph[curLine + i + 1].push(curLine);
                }
            }
        }
        curLine++;
    })
    .on("close", () => railways())

function railways() {
    let ans = 1;

    for (let start = 1; start <= n; start++) {
        if (!ans) {
            break;
        }

        const stack = [start];

        while (stack.length > 0 && ans) {
            let v = stack.pop();

            if (colors[v] === -1) {
                colors[v] = 0;
                stack.push(v);

                for (let i = 0; i < graph[v].length; i++) {
                    let u = graph[v][i];

                    if (colors[u] === 0) {
                        ans = 0;
                    }

                    if (colors[u] === -1) {
                        stack.push(u);
                    }
                }
            } else {
                colors[v] = 1;
            }
        }
    }

    console.log(ans ? "YES" : "NO");
}