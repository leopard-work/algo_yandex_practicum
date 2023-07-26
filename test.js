function goldenMean(arr1, arr2) {
    let mid = Math.ceil((arr1.length + arr2.length) / 2);
    let left = 0;
    let right = 0;
    let i = 0;
    let j = 0;

    for (k = 0; k <= mid; k++) {
        let cur = null;

        if (i >= arr1.length) {
            cur = arr2[j];
            j++;
        } else if (j >= arr2.length) {
            cur = arr1[i];
            i++;
        } else {
            if (arr1[i] < arr2[j]) {
                cur = arr1[i];
                i++;
            } else {
                cur = arr2[j];
                j++;
            }
        }

        if (k === mid - 1) {
            left = cur;
        }

        if (k === mid) {
            right = cur;
        }
    }

    if ((arr1.length + arr2.length) % 2 === 1) {
        return left
    } else {
        return (left + right) / 2;
    }
}

// const arr1 = [1,5];
// const arr2 = [4,6,7];

// const arr1 = [1,2,3];
// const arr2 = [4,6,7];

const arr1 = [4, 4, 5, 7, 7, 7, 8, 9, 9];
const arr2 = [0, 0, 0, 1, 3, 3, 5, 10];

console.log(goldenMean(arr1,arr2))