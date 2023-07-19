function genBinary(n, prefix, arr=[]) {
    if (n == 0) {
        arr.push(prefix);
        console.log(prefix);
    } else {
        genBinary(n - 1, prefix + "0", arr);
        genBinary(n - 1, prefix + "1", arr);
    }

    return arr;
}

console.log(genBinary(3, ""))

// function genBinary(n, prefix, arr=[]) {
//     if (n == 0) {
//         arr.push(prefix);
//         console.log(prefix);
//     } else {
//         genBinary(n - 1, prefix + 1, arr);
//         genBinary(n - 1, prefix + 2, arr);
//     }
//
//     return arr;
// }
//
// console.log(genBinary(3, 0))


