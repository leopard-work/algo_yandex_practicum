function swap(arr, i ,j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function helper(a, b) {
    if (a[1] < b[1]) return 'less';
    if (a[1] > b[1]) return 'more';

    if (a[1] === b[1]) {
        if (a[2] < b[2]) return 'more';
        if (a[2] > b[2]) return 'less';

        if (a[2] === b[2]) {
            if (a[0] < b[0]) return 'more';
            if (a[0] > b[0]) return 'less';
        }
    }
}

function inPlaceQuickSort(arr, left = 0, right = arr.length - 1) {
    let i = left;
    let j = right;

    const pivot = arr[Math.floor((left + right) / 2)];

    while (i <= j) {
        while (helper(arr[i], pivot) === 'less') {
            i++;
        }
        while (helper(arr[j], pivot) === 'more') {
            j--;
        }

        // while (arr[i] < pivot) {
        //     i++;
        // }
        // while (arr[j] > pivot) {
        //     j--;
        // }

        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }

    // console.log(arr,right,i,pivot);

    if (left < j) {
        inPlaceQuickSort(arr, left, i);
    }
    if (right > i) {
        inPlaceQuickSort(arr, i, right);
    }
}


// const arr = [4,8,9,20,1,5,3,10];
// const arr = [4,6,2,3,5];
// inPlaceQuickSort(arr);
// console.log(arr)

const arr = [["alla",4,100],["gena",6,1000],["gosha",2,90],["rita",2,90],["timofey",4,80]]
inPlaceQuickSort(arr);
console.log(arr);