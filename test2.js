function swap(arr, i ,j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function helper(a, b) {
    const MORE = 'more';
    const LESS = 'less';

    if (a[1] < b[1]) {
        return LESS;
    }
    if (a[1] > b[1]) {
        return MORE;
    }

    if (a[1] === b[1]) {
        if (a[2] < b[2]) {
            return MORE;
        }
        if (a[2] > b[2]) {
            return LESS;
        }

        if (a[2] === b[2]) {
            if (a[0] < b[0]) {
                return MORE;
            }
            if (a[0] > b[0]) {
                return LESS;
            }
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

        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }

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

// const arr = [["alla",4,100],["gena",6,1000],["gosha",2,90],["rita",2,90],["timofey",4,80]]
const arr = [["alla",0,0],["gena",0,0],["gosha",0,0],["rita",0,0],["timofey",0,0]]
inPlaceQuickSort(arr);
console.log(arr);