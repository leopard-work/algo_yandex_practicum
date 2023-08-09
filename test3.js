function sumSum(arr, x) {
    arr.sort((a,b) => a - b);
    //console.log(arr);
    const res = [];

    for (let j = 0; j < arr.length - 3; j++) {
        if (arr[j] !== arr[j - 1]) {
            for (let i = j + 1; i < arr.length - 2; i++) {
                if (i > j + 1 && arr[i] === arr[i - 1]) continue;

                let first = arr[j];
                let second = arr[i];
                let left = i + 1;
                let right = arr.length - 1;

                while (left < right) {
                    const s = first + second + arr[left] + arr[right];

                    if (s === x) {
                        //console.log([first, second, arr[left], arr[right]]);
                        res.push([first, second, arr[left], arr[right]]);
                        while(arr[left] === arr[left + 1]) left++;
                        while(arr[right] === arr[right - 1]) right--;
                        left++;
                        right--;
                    } else {
                        if (s < x) {
                            left++;
                        } else {
                            right--;
                        }
                    }
                }

            }
        }
    }


    return res;
}

console.log(sumSum([2, 3, 2, 4, 1, 10, 3, 0], 10))
console.log(sumSum([1, 0, -1, 0, 2, -2], 0))
console.log(sumSum([1, 1, 1, 1, 1], 4))