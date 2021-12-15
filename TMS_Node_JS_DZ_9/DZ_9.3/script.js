function numberOfFibonacci(n) {
    if (n <= 0) {
        return 0
    } else if (n === 1) {
        return 1
    } else {
        return numberOfFibonacci(n - 1) + numberOfFibonacci(n - 2)
    };
};

console.log(numberOfFibonacci(8))