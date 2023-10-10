/*
-- РЕШЕНИЕ --
https://contest.yandex.ru/contest/25070/run-report/89146935/

-- ПРИНЦИП РАБОТЫ --
1. Алгоритм реализован в соответствии с описанием алгоритма Прима.
   Дополнительно реализована неубывающая куча для хранения ребер,
   исходящих из остовного дерева, что позволяет за минимальное время
   доставать максимальное по весу ребро.
2. Функций makeMaxHeap создает неубывающую кучу, сравнивая элементы
   по компаратору.


-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Считаю, что доказательство корректности приведено в описании задания.
Для корректной работы необходимо, чтобы была правильно реализована
неубывающая куча и функция-компаратор для сравнения элементов в куче.

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
На считывание данных необходимо O(|E|) времени, поскольку граф
хранится в мапе. Алгоритм Прима работает за O(|V| * |E|) в общем
случае, если для хранения ребер использовать линейные структуры
данных. В данной реализации используется куча. Сложность операций
по извлечению и вставке элементов в куче - O(log n). В данном случае
n = |V|. Таким образом, общая сложность алгоритма Прима в данной
реализации - O(|E| + |E| * log |V|) = O(|E| * log |V|).


-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Итого общая пространственная сложность кучи O(n). При n = |V|
столько памяти будет занято в худшем случае на первой итерации
при полносвязном графе. Граф представлен в виде списков смежности
и занимает памяти O(|V| + |E|). Дополнительно используются структуры
данных, каждая из которых занимает не больше O(|V|). Таким образом,
общая пространственная сложность O(|V| + |E|).
*/
const readline = require("readline");
const fs = require("fs");
const path = require("path");

let currentLine = 0,
    verticesCount = 0,
    edgesCount = 0;
const graph = new Map();
const ERROR_MESSAGE = "Oops! I did it again";

readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (currentLine > 0 && currentLine <= edgesCount) {
            const [u, v, l] = line.split(/\s/).map(s => parseInt(s, 10));
            graph.get(u).push(new Edge(u, v, l));
            graph.get(v).push(new Edge(v, u, l));
        } else if (currentLine === 0) {
            const [vCount, eCount] = line.split(/\s/).map(s => parseInt(s, 10));
            verticesCount = vCount;
            edgesCount = eCount;
            for (let i = 1; i <= verticesCount; i++) {
                graph.set(i, []);
            }
        }
        currentLine++;
    })
    .on("close", () => solve(graph));

class Edge {
    constructor(begin, end, weight) {
        this.begin = begin;
        this.end = end;
        this.weight = weight;
    }
}

function makeMaxHeap(comparator) {
    const _heap = [null];
    let _size = 0;

    const _siftDown = idx => {
        let left = 2 * idx;
        let right = 2 * idx + 1;
        if (_heap.length - 1 < left) {
            return;
        }
        let max = -1;
        if (
            right <= _heap.length - 1 &&
            comparator(_heap[left], _heap[right]) > 0
        ) {
            max = right;
        } else {
            max = left;
        }
        if (comparator(_heap[idx], _heap[max]) > 0) {
            const tmp = _heap[idx];
            _heap[idx] = _heap[max];
            _heap[max] = tmp;
            _siftDown(max);
        }
    };

    const _siftUp = idx => {
        if (idx > 1) {
            let parentIndex = Math.floor(idx / 2);
            if (comparator(_heap[parentIndex], _heap[idx]) > 0) {
                const tmp = _heap[idx];
                _heap[idx] = _heap[parentIndex];
                _heap[parentIndex] = tmp;
                _siftUp(parentIndex);
            }
        }
    };

    const push = elem => {
        _heap.push(elem);
        _siftUp(_heap.length - 1);
        _size += 1;
    };

    const pop = () => {
        const result = _heap[1];
        const tmp = _heap.pop();
        if (_size > 1) {
            _heap[1] = tmp;
        }
        _siftDown(1);
        _size -= 1;
        return result;
    };

    const print = () => {
        return _heap;
    }

    const getSize = () => _size;

    return {
        push,
        pop,
        getSize,
        print
    };
}

function findMaximumSpanningTree(graph) {
    const mst = [];
    const added = new Set();
    const notAdded = new Set(graph.keys());
    const edges = makeMaxHeap((e1, e2) => e2.weight - e1.weight);
    console.log(edges.print())
    console.log(graph)

    const addVertex = v => {
        if (v) {
            added.add(v);
            notAdded.delete(v);
            for (const edge of graph
                .get(v)
                .filter(edge => notAdded.has(edge.end))) {
                console.log('edge', edge)
                edges.push(edge);
            }
            console.log(edges.print())
        }
    };

    const v = graph.keys().next().value;
    addVertex(v);

    while (notAdded.size > 0 && edges.getSize() > 0) {
        const e = edges.pop();
        if (notAdded.has(e.end)) {
            mst.push(e);
            addVertex(e.end);
        }
    }

    if (notAdded.size > 0) {
        throw new Error(ERROR_MESSAGE);
    } else {
        console.log(mst);
        let total = 0;
        for (const edge of mst) {
            total += edge.weight;
        }
        return total;
    }
}

function solve(graph) {
    try {
        const result = findMaximumSpanningTree(graph);
        console.log(result);
    } catch (e) {
        console.log(e.message);
    }
}