class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  
  
  isSquare(){
    if (this.length === this.width){
      return true
    } else {
      return "Nobody loves you"
    }
  }
  area(){
    return this.length * this.width
  }
  perimeter(){
    return (this.length + this.width) * 2
  }
}
const square = new Rectangle(2,2);
console.log(square.isSquare())
console.log(square.area());
console.log(square.perimeter())
class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
isEquilateral(){
  if(this.sideA === this.sideB && this.sideB=== this.sideC){
    return true 
  } else {
    return "You freak"
  }
}

isIsoceles(){

  if(this.sideA === this.sideB && this.sideA !== this.sideC) {
    return true
  } else if (this.sideA !== this.sideB && this.sideA === this.sideC){
    return true
  } else if (this.sideB !== this.sideA && this.sideB === this.sideC){
    return true
  } else {
    return false
  }
}

area(){
const semi = (this.sideA + this.sideB + this.sideC) / 2;
const area = Math.sqrt(
semi * (semi - this.sideA) * (semi - this.sideB) * (semi - this.sideC)
)
return area
}

isObtuse(){
  if (this.isEquilateral() === true || this.isIsoceles() === true){
    return false
  } else {
    return true
  }
}

}

const equilateral = new Triangle(3,3,3)
const isoceles = new Triangle(2,2,4)
const obtuse = new Triangle(2,3,6)
console.log(equilateral.isEquilateral())

console.log(isoceles.isIsoceles())
console.log(equilateral.area())
console.log(obtuse.isObtuse())
class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

length(){
  return (Math.sqrt(((this.x2 - this.x1) ** 2) + ((this.y2 - this.y1) ** 2)))
}

}
const line = new LineSegment(1,5,2,3);
console.log(line.length())

class Shape {
  constructor(sides, color){
    this.sides = sides;
    this.color = color;
  }

}

class Pentagon extends Shape {
  constructor(sides, color, sentient = true){
    super(sides, color);
    this.sentient;
  }
}

const pent = new Pentagon(5, "green", false)
console.log(pent)
// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}