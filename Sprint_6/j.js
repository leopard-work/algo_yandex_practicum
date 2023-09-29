const WHITE = -1;
const GRAY = 0;
const BLACK = 1;

function topSort(n, m, graph) {
    const ans = [];
    const colors = new Array(n + 1).fill(WHITE);

    for (let k = 1; k <= n; k++) {
        const stack = [k];

        while (stack.length) {
            const v = stack.pop();

            if (colors[v] === WHITE) {
                colors[v] = GRAY;
                stack.push(v);

                graph[v].sort((a, b) => b - a);

                for (let i = 0; i < graph[v].length; i++) {
                    if (colors[graph[v][i]] === WHITE) {
                        stack.push(graph[v][i]);
                    }
                }
            } else {
                ans.push(v);
                colors[v] = BLACK;
            }
        }
    }

    return ans;
}


const list = [[6,4], [4,1], [5,1]];

const graph = new Array(6 + 1).fill(null).map(() => []);

for (let i = 0; i < 3; i++) {
    let tmp = list[i];
    graph[tmp[0]].push(tmp[1]);
}

console.log(graph);

console.log(topSort(6, 3, graph))