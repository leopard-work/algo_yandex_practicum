const readline = require("readline");
const fs = require("fs");
const path = require("path");

let currentLine = 0;
const input = [];

const WHITE = 1; // vertex is not visited
const GRAY = 2; // vertex is visiting
const BLACK = 3; // vertex is processed

const REVERSE_ROAD = "B";

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (currentLine > 0) {
            input.push(line);
        }
        currentLine++;
    })
    .on("close", () => solve(input));

function parseInputToVertices(input) {
    const vertices = new Map();
    for (let i = 0; i < input.length + 1; i++) {
        vertices.set(i, []);
    }
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] === REVERSE_ROAD) {
                vertices.get(i).push(j + i + 1);
            } else {
                vertices.get(j + i + 1).push(i);
            }
        }
    }
    return vertices;
}

function checkFoCycleUsingDFS(vertices, colors, startIndex) {
    const stack = [startIndex];
    while (stack.length > 0) {
        const v = stack.pop();
        if (colors[v] === WHITE) {
            colors[v] = GRAY;
            stack.push(v);
            for (const w of vertices.get(v)) {
                if (colors[w] === WHITE) {
                    stack.push(w);
                } else if (colors[w] === GRAY) {
                    throw new Error();
                }
            }
        } else if (colors[v] === GRAY) {
            colors[v] = BLACK;
        }
    }
}

function solve(input) {
    const vertices = parseInputToVertices(input);
    const colors = new Array(vertices.size + 1).fill(WHITE);
    try {
        for (let i = 1; i < vertices.size; i++) {
            checkFoCycleUsingDFS(vertices, colors, i);
        }
        console.log("YES");
    } catch {
        console.log("NO");
    }
}