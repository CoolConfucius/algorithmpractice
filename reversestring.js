// built in methods

// function reverseString(str){
//   var splitstring = str.split("");
//   var reversearray = splitstring.reverse(); 
//   var joinarray = reversearray.join("");
//   return joinarray; 
// }

// clean
// function reverseString(str){
//   return str.split("").reverse().join(""); 
// }


// for loop 
// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }

// recursion 
function reverseString(str){
  if (str === "") 
    return "";
  else 
    return reverseString(str.substring(1)) + str.charAt(0); 
}

var rs = reverseString("hello"); 
var rs1 = reverseString("Howdy"); 
var rs2 = reverseString("Greetings from Earth"); 
console.log(rs);
console.log(rs1);
console.log(rs2);