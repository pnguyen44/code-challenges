/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

 class Polygon {
     constructor(arr) {
         this.arr = arr;
     };
     perimeter() {
        return this.arr.reduce(function (acc, curr) {
             return acc + curr;
         })
     }
 }

 const rectangle = new Polygon([10, 20, 10, 20]);
 const square = new Polygon([10, 10, 10, 10]);
 const pentagon = new Polygon([10, 20, 30, 40, 43]);

 console.log(rectangle.perimeter()); // 60
 console.log(square.perimeter()); //40
 console.log(pentagon.perimeter()); //143
