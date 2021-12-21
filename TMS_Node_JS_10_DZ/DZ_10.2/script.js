let user = { name: "Ivan", years: 19, car: "Subaru", telePhone: "iPhone", city: "Minsk" };

let { userName, userCar, ...userOtherInfo } = user

console.log(userName, userCar, userOtherInfo)