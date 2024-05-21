function simpleSearch(arr, x) {
    let i = 0;
    while (i != arr.length && arr[i] != x) {
        i++;
    }
    return i;
}

let A = [1, 2, 11, 23, 4, 98, 3];
let x = 198;
let result = simpleSearch(A, x);
if (result === A.length) {
    console.log('This element is not in the array');
} else {
    console.log(`Element is at ${result} index`);
}