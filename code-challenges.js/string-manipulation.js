//You are given a string inputStr containing lowercase letters and a target substring targetStr.
//  Your task is to implement a function findTargetIndex(inputStr, targetStr) that returns the starting index of the first occurrence of targetStr 
// in inputStr. If targetStr is not found in inputStr, the function should return -1.

//Input:
//inputStr (1 <= inputStr.length <= 1000): A string containing only lowercase letters.
//targetStr (1 <= targetStr.length <= 100): A substring to search for in inputStr.

//Output:
//Return the starting index of the first occurrence of targetStr in inputStr.
//If targetStr is not found in inputStr, return -1.


//Examples:
//console.log(findTargetIndex("hello world", "lo"));  // Output: 3
//console.log(findTargetIndex("programming", "abc"));  // Output: -1
//console.log(findTargetIndex("javascript", "script"));  // Output: 4
//console.log(findTargetIndex("challenge", "len"));  // Output: -1

// 1.create a function with the name findTargetIndex 
//2. Arg === (inputStr, targetStr)
//3. Return strating index from targetStr in inputStr
//4. If targetStr in inputStr , function should return === -1.
//5.sample ==== hello world , lo === h[0],e[1],l[2],l[3] === answer will be 3;

function findTargetIndex(inputStr,targetStr){
    return inputStr.indexOf(targetStr);
}
console.log(findTargetIndex("hello world", "lo"));  // Output: 3
console.log(findTargetIndex("programming", "abc"));  // Output: -1
console.log(findTargetIndex("javascript", "script"));  // Output: 4
console.log(findTargetIndex("challenge", "len"));  // Output: -1 (In my code challenge the output is 4 and is not -1 , 
// why,cause c[0],h[1],a[2],l[3, and l[4]=len starts with index 4)

