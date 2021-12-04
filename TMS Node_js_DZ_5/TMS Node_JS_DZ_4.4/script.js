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

console.everyUser = function (prifix, userName) {
    for (let i = 0; i < userName.length; i++) {
        userName[i].userName
        console.log(prifix + '' + userName[i])
    };
};


console.everyUser('Имя пользвателя: ', [userVasya.name, userPetiya.name, userValera.name]);
