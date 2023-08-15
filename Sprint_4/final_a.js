function dbIndex(textArr) {
    const db = new Map();

    for (let i = 0; i < textArr.length; i++) {
        let text = textArr[i].split(/\s+/g);

        text.forEach(word => {
            if (db.has(word)) {
                const map = db.get(word);

                if (map.has(i + 1)) {
                    map.set(i + 1, map.get(i + 1) + 1)
                } else {
                    map.set(i + 1, 1);
                }
            } else {
                const map = new Map();

                map.set(i + 1, 1);
                db.set(word, map);
            }
        })
    }

    return db;
}

function searchSystem(text, queries) {
    const db = dbIndex(text);
    const results = [];
    let index = 0;

    queries.forEach(query => {
        let words = new Set(query.split(/\s+/g));
        const queryResult = new Map();

        words.forEach(word => {
            if (db.has(word)) {
                for (value of db.get(word).entries()) {
                    if (queryResult.has(value[0])) {
                        queryResult.set(value[0], queryResult.get(value[0]) + value[1])
                    } else {
                        queryResult.set(value[0], value[1])
                    }
                }
            }
        })

        if (queryResult.size) {
            results[index] = [];

            Array.from(queryResult).sort((a,b) => b[1] - a[1]).forEach((item, i) => {
                if (i < 5) {
                    results[index].push(item[0]);
                }
            })

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
    let output = "";

    for (let i = 0; i < results.length; i++) {
        output += results[i].join(' ');

        if (i !== results - 1) {
            output += "\n";
        }
    }

    process.stdout.write(output);
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

// const arr = ["i love i coffee", "coffee with milk and sugar", "free tea for everyone", "i", "i", "i", "i", "i"];
// const search = ["i like black coffee without milk", "everyone loves new year", "mary likes black coffee without milk"];

// const arr = ["buy flat in moscow", "rent flat in moscow", "sell flat in moscow", "want flat in moscow like crazy", "clean flat in moscow on weekends", "renovate flat in moscow"];
// const search = ["flat in moscow for crazy weekends"];

// const arr = ["i like dfs and bfs", "i like dfs dfs", "i like bfs with bfs and bfs"];
// const search = ["dfs dfs dfs dfs bfs"];

// console.log(searchSystem(arr, search))