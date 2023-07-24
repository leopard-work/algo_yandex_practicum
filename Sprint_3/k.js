function merge_sort(arr, left, right) {
    if (left >= right - 1) {
        return;
    }

    let mid = Math.floor((right + left) / 2);

    merge_sort(arr, left, mid);
    merge_sort(arr, mid, right);

    merge(arr, left, mid, right)
}

function merge(arr, left, mid, right)
{
    let n1 = mid - left;
    let n2 = right - mid ;

    let L = new Array(n1);
    let R = new Array(n2);

    for (let i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (let j = 0; j < n2; j++)
        R[j] = arr[mid + j];

    let i = 0;
    let j = 0;
    let k = left;

    // console.log(L)
    // console.log(R)

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }

    return arr;
}

// function merge(arr, left, mid, right) {
//     const leftArr = [];
//     const rightArr = [];
//
//     for (let i = left; i <= right - 1; i++) {
//         if (i < mid) {
//             leftArr.push(arr[i]);
//         } else {
//             rightArr.push(arr[i]);
//         }
//     }
//
//     let i = 0;
//     let j = 0;
//
//     while (i < leftArr.length && j < rightArr.length) {
//         if (leftArr[i] < rightArr[j]) {
//             arr[left] = leftArr[i];
//             i++
//         } else {
//             arr[left] = rightArr[j];
//             j++
//         }
//         left++;
//     }
//
//     while (i < leftArr.length) {
//         arr[left] = leftArr[i];
//         i++;
//         left++;
//     }
//
//     while (j < rightArr.length) {
//         arr[left] = rightArr[j];
//         j++;
//         left++;
//     }
//
//     return arr;
// }

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

// var c = [1, 4, 2, 10, 1, 2];
// merge_sort(c, 0, 6)
// console.log(c)