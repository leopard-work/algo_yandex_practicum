// https://contest.yandex.ru/contest/24414/run-report/89751918/

/*
    ### Принцип работы

        Решение разделено на две функции:

        dbIndex - создание базы с индексами, проход по всем словам и создание объекта, где ключ - слово и значение тоже объект с элементами {номер строки: количество вхождений}

        searchSystem - для каждого запроса создается set коллекция с уникальными словами и идет цикл по каждому слову
        В цикле проверяем есть слово в базе с индексами, если есть запускается цикл сложения результатов, в конечном итоге для каждого слова получается объект с элементами {номер строки, количество вхождений}
        Далее идет сортировка по количеству вхождений и вывод 5 элементов как требует задание

    ### Доказательство корректности

        Алгоритм рассчитывает одноразово базу данных с индексами и для каждой строки идет расчет релевантности по уникальным словам

    ### Временная сложность

        При создании базы индексов идет цикл по каждой стоке n и каждому слову k = O(n * k)
        Для расчета релевантности идет цикл по каждой строке m и каждому слову p + цикл проверки из базы индексов за O(n) = O(m * p * n)

        Итог - O(n * k + m * p * n)


    ### Пространственная сложность

        Сложность хранения базы индексов равна количеству уникальных слов из всех документов = O(k)
        Сложность хранения релевантных документов равняется количеству локументов m = O(m)

        Итог - O(k + m)
 */

function dbIndex(textArr) {
    const db = {};

    for (let i = 1; i <= textArr.length; i++) {
        let text = textArr[i - 1].split(/\s+/g);

        for (word of text) {
            if (word in db) {
                if (i in db[word]) {
                    db[word][i]++;
                } else {
                    db[word][i] = 1;
                }
            } else {
                db[word] = {[i]: 1};
            }
        }
    }

    return db;
}

function searchSystem(text, queries) {
    const db = dbIndex(text);

    const results = [];
    let index = 0;

    queries.forEach(query => {
        let words = new Set(query.split(/\s+/g));
        const queryResult = {};

        words.forEach(word => {
            if (word in db) {
                for (const value in db[word]) {
                    if (db[word].hasOwnProperty(value)) {
                        if (value in queryResult) {
                            queryResult[value] += db[word][value]
                        } else {
                            queryResult[value] = db[word][value]
                        }
                    }
                }
            }
        })

        const arr = Object.entries(queryResult).sort((a,b) => b[1] - a[1] || a[0] - b[0]);

        if (arr.length) {
            results[index] = [];

            for (let i = 0; i < 5; i++) {
                if (arr[i]) results[index].push(arr[i][0]);
            }

            results[index] = results[index].join(' ');

            index++;
        }
    })

    return results;
}

function solve() {
    let rows = readInt();
    const text = [];
    const queries = [];

    for (let i = 0; i < rows; i++) {
        text.push(readLine());
    }

    rows = readInt();

    for (let i = 0; i < rows; i++) {
        queries.push(readLine());
    }

    const results = searchSystem(text, queries);

    process.stdout.write(results.join("\n"));
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readLine() {
    const n = _inputLines[_curLine];
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

// const arr = ["i love i coffee", "coffee with milk and sugar", "free tea for everyone"];
// const search = ["i like black coffee without milk", "everyone loves new year", "mary likes black coffee without milk"];

// const arr = ["i love i coffee", "coffee with milk and sugar", "free tea for everyone", "i", "i", "i", "i", "i"];
// const search = ["i like black coffee without milk", "everyone loves new year", "mary likes black coffee without milk"];

// const arr = ["buy flat in moscow", "rent flat in moscow", "sell flat in moscow", "want flat in moscow like crazy", "clean flat in moscow on weekends", "renovate flat in moscow"];
// const search = ["flat in moscow for crazy weekends"];

// const arr = ["i like dfs and bfs", "i like dfs dfs", "i like bfs with bfs and bfs"];
// const search = ["dfs dfs dfs dfs bfs"];
//
// console.log(searchSystem(arr, search))