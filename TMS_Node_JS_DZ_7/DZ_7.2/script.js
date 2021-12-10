const arr1 = [1, 2, 3, 4, 5, -10, 6, 90, 23, -8];
const arr2 = [1, -2, 50, 9, -8, 15, 2];
const arr3 = [1, 2, 3, 5, 19, -76, -67, 78];

const getNewArrFromGroup = (arr) => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        // console.log(`i: ${i}, arr[i]: , ${arr[i]}`);

        for (let k = 0; k < arr[i].length; k++) {
            // console.log(`k: ${k}, arr[i][k]: ${arr[i][k]}`);

            if (arr[i][k] < 0 && arr[i][k] % 2 === 0) {
                newArr.push(arr[i][k]);
            };

        };

    };
    newArr.shift()
    newArr.pop()

    return newArr;
};

const newArrFromGroup = getNewArrFromGroup([arr1, arr2, arr3]);

console.log(newArrFromGroup);