// Вариант 1
let germanArr = [];
let japanArr = [];
let germanCars = ["BMW", "Volkswagen"]
let japanCars = ["Honda", "Nissan"]

let str = ' [ {"car": "BMW", "model": "5-series e39"}, {"car": "Honda", "model":  "Civic (5G)"}, {"name": "Nissan", "model": "Silvia (S14)"}, {"name": "Volkswagen", "model": "Golf MK 3"}] ';

let parsStr = JSON.parse(str)

parsStr.filter((e) => {
    if (e.name === germanCars[1] || e.car === germanCars[0]) {
        germanArr.push(e)
    }
    if (e.name === japanCars[1] || e.car === japanCars[0]) {
        japanArr.push(e)
    }
})

let germanCarsString = JSON.stringify(germanArr);
let japanCarsString = JSON.stringify(japanArr);

console.log(germanCarsString)
console.log(japanCarsString)


//--------------------------------------------------------------------------------------------------
// Вариант 2
// let germanArr = [];
// let japanArr = [];
// let germanCars = ["BMW", "Volkswagen"]
// let japanCars = ["Honda", "Nissan"]

// let str = ' [ {"car": "BMW", "model": "5-series e39"}, {"car": "Honda", "model":  "Civic (5G)"}, {"name": "Nissan", "model": "Silvia (S14)"}, {"name": "Volkswagen", "model": "Golf MK 3"}] ';

// let parsStr = JSON.parse(str)


// for (key in parsStr) {
//     if (parsStr[key].car === germanCars[0] || parsStr[key].name === germanCars[1]) {
//         germanArr.push(parsStr[key])
//     }
//     if (parsStr[key].car === japanCars[0] || parsStr[key].name === japanCars[1]) {
//         japanArr.push(parsStr[key])
//     }
// }
// let germanCarsString = JSON.stringify(germanArr)
// let japanCarsString = JSON.stringify(japanArr)
// console.log('German', germanCarsString)
// console.log('Japan', japanCarsString)
