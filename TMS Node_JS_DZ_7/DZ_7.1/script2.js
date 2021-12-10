let calcArrow = (...arg) => {
    if (arg === 0) {
        return 0;
    };

    let sum = 0;

    for (let i = 0; i < arg.length; i++) {
        sum += arg[i];
    }

    return sum / arg.length;
}

let a = calcArrow(2, 3, 4);

console.log(a);