// const readline = require("readline");
// const fs = require("fs");
// const path = require("path");
// const os = require("os");
//
// let participants = [],
//     totalLines = 0,
//     currentLine = 0;
//
// readline
//     .createInterface({
//         input: fs.createReadStream(path.join(__dirname, "input.txt"))
//     })
//     .on("line", line => {
//         if (currentLine === 0) {
//             totalLines = parseInt(line, 10);
//         } else if (currentLine > 0 && currentLine <= totalLines) {
//             participants.push(Participant.parse(line));
//         }
//         currentLine++;
//     })
//     .on("close", () => solve(participants));

class Participant {
    static parse(line) {
        const [name, points, penalty] = line.split(/\s/);
        return new Participant(name, parseInt(points, 10), parseInt(penalty));
    }

    static compare(first, second) {
        if (first.points !== second.points) {
            return second.points - first.points;
        }
        if (first.penalty !== second.penalty) {
            return first.penalty - second.penalty;
        }
        //return first.name.localeCompare(second.name);
    }

    constructor(name, points, penalty) {
        this.name = name;
        this.points = points;
        this.penalty = penalty;
    }
}

function makeMaxHeap(elements, comparator) {
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
        _heap[1] = _heap.pop();
        _siftDown(1);
        _size -= 1;
        return result;
    };

    const getSize = () => _size;

    for (const element of elements) {
        push(element);
    }

    console.log(_heap);

    return {
        push,
        pop,
        getSize
    };
}


const arr = [["tufhdbi",76,58],["rqyoazgbmv",59,78],["qvgtrlkmyrm",35,27],["tgcytmfpj",70,27],["xvf",84,19],["jzpnpgpcqbsmczrgvsu",30,3],["evjphqnevjqakze",92,15],["wwzwv",87,8],["tfpiqpwmkkduhcupp",1,82],["tzamkyqadmybky",5,81],["amotrxgba",0,6],["easfsifbzkfezn",100,28],["kivdiy",70,47]]
//const arr = [["evjphqnevjqakze",92,15],["wwzwv",87,8],["tfpiqpwmkkduhcupp",1,82],["tzamkyqadmybky",5,81],["amotrxgba",0,6],["easfsifbzkfezn",100,28],["kivdiy",70,47]]


for (let i = 0; i < arr.length; i++) {
    arr[i] = Participant.parse(arr[i].join(' '));
}

//console.log(arr)


solve(arr)

function solve(participants) {
    const heap = makeMaxHeap(participants, Participant.compare);
    console.log(heap);

    const sorted = [];
    while (heap.getSize() > 0) {
        sorted.push(heap.pop());
    }
    console.log(sorted);
}