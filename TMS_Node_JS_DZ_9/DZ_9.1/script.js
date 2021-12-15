var arr = [1, 2, 3, 4, 4, 5, 2, 9, 4];

var arrUnique = arr.reduce(function (start, end) {
    console.log(start, end)
    if (start.indexOf(end) < 0) {
        start.push(end)
    }
    return start;
}, []);

console.log(arrUnique);