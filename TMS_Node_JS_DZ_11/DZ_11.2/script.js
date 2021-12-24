function HouseBuilder(width, length, numberOfFloors, totalArea) {
    this.width = width;
    this.length = length;
    this.numberOfFloors = numberOfFloors;
    this.totalArea = totalArea;
}

HouseBuilder.prototype.calcArea = function () {
    console.log(`Area: ${this.width * this.length}`)
    this.totalArea = this.width * this.length
};

firstHouse = new HouseBuilder(200, 200, 2,);
secondHouse = new HouseBuilder(150, 170, 5,);

firstHouse.calcArea()
secondHouse.calcArea()

console.log(firstHouse)
console.log(secondHouse)