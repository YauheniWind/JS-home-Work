const users = [{ name: 'Ivan', age: 18 },
{ name: 'Petr', age: 12 },
{ name: 'Sidor', age: 25 },
{ name: 'Pavel', age: 16 },
{ name: 'Sasha', age: 29 }];

users.sort((a, b) => (a.age - b.age));

let sumYung = users.reduce(function (sum, user) {
    if (user.age < 18) {
        sum += user.age
    }
    return sum
}, 0);

console.log(sumYung);