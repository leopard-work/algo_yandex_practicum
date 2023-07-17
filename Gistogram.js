function gisto(arr) {
    let h = [[arr[0], 0]];
    const left = [-1];
    const right = [arr.length];

    for (let i = 1; i < arr.length; i++) {
        while (h.length >= 1 && arr[i] <= h[h.length - 1][0]) {
            h.pop();
        }
        if (h.length) left.push(h[h.length - 1][1]);
        else left.push(-1);
        h.push([arr[i], i]);
    }

    h = [[arr[arr.length - 1], arr.length]];

    for (let i = arr.length - 2; i >= 0; i--) {
        while (h.length >= 1 && arr[i] <= h[h.length - 1][0]) {
            h.pop();
        }
        if (h.length) right.push(h[h.length - 1][1]);
        else right.push(arr.length);
        h.push([arr[i], i]);
    }

    let maxArea = 0;
    right.reverse();

    for (let i = 0; i < left.length - 1; i++) {
        console.log(arr[i], right[i], left[i],  arr[i] * (right[i] - left[i] - 1))
        maxArea = Math.max(maxArea, arr[i] * (right[i] - left[i] - 1))
    }

    console.log(left)
    console.log(right)

    return maxArea;
}

console.log(gisto([2,7,6,9,7,5,7,3,5]))

//,7,6,9,6,9,7,5,7,3,5