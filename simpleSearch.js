function simpleSearch(arr, x) {
    let k = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            k = i;
            break;
        }
    }

    return k;
}

let result = simpleSearch([2, 11, 23, 123, 121, 22, 323], 999);
if (result === -1) {
    console.log('there is not this element in the array');
} else {
    console.log(`element is at ${result} index`);
}