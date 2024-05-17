// comulative sum

function comulativeSum(A) {
    let S = [];
    S[0] = A[0];
    for (let i = 1; i < A.length; i++) {
        S[i] = S[i-1] + A[i];
    }

    return S;
}

console.log(comulativeSum([1, 11, 12, 42, 3, 4, 99]));