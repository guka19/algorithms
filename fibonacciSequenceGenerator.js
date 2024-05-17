// fibonacci sequence generator
function fsg(limit) {
    let f = []
    f[0] = 1;
    f[1] = 1;

    for (let i = 2; i < limit; i++) {
        f[i] = f[i-1] + f[i-2];
    }

    return f;
}

console.log(fsg(10));
console.log(fsg(20));
console.log(fsg(50));