// rotate matrix

//var matrix = [[1, 2],[3, 4]];
var matrix = [[1, 2, 3],[4, 5, 6], [7, 8, 9]];

function printmatrix(matrix){
  matrix.forEach(function(array){
    console.log(array);
  })
}

printmatrix(matrix);

function rotatematrix(matrix){
  var layers = Math.floor(matrix.length / 2); 
  var currentlayer = 0;
  console.log("layer: ", currentlayer, " maxlayers: ", layers);
  while(currentlayer < layers){
    rotatelayer(matrix, currentlayer);
    currentlayer++; 
  }
}

function rotatelayer(matrix, layer){
  var x = layer;
  while(x < matrix.length - layer - 1) {
    console.log("x: ", x);
    rotate(matrix, layer, x);
    x++; 
  }
}

function rotate(matrix, layer, x){
  var end = matrix.length - layer - 1; 
  var temp0 = matrix[layer][layer+x];
  var temp1 = matrix[layer+x][end];
  var temp2 = matrix[end][end-x];
  var temp3 = matrix[end-x][layer];
  matrix[layer][layer+x] = temp3;
  matrix[layer+x][end] = temp0;
  matrix[end][end-x] = temp1;
  matrix[end-x][layer] = temp2;
}

rotatematrix(matrix);
printmatrix(matrix);
