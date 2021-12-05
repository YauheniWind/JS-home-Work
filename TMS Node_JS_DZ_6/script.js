const fisrtArr = [1, 2, 3, 5, -10, 6, 90, 23, -8];
const secondArr = [1, -2, 50, 9, 8, 15, 2];
const thirdArr = [1, 2, 3, 5, 19, 76, -67, 78];




function sum(arr) {
    let sumPos = 0;

    for (let i = 0; i <= arr.length; i++) {
        let current = arr[i];
        if (current > 0 && current % 2 !== 0) {
            sumPos += current;
        };
    };

    return sumPos;
};

const firstSum = sum(fisrtArr);
console.log(`Result 1: `, firstSum)
const secondSum = sum(secondArr);
console.log(`Result 2: `, secondSum)
const thirdSum = sum(thirdArr);
console.log(`Result 3: `, thirdSum)