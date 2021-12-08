class Shape{
 constructor(color){
  this.color = color;
 }
 drawShape(){
  console.log("Drawing Shape");
 }
 calculateArea(){
  console.log("Calculating area of your shape")
 }
}
module.exports = Shape;
