//console.log("Hello world");In this exercise, you're going to decompress a compressed string.

//Your input is a compressed string of the format number[string] and the decompressed output form should be the string written number times. For example:

//The input

//3[abc]4[ab]c

//Would be output as

//abcabcabcababababc

//Pseudocode
//create a function 
//name for the function stringWrittenNumTimes
//input ===> 3[abc]4[ab]c =======>>>>> 3 * [abc] ====>>> abcabcabc =====>>> 4 [ab] + c 
//in output I want to see this ====>>> abcabcabcababababc
//

function stringWrittenNumTimes(str){
//let str = " ";
//let count = str.split(' ');
//console.log(str[0]);
let newStr = str.substring(2,5);
console.log(newStr);
let finalOutputExpected = str.repeat(3);
console.log(finalOutputExpected);
//return str.substring(2,5).repeat(3);
finalOutputExpected = newStr.repeat(3);
return finalOutputExpected;



for (let i = 0 ;i < str.length;i++){
    //console.log(i);
    //console.log('test');
    //return - do not return cause it will stop running loop
    //str;

}
return str;
}
console.log(stringWrittenNumTimes("3[abc]"));//---->>>  "3[abc]" 3 =[0]; [=[1]; a =[2];b = [3] c=[4] ;]=[5] === 

