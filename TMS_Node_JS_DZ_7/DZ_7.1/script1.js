let calcSum = function () {
    if (arguments.length === 0) {
        return 0;
    };

    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum / arguments.length;
}

let a = calcSum(290, 360, 310);

console.log(a);