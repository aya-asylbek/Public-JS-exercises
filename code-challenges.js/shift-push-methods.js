/*

Write a function that takes an array of strings as input and returns a new array where the first element is moved to the end of the array. You must use both shift and push methods to achieve this.
You must use both shift and push methods to achieve this.
*/

//Pseudocode
//1.Write a function with the name arrOfStrings
//2.arr = [' ', ' ', ' '];
//3.return a new [] ===> [0] is moved to ehe end of the [];
//. use 2 methods === shift (removing the first element ) and push (add to the end )

//sample: arr["banana", "strawberry","lemon","watermelon"];
//output: ["strawberry","lemon","watermelon","banana"];

function arrOfStrings(arr){
let firstElement = arr.shift();//"banana" removed  as a first element in [];
arr.push(firstElement);
return arr;
}
let fruits = ["banana","strawberry", "lemon","watermelon"];
let arrMovedToEnd = arrOfStrings(fruits);
console.log(arrMovedToEnd);