function cn(arr, d) {
    let count = 0;

    for (let right = 1; right < arr.length; ++right) {
        let left = 0;
        while (arr[right] - arr[left] > d) left++;
        count += right - left;
    }

    console.log(count);
}

cn([1,2,3,4,5], 2)

