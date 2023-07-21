function merge_sort(arr, left, right) {
    if (left >= right - 1) {
        return;
    }

    let mid = Math.floor((right + left) / 2);

    merge_sort(arr, left, mid);
    merge_sort(arr, mid, right);

    merge(arr, left, mid, right)
}

function merge(arr, left, mid, right) {
    const leftArr = [];
    const rightArr = [];

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
            arr[left] = leftArr[i];
            i++
        } else {
            arr[left] = rightArr[j];
            j++
        }
        left++;
    }

    while (i < leftArr.length) {
        arr[left] = leftArr[i];
        i++;
        left++;
    }

    while (j < rightArr.length) {
        arr[left] = rightArr[j];
        j++;
        left++;
    }

    return arr;
}

function test() {
    var a = [1, 4, 9, 2, 10, 11];
    var b = merge(a, 0, 3, 6);
    var expected = [1, 2, 4, 9, 10, 11];

    var c = [1, 4, 2, 10, 1, 2];
    merge_sort(c, 0, 6)
    expected = [1, 1, 2, 2, 4, 10];
}

var a = [1, 4, 9, 2, 10, 11];
var b = merge(a, 0, 3, 6);
console.log(b)