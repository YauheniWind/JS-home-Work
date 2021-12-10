function avg() {
    if (arguments.length === 0) {
        return 0;
    };

    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum / arguments.length;
}

let a = avg(2, 3, 4);

console.log(a);
