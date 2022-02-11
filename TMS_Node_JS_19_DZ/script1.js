let germanArr = [];
let japanArr = [];
let germanCars = ["BMW", "Volkswagen"]
let japanCars = ["Honda", "Nissan"]

let str = ' [ {"car": "BMW", "model": "5-series e39"}, {"car": "Honda", "model":  "Civic (5G)"}, {"car": "Nissan", "model": "Silvia (S14)"}, {"car": "Volkswagen", "model": "Golf MK 3"}] ';

let parsStr = JSON.parse(str)

germanArr = parsStr.filter((e) => germanCars.includes(e.car))

japanArr = parsStr.filter((e) => japanCars.includes(e.car))

let germanCarsString = JSON.stringify(germanArr);
let japanCarsString = JSON.stringify(japanArr);

console.log(germanCarsString)
console.log(japanCarsString)