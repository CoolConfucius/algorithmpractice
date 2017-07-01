// built in methods

// function reverseString(str){
//   var splitstring = str.split("");
//   var reversearray = splitstring.reverse(); 
//   var joinarray = reversearray.join("");
//   return joinarray; 
// }

function reverseString(str){
  return str.split("").reverse().join(""); 
}

var rs = reverseString("hello"); 
var rs1 = reverseString("Howdy"); 
var rs2 = reverseString("Greetings from Earth"); 
console.log(rs);
console.log(rs1);
console.log(rs2);