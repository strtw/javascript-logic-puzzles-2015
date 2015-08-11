//iterative function

function factorialit(n) {
    var i;
    for (i = n; i > 2; i--) {
        n *= (i - 1);
    }
    return n;
}


//recursive function

function factorial(n) {
    var result;
    if (n - 1 === 0) {
        return 1;
    }
    result = n * factorial(n - 1);
    return result;
}
