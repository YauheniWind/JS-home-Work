let age = +prompt('Enter your first age:');

if (isNaN(age) || age <= 0) {
    console.log('uncorrect');
} else {
    console.log(`Hi your age is ${age}`)
};

let years = +prompt('Enter your second age:');

isNaN(years) ? console.log('uncorrect') : years <= 0 ? console.log('uncorrect') : console.log(`Hi your age is ${years}`);