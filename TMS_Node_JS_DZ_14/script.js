let message = document.querySelector('.message');
let userName = document.querySelector('#nameUser');
let userAge = document.querySelector('#ageUser');
let buttonAdd = document.querySelector('.add');
let todo = document.querySelector('.todo');

let users = [];

window.onload = function () {
    buttonAdd.addEventListener('click', function () {
        userAdd();
        out()
        localStorage.setItem('todo', JSON.stringify(users));
        userName.value = '';
        userAge.value = '';
    });

    if (localStorage.getItem('todo').length > 0) {
        users = JSON.parse(localStorage.getItem('todo'));
        console.log(users)
        out();
    };
};
function userAdd() {
    let nameValue = userName.value;
    let ageValue = userAge.value;
    let newObj = {}
    if (userName.value === '' || userAge.value === '') {
        console.log('No data')
        return null
    } else {
        newObj = { name: nameValue, age: ageValue };
        let i = users.length;
        users[i] = newObj;
    }
};

function out() {
    let out = '';
    for (let key in users) {
        out += '<br>' + 'Name:' + ' ' + users[key].name + '. ' + 'age:' + ' ' + users[key].age + '<br>'
    };
    todo.innerHTML = out;
};