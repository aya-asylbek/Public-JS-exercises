//console.log("Techtonica");
//console.log("Hello");
Create a function that moves all capital letters to the front of a word. Keep the original relative order of the upper and lower case letters the same.

Examples
capToFront("hApPy") ➞ "APhpy" ----->> "hApPy" --- h[0] , A[1], p[2], P[3], y[4] ___>A[1] switch to [0], P[3] switch to [1] 

capToFront("moveMENT") ➞ "MENTmove"

capToFront("shOrtCAKE") ➞ "OCAKEshrt"

//Pseudocode
// functio capToFront
//we could separate each letters first , and then use method /
//"hApPy"---- separate each letter [h],[A],[p],[P],[y]
//I could use substring method [A]to switch from [1] to [0]