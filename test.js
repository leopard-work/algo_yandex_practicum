function trash(arr, search) {
    arr.sort((a, b) => a - b);
    const res = [];

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            res.push(arr[j] - arr[i]);
        }
    }

    return res.sort((a, b) => a - b)[search - 1];
}


console.log(trash([60,88,82,78,86,38,5,76,38,90], 36))




