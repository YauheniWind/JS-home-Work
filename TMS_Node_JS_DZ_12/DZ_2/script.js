class House {
    constructor(length, width, floors) {
        this.length = length;
        this.width = width;
        this.floors = floors;
    };

    static sortBuyFloors(arr) {
        arr.sort((a, b) => a.length - b.length)
    };
};

class Skyscraper extends House {
    constructor(length, width, floors, offices) {
        super(length, width, floors);
        this.offices = offices;
    };

};

let firstSkyscraper = new Skyscraper(550, 10, 5, 3);
let secondSkyscraper = new Skyscraper(200, 25, 10, 5);
let thirdSkyscraper = new Skyscraper(300, 200, 50, 450);

let skyscrapers = [firstSkyscraper, secondSkyscraper, thirdSkyscraper]
console.log(skyscrapers)
Skyscraper.sortBuyFloors(skyscrapers)
console.log(skyscrapers)



