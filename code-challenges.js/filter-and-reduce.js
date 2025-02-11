/*

Task 1 - Using filter to Extract Specific Elements
Write a JavaScript function that uses the filter method to extract all the numbers greater than 10 from an array.

const arrayNums = [5, 10, 12, 3, 18, 130, 44];
"
Task 2 - Using reduce to Calculate the Sum of Numbers
Write a JavaScript function that uses the reduce method to calculate the sum of all numbers in an array.

function sumNumbers(){}

Task 3 - Create an Array of Unique Categories for a Restaurant Menu (reduce)
Extract unique categories from a list of menu items.

const menuItems = [
 { name: 'Pizza', category: 'Main Dish' },
 { name: 'Salad', category: 'Main Dish' },
 { name: 'Pasta', category: 'Main Dish' },
 { name: 'Caesar Salad', category: 'Salad' },
 { name: 'Greek Salad', category: 'Salad' },
];


Task 4 - Count Coffee Shops by Neighborhood (filter)
Imagine you have collected data on various coffee shops in Chicago, including their neighborhoods. You want to analyze this data to understand the distribution of coffee shops across different neighborhoods.

const coffeeShops = [
 { name: 'Cafe A', neighborhood: 'Rogers Park' },
 { name: 'Cafe B', neighborhood: 'Wicker Park' },
 { name: 'Cafe C', neighborhood: 'Rogers Park' },
 { name: 'Cafe D', neighborhood: 'Wicker Park' },
 { name: 'Cafe E', neighborhood: 'Rogers Park' },
];


*/
//Pseudocode 
//Task 1.
//1.Write a function with the name allNumsGreaterThenTen =====  function allNumsGreaterThenTen(){}
//2.Use filter method to extract all numbers > 10 from const arrayNums = [5, 10, 12, 3, 18, 130, 44];====> 
//3.Return all numbers > 10 from arrayNums[] ===> expect output for Aya=>should look like this [12,18,130,44] ----> 4 numbers in []

//arr
function allNumsGreaterThenTen(arrayNums){// array from where we are going to filter 
    return arrayNums.filter(arrayNums => arrayNums > 10);//method filter
 } 
    const arrayNums = [5, 10, 12, 3, 18, 130, 44];
const result = allNumsGreaterThenTen(arrayNums);//return [12,18,130,44]
console.log(result);