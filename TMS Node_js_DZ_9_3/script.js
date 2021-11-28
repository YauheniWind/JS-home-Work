let age = +prompt('Enter your first age:');

if (isNaN(age) || age <= 0) {
    console.log('Uncorrect');
} else if (age > 18) {
    console.log(`Wow, you\`re over 18 years old, your age is ${age}`);
} else {
    console.log(`Hi your age is ${age}`);
};

let age_switch = +prompt('Enter your second age:')

switch (true) {
    case isNaN(age_switch):
        console.log('Uncorrect');
        break;
    case age_switch <= 0:
        console.log('Uncorrect');
        break;
    case age_switch > 18:
        console.log(`Wow, you\`re over 18 years old, your age is ${age_switch}`);
        break;
    default:
        console.log(`Hi your age is ${age_switch}`);
        break;
};