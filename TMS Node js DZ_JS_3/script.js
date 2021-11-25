'use strict';

let user = {
    name: prompt('Enter your name:'),
    surname: prompt('Enter your surname:'),
    age: +prompt('Enter your age:'),
    city: prompt('Enter your location:'),
    isDriver: confirm('are you a driver?')
};

if (user.isDriver == true) {
    let message = `Hi ${user.name} ${user.surname}, you have ${user.age} and you live in ${user.city}, you a driver`;
    console.log(message);
} else {
    let message = `Hi ${user.name} ${user.surname}, you have ${user.age} and you live in ${user.city}, you don\`t have licence`;
    console.log(message);
};

console.log(user);
console.log(typeof (user));