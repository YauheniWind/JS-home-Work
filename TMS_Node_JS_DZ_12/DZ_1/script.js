class CreateUsers {

    constructor(first_name, seconde_name, age, city) {
        this.first_name = first_name;
        this.seconde_name = seconde_name;
        this.age = age;
        this.city = city;
    }

};

const user_one = new CreateUsers('Katka', 'Kiss', 24, 'Michalovce');

const user_two = new CreateUsers('Alexander', 'Kiss', 45, 'Trenchin');

function infoUserBind() {
    console.group(this.first_name, 'Bind Info: ')
    console.log(`Name is ${this.first_name} ${this.seconde_name}, age is ${this.age}, from ${this.city}`)
    console.groupEnd()
};

function infoUserCall() {
    console.group(this.first_name, 'Call Info: ')
    console.log(`Name is ${this.first_name} ${this.seconde_name}, age is ${this.age}, from ${this.city}`)
    console.groupEnd()
};

function infoUserApply() {
    console.group(this.first_name, 'Apply Info: ')
    console.log(`Name is ${this.first_name} ${this.seconde_name}, age is ${this.age}, from ${this.city}`)
    console.groupEnd()
}

// Bind - не запускается сразу
infoUserBind.bind(user_one)();
infoUserBind.bind(user_two)();

// Call - запускается сразу, передача дополнительных данных через запятую
infoUserCall.call(user_one);
infoUserCall.call(user_two);

// Apply - запускается сразу, передача дополнительных данных происходит через массив
infoUserApply.apply(user_one);
infoUserApply.apply(user_two);


// Object.prototype.isInfo = function () {
//     console.group(this.first_name, 'Info: ')
//     console.log(`Name is ${this.first_name} ${this.seconde_name}, age is ${this.age}, from ${this.city}`)
//     console.groupEnd()
// }