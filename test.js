function merge(arr, l, m, r)
{
    var n1 = m - l + 1;
    var n2 = r - m;

    // Create temp arrays
    var L = new Array(n1);
    var R = new Array(n2);

    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    console.log(L,R)

    // Merge the temp arrays back into arr[l..r]

    // Initial index of first subarray
    // var i = 0;
    //
    // // Initial index of second subarray
    // var j = 0;
    //
    // // Initial index of merged subarray
    // var k = l;
    //
    // while (i < n1 && j < n2) {
    //     if (L[i] <= R[j]) {
    //         arr[k] = L[i];
    //         i++;
    //     }
    //     else {
    //         arr[k] = R[j];
    //         j++;
    //     }
    //     k++;
    // }
    //
    // // Copy the remaining elements of
    // // L[], if there are any
    // while (i < n1) {
    //     arr[k] = L[i];
    //     i++;
    //     k++;
    // }
    //
    // // Copy the remaining elements of
    // // R[], if there are any
    // while (j < n2) {
    //     arr[k] = R[j];
    //     j++;
    //     k++;
    // }
}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted
function mergeSort(arr,l, r){
    if(l>=r){
        return;
    }
    var m =l+ parseInt((r-l)/2);
    mergeSort(arr,l,m);
    mergeSort(arr,m+1,r);
    merge(arr,l,m,r);
}

var a = [1, 4, 2, 10, 1, 2];
console.log(mergeSort(a, 0, 5))
console.log(a)