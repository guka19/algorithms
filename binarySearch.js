// binary search

function binarySearch(arr, x) {
    let low = 0;
    let high = arr.length-1;
    let mid;

    while (high >= low) {
        mid = low + Math.floor((high - low) / 2);

        if (arr[mid] === x) {
            return mid;
        }

        if (arr[mid] > x) {
            high = mid-1;
        }

        else {
            low = mid+1;
        }
    }

    return -1;
}

const result = binarySearch([1, 2, 3, 5, 11, 25, 36, 52, 77], 52);
if (result === -1) {
    console.log('Element is absent in the array');
} else {
    console.log(`Element is at ${result} index`);
}