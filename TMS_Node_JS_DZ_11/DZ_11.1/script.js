function HouseBuilder(width, length, numberOfFloors) {
    this.width = width;
    this.length = length;
    this.numberOfFloors = numberOfFloors;
}

firstHouse = new HouseBuilder(200, 200, 2);
secondHouse = new HouseBuilder(150, 170, 5);
console.log(firstHouse, secondHouse);