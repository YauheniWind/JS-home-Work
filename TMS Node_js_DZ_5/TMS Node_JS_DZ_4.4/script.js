userVasya = {
    name: 'Vasya',
    transactions: [10, 20, -5, -8],
    sum: 10
};

userPetiya = {
    name: 'Petiya',
    transactions: [123, 3, 15, 68],
    sum: 10
};

userValera = {
    name: 'Valera',
    transactions: [133, 1313, 59, 2],
}

console.everyUser = function (prifix, users) {
    for (let i = 0; i < users.length; i++) {
        console.log(prifix + '' + users[i].name)
    };
};


console.everyUser('Имя пользвателя: ', [userVasya, userPetiya, userValera]);
