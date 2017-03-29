// var board = ['', '', 'o', '', 'x', '', '', '', ''];
// var board = ['', 'o', 'o', 'x', 'x', 'o', 'x', 'x', 'o'];
var board = ['x', '', '', '', 'x', 'o', '', 'o', 'x'];
// var board = ['x', 'o', 'o', 'o', 'x', 'x', 'x', 'x', 'o'];

// 0: Notover; 1: Xwins; 2: Owins; 3: Draw; 


var messages = {
  notover: 0,
  xwins: 1,
  owins: 2,
  draw: 3
};

// var notover = 0; 
// var xwins = 1; 
// var owins = 2; 
// var draw = 3; 

// typedef 

function tttstate(array){
  // var message = '';
  // this.notover = true; 
  // this.xwins = false; 
  // this.owins = false; 
  // this.draw = false; 
  // this.notover = "Not Over"; 
  // this.xwins = "X wins"; 
  // this.owins = "O wins"; 
  // this.draw = "Draw"; 

  
  

  var status = messages.notover;

  // if (checkwin('x', array)) {
  //   status = messages.xwins;
  // };
  // if (checkwin('o', array)) {
  //   status = messages.owins;
  // };
  if (checkallsets('x', array)) {
    status = messages.xwins;
  };
  if (checkallsets('o', array)) {
    status = messages.owins;
  };
  if (checkdraw(array)) {
    status = messages.draw;
  };


  return status; 
}

function checknotover(array){
  var xcount = 0; 
  for (var i = 0; i < array.length; i++) {
    if(array[i] === 'x'){
      xcount++; 
    }
  };
  if (xcount < 3) {
    return true; 
  };
  return false; 

}


console.log(tttstate(board));


// win conditions: 

function checkrows(mark, array, row){
  if ((array[0+(row*3)] === mark && array[1+(row*3)] === mark ) && array[2+(row*3)] === mark )  {
    return true; 
  };
}

// function checkrow0(mark, array){
//   if ((array[0] === mark && array[1] === mark ) && array[2] === mark )  {
//     return true; 
//   };
// }

// function checkrow1(mark, array){
//   if ((array[3] === mark && array[4] === mark ) && array[5] === mark )  {
//     return true; 
//   };
// }

// function checkrow2(mark, array){
//   if ((array[6] === mark && array[7] === mark ) && array[8] === mark )  {
//     return true; 
//   };
// }

function checkcols(mark, array, col){
  if ((array[0+col] === mark && array[3+col] === mark ) && array[6+col] === mark )  {
    return true; 
  };
}

// function checkcol0(mark, array){
//   if ((array[0] === mark && array[3] === mark ) && array[6] === mark )  {
//     return true; 
//   };
// }

// function checkcol1(mark, array){
//   if ((array[1] === mark && array[4] === mark ) && array[7] === mark )  {
//     return true; 
//   };
// }

// function checkcol2(mark, array){
//   if ((array[2] === mark && array[5] === mark ) && array[8] === mark )  {
//     return true; 
//   };
// }

function checkdiag0(mark, array){
  if ((array[0] === mark && array[4] === mark ) && array[8] === mark )  {
    return true; 
  };
}

function checkdiag1(mark, array){
  if ((array[2] === mark && array[4] === mark ) && array[6] === mark )  {
    return true; 
  };
}

function checkset(mark, array, first, second, third){
  if ((array[first] === mark && array[second] === mark ) && array[third] === mark )  {
    return true; 
  };
}

function checkallsets(mark, array){

  for (var i = 0; i < 3; i++) {
    if (checkset(mark, array, (i*3), (i*3)+1, (i*3)+2) ) return true;
  };

  for (var i = 0; i < 3; i++) {
    if (checkset(mark, array, (i), (i)+3, (i)+6) ) return true;
  };

  // var obj = {
  //   row1

  // }
  var matrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (var i = 0; i < matrix.length; i++) {
    if (checkset(mark, array), matrix[i][0], matrix[i][1], matrix[i][2]) return true;
  };



  // if (checkset(mark, array, 0, 1, 2)) return true;
  // if (checkset(mark, array, 3, 4, 5)) return true;
  // if (checkset(mark, array, 6, 7, 8)) return true;
  // if (checkset(mark, array, 0, 3, 6)) return true;
  // if (checkset(mark, array, 1, 4, 7)) return true;
  // if (checkset(mark, array, 2, 5, 8)) return true;
  if (checkset(mark, array, 0, 4, 8)) return true;
  if (checkset(mark, array, 2, 4, 6)) return true;
  return false; 
}


function checkwin(mark, array){
  // if (checkrow0(mark, array)) return true;
  // if (checkrow1(mark, array)) return true;
  // if (checkrow2(mark, array)) return true;
  if (checkrows(mark, array, 0)) return true;
  if (checkrows(mark, array, 1)) return true;
  if (checkrows(mark, array, 2)) return true;
  // if (checkcol0(mark, array)) return true;
  // if (checkcol1(mark, array)) return true;
  // if (checkcol2(mark, array)) return true;
  if (checkcols(mark, array, 0)) return true;
  if (checkcols(mark, array, 1)) return true;
  if (checkcols(mark, array, 2)) return true;
  if (checkdiag0(mark, array)) return true;
  if (checkdiag1(mark, array)) return true;
  return false; 
}

function checkdraw(array){
  for (var i = 0; i < array.length; i++) {
    if(array[i] === '')
      return false; 
  };
  return true; 
}

