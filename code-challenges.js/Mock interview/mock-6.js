//console.log("Hello");
//Given an input string, reverse the string word by word, the first word will be the last, and so on.

// Examples
// reverseWords(" the sky is blue") ➞ "blue is sky the" --- trim--;;__> [the][sky][is][blue]

// reverseWords("hello   world!  ") ➞ "world! hello" ---- trim

// reverseWords("a good example") ➞ "example good a" ---trim
//Pseudocode 
//1.work with fucntion reverseWords 
//2.reverse string so the first word  will be the last  --->>> we can use method arrays []
//3.we have existing emtpty spaces , we will use trim method to remove then where is needed

function reverseWords(str){
    let words = str.split(' ');
    let countWords = [];
    for (let i = words.length-1;i>= 0;i--){
    console.log(words[i]);
     countWords = words[i];
    }
   return countWords;
    
   
}
//before ' ' = [0] since we remove it 
//i>=0 why , becayse the becomes out [0]
(reverseWords("the sky is blue"));//the ===[0], space ===[1],
//join them blue is sky the return and make this words as atring returm as "blue is sky the"