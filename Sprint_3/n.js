function flowerbeds(arr) {
    const res = [];

    arr.sort((a,b) => a[0] - b[0]);
    let tmp = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (tmp[1] >= arr[i][0]) {
            if (tmp[1] < arr[i][1]) {
                tmp[1] = arr[i][1];
            }
        } else {
            res.push(tmp);
            tmp = arr[i];
        }
    }

    res.push(tmp);

    return res;
}

// console.log(flowerbeds([[7,8],[7,8],[2,3],[6,10]]))
console.log(flowerbeds([[1,3],[3,5],[4,6],[5,6],[2,4],[7,10]]))