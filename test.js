// const L = [1, 2, 3, 2, 1, 3];
// const M = [3, 2, 1, 5, 6, 3];

const L = [1, 1, 1, 1, 1, 1];
const M = [1, 1, 1, 1, 1, 1];

let n = 6;
let m = 6;
let Maxi = 0;
let E = new Set();

E = new Set(L.filter((x) => M.includes(x)));
console.log(E);

const f = (Y, a) => {
    let k = -1;
    const ans = [];
    while (Y.length - k >= 0) {
        try {
            k = Y.indexOf(a, k + 1);
            if (k >= 0 && k < Y.length) {
                ans.push(k);
            } else {
                break;
            }
        } catch (error) {
            break;
        }
    }
    return ans;
};

const d = {};

for (const x of E) {
    d[x] = [f(L, x), f(M, x)];
}

console.log(d)

for (const W of Object.values(d)) {
    for (const i of W[0]) {
        for (const j of W[1]) {
            let k = 1;
            console.log(i,j)

            while (k + i < n && k + j < m) {
                if (L[k + i] === M[k + j]) {
                    k += 1;
                } else {
                    break;
                }
            }

            if (k > Maxi) {
                Maxi = k;
            }
        }
    }
}

console.log(Maxi);