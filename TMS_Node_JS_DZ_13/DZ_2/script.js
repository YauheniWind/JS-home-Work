let div = document.createElement('div')
let body = document.body
body.appendChild(div)

const users = [
    { name: 'Ivan', age: 18 },
    { name: 'Petr', age: 12 },
    { name: 'Sidor', age: 25 },
    { name: 'Pavel', age: 16 },
    { name: 'Sasha', age: 29 }
];

let generateUserCard = (name, age) => {
    return `
        <div class="userCard">
            <h2>${name} ${age}</h2>
        </div>`
};

let usersDiv = document.createElement('div');
usersDiv.classList.add('usersInfo');

usersDiv.style.fontFamily = 'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', 'sans - serif';
usersDiv.style.background = 'darkorange';
usersDiv.style.width = '150px';


let usersHTML = users.map(user => {
    return generateUserCard(user.name, user.age);
}).join('');

usersDiv.innerHTML = usersHTML;

div.insertAdjacentElement('beforebegin', usersDiv)

console.log(usersDiv)

