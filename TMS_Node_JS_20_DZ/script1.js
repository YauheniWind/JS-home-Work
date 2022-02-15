let germanArr = [];
let japanArr = [];
let germanCars = ["BMW", "Volkswagen"]
let japanCars = ["Honda", "Nissan"]

let str = ' [ {"car": "BMW", "model": "5-series e39"}, {"car": "Honda", "model":  "Civic (5G)"}, {"car": "Nissan", "model": "Silvia (S14)"}, {"car": "Volkswagen", "model": "Golf MK 3"}] ';

let parsStr = JSON.parse(str)

germanArr = parsStr.filter((e) => germanCars.includes(e.car))

japanArr = parsStr.filter((e) => japanCars.includes(e.car))

let germanCarsString = JSON.stringify(germanArr);
let japanCarsString = JSON.stringify(japanArr);


let setGermanStorage = localStorage.setItem('germanCars', germanCarsString);
let setJapanStorage = localStorage.setItem('japanCars', japanCarsString);

let getGermanStorage = localStorage.getItem('germanCars');
let getJapanStorage = localStorage.getItem('japanCars');

console.log('German', germanCarsString, 'Japan', getJapanStorage)

let div = document.createElement('div');
div.classList.add('wrapper');

let body = document.body;
body.appendChild(div)

let header = document.createElement('h1');
header.textContent = 'Cars list';
div.insertAdjacentElement('beforebegin', header);

function createGermanCard(car, model) {
    return `
        <h2><span>German car</span></h2>
        <ul class="autoCars">
            <li><h3>Brand: ${car}, model: ${model}</h3></li>
        </ul>
    `
}

function createJapanCard(car, model) {
    return `
        <h2><span>Japan car</span></h2>
        <ul class="autoCars">
            <li><h3>Brand: ${car}, model: ${model}</h3></li>
        </ul>
    `
}

let germanCarsDiv = document.createElement('div');
germanCarsDiv.classList.add('germanAuto');

let japanCarsDiv = document.createElement('div');
japanCarsDiv.classList.add('japanAuto');

let germanHtml = JSON.parse(getGermanStorage).map(e => {
    return createGermanCard(e.car, e.model)
}).join('')

let japanHtml = JSON.parse(getJapanStorage).map(e => {
    return createJapanCard(e.car, e.model)
}).join('')

germanCarsDiv.innerHTML = germanHtml;
japanCarsDiv.innerHTML = japanHtml

div.insertAdjacentElement('beforebegin', germanCarsDiv)
div.insertAdjacentElement('beforebegin', japanCarsDiv)

console.log(germanCarsDiv)
console.log(japanCarsDiv)