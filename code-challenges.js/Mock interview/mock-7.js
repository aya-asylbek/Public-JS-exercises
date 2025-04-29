//console.log("Hello!");
// Create a function that returns true if all parameters are truthy, and false otherwise.

// Examples
// 1.allTruthy(true, true, true) ➞ true

// allTruthy(true, false, true) ➞ false

// allTruthy(5, 4, 3, 2, 1, 0) ➞ false

// allTruthy(1) ➞ true

//Pseudocode 
//Create a function -> return a true (if params === truthy)
//return a false ->>>  if not 
function allTruthy (...args){
 
    //every(args)
    return  args.every ((a)=> a)

}
console.log(allTruthy(5, 4, 3, 2, 1, 0));
console.log(allTruthy(true, true, true));
console.log(allTruthy(true, false, true));
console.log(allTruthy(1));

