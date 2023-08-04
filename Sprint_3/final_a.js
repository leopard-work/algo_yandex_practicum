// https://contest.yandex.ru/contest/23815/run-report/89318592/

function brokenSearch(arr, k) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((right + left) / 2);

        if (arr[mid] === k) {
            return mid;
        }

        if (arr[left] <= arr[mid]) {
            if (k >= arr[left] && k < arr[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (k <= arr[right] && k > arr[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}

function test() {
    const arr = [19, 21, 100, 101, 1, 4, 5, 7, 12];
    if (brokenSearch(arr, 5) !== 1)  {
        console.error("WA");
    }
}

// console.log(brokenSearch([19, 21, 100, 101, 1, 4, 5, 7, 12], 4))
// console.log(brokenSearch([100, 101, 1, 4, 5, 7, 12, 19, 21], 21))
// console.log(brokenSearch([5,1], 5))
// console.log(brokenSearch([2,3,4,5,6,1], 2))