class Shape {
  constructor(sides, color){
    this.sides = sides;
    this.color = color;
  }
}
class Rectangle extends Shape{
  constructor(length, width) {
    super(4, "red");
    this.length = length;
    this.width = width;
  }
  isSquare() {
    if (this.length === this.width) {
      return true;
    }
    else {
      return false;
    }
  }
  area(){
    return (this.length * this.width);
  }
  perimeter() {
    return (2 * this.length) + (2 * this.width);
  }
}
const square = new Rectangle(5,5);
console.log(square)
console.log(square.isSquare())
console.log(square.area())
console.log(square.perimeter())
class Triangle extends Shape{
  constructor(sideA, sideB, sideC){
    super(3, "blue");
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral() {
    if (this.sideA === this.sideB && this.sideB === this.sideC) {
      return true
    }
    else {
      return false
    }
  }
  isIsosceles() {
    if (this.isEquilateral() === true) {
      return false
    }
    else if (this.sideA === this.sideB || this.sideB === this.sideC || this.sideC === this.sideA){
    if (this.sideA === this.sideB || this.sideB === this.sideC || this.sideC === this.sideA){
    return true
    }
    else {
      return false
    }
  }
  area(){
    let s = (this.sideA + this.sideB + this.sideC) / 2;
    return (Math.sqrt((s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC))));
  }
  isObtuse(){
    if ((this.sideA ** 2) + (this.sideB ** 2) < (this.sideC ** 2)) {
      return true;
    } else if ((this.sideC ** 2) + (this.sideB ** 2) < (this.sideA ** 2)){
      return true;
    } else if ((this.sideA ** 2) + (this.sideC ** 2) < (this.sideA ** 2)) {
      return true;
    } else {
      return false;
    }
  }
}

const myTriangle = new Triangle(3,3,3);
const myTriangle = new Triangle(3,3,5);
console.log(myTriangle)
console.log(myTriangle.isEquilateral())
console.log(myTriangle.isIsosceles())