//Assuming square, not creating new matrix 
/*
// counter clockwise 
function rotateMatrix(matrix, n, layer){
  if (!layer) layer = 0; 
    if (!n) n = matrix[0].length; 
  var x = layer;  
  var maxlayer = Math.floor(n / 2); 
    //console.log(layer, n, x, maxlayer);
  while (layer < maxlayer){
    while (x < n-1-layer){
      var temp = matrix[x][layer];
      var temp1 = matrix[n-1-layer][x];
      var temp2 = matrix[n-1-x][n-1-layer];
      var temp3 = matrix[layer][n-1-x];
      console.log(temp, temp1, temp2, temp3);
      matrix[x][layer] = temp3;
      matrix[n-1-layer][x] = temp; 
      matrix[n-1-x][n-1-layer] = temp1; 
      matrix[layer][n-1-x] = temp2;
            x++; 
    }
    layer++; 
  }
}

function printMatrix(matrix){
  for(var i = 0; i < matrix[0].length; i++)
    console.log(matrix[i]);
  
    
}

var matrix = [[1, 2],[3, 4]];
//var matrix = [[1, 3],[2, 4]];
//console.log(matrix);
printMatrix(matrix)
rotateMatrix(matrix);
//console.log(matrix);
printMatrix(matrix)

*/











// clockwise 
function rotateMatrix(matrix, n, layer){
  if (!layer) layer = 0; 
    if (!n) n = matrix[0].length; 
  var x = layer;  
  var maxlayer = Math.floor(n / 2); 
    //console.log(layer, n, x, maxlayer);
  while (layer < maxlayer){
    while (x < n-1-layer){
      var temp = matrix[layer][x];
      var temp1 = matrix[x][n-1-layer];
      var temp2 = matrix[n-1-layer][n-1-x];
      var temp3 = matrix[n-1-x][layer];
      console.log(temp, temp1, temp2, temp3);
      matrix[x][layer] = temp3;
      matrix[x][n-1-layer] = temp; 
      matrix[n-1-layer][n-1-x] = temp1; 
      matrix[n-1-x][layer] = temp2;
            x++; 
    }
    layer++; 
  }
}

function printMatrix(matrix){
  for(var i = 0; i < matrix[0].length; i++)
    console.log(matrix[i]);
  
    
}

var matrix = [[1, 2],[3, 4]];
//var matrix = [[1, 3],[2, 4]];
//console.log(matrix);
printMatrix(matrix)
rotateMatrix(matrix);
//console.log(matrix);
printMatrix(matrix)