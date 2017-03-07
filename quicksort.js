// Quick Sort 

var arr = [7, 2, 1, 6, 8, 5, 3, 4];

function partition(arr, start, end){
  if(!start) start = 0; 
  if(!end) end = arr.length - 1; 
  var pivot = arr[end];
  var pindex = start; 
  for(var i = start; i < end; i++){
    if(arr[i] <= pivot){
      var temp = arr[i];
      arr[i] = arr[pindex];
      arr[pindex] = temp; 
      pindex++;
    }
  }

  arr[end] = arr[pindex];
  arr[pindex] = pivot; 
  return pindex;
}

function quicksort(arr, start, end){
  //if(start < end) return; 
  if(arr.length <= 1) return arr; 
  if(!start) start = 0; 
  if(!end) end = arr.length - 1; 
  if(start < end){
    var pindex = partition(arr, start, end); 
    quicksort(arr, start, pindex-1); 
    quicksort(arr, pindex+1, end);   
  }
}

console.log(arr);
//partition(arr);
quicksort(arr);
console.log(arr); 

