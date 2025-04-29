//
//Create a function to find NaN in an array of numbers.
//  The return value should be the index where NaN is found. 
// If NaN is not found in the array, then return -1.

//Examples
// findNaN([1, 2, NaN]) ➞ 2  // Aya notes: --->>>> [1  ==== index [0]] ; 2 === [1]; NaN ===[2]

// findNaN([NaN, 1, 2, 3, 4]) ➞ 0 // Aya notes: output will be [0] cause starts from 0

// findNaN([0, 1, 2, 3, 4]) ➞ -1

//Pseudocode 
//1.function (){} ---->>>> to find a Nan in [] of numbers ;
//2.return value === [index ]
//3.return -1 if Nun is not found in [];

function findNaN(value) {
    //let i = [];
    for (let i = 0; i < value.length; i++) {
        //console.log(i);
        if (value[i] === NaN) {
            return i;
        }
    }
    return -1;
}

console.log(findNaN([1, 2, NaN]));