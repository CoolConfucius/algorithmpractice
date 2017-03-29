
// odds first evens later 

// var array = [0, 1, 2, 3, 4, 5];
// var array = [];
// var array = [0];
// var array = [0, 2, 4];
// var array = [1, 3, 5];
// var array = [0, -1, -2, -3, -4, -5];
// var array = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];


function randomarray(){
  var arr = []; 
  var length = Math.floor(Math.random()*20);
  for (var i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random()*20));
  };
  return arr; 
}

var array = randomarray(); 


function oddeven(array){
  var i = 0; 
  var j = array.length - 1; 
  while (i < j){
    if (checkodd(array[i])) {
      i++; 
    } else {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp; 
      j--; 
    }
  }
}

function checkodd(int){
  if (int % 2 === 0) {
    return false; 
  } else {
    return true; 
  }
}

console.log(array);
oddeven(array);
console.log(array);