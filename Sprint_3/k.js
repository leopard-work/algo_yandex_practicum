function merge_sort(arr, left, right) {
    if (left >= right - 1) {
        return;
    }

    let mid = Math.floor((right + left) / 2);

    merge_sort(arr, left, mid);
    merge_sort(arr, mid, right);

    const res = merge(arr, left, mid, right)

    res.forEach((item,i) => {
        arr[left + i] = item;
    })
}

function merge(arr, left, mid, right) {
    const leftArr = [];
    const rightArr = [];
    const res = [];

    for (let i = left; i <= right - 1; i++) {
        if (i < mid) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    let i = 0;
    let j = 0;

    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] < rightArr[j]) {
            res.push(leftArr[i]);
            i++
        } else {
            res.push(rightArr[j]);
            j++
        }
        left++;
    }

    while (i < leftArr.length) {
        res.push(leftArr[i]);
        i++;
        left++;
    }

    while (j < rightArr.length) {
        res.push(rightArr[j]);
        j++;
        left++;
    }

    return res;
}

function test() {
    var a = [1, 4, 9, 2, 10, 11];
    var b = merge(a, 0, 3, 6);
    var expected = [1, 2, 4, 9, 10, 11];

    var c = [1, 4, 2, 10, 1, 2];
    merge_sort(c, 0, 6)
    expected = [1, 1, 2, 2, 4, 10];
}

// var a = [1, 4, 9, 2, 10, 11];
// var b = merge(a, 0, 3, 6);
// console.log(b)
//
// console.log(a);
//
// var c = [1, 4, 2, 10, 1, 2];
// merge_sort(c, 0, 6)
// console.log(c)