
function pairsum(array, target){
  var array = array; 
  console.log(array);
  // quicksort(array); 
  var array = mergesort(array);
  var start = 0; 
  var end = array.length - 1; 
  var sum; 
  while(start < end){
    sum = array[start] + array[end]; 
    if (sum === target) return true;
    if (sum < target) start++;
    if (sum > target) end--;
  }
  return false; 
}

var arr = [-30, 0, 10, 1, 3, 2, 4, -5, 9];
// var arr = [30, 10, 1, 3, 2, 4, 5, 9];
// var arr = [7, 2, 1, 6, 8, 5, 3, 4];
// var arr = [-7, 2, 1, 6, 8, 5, 3, 4];
var target = 10; 
console.log(pairsum(arr, target));

// Hash Table approach: 

var hash = {}; 





// Quick Sort: 

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

// Merge Sort: 

function merge(la, ra, arr){
  var i = 0, j = 0, k = 0; 
  while(i < la.length && j < ra.length){
    
    if(la[i] < ra[j]){
      arr[k] = la[i]; 
      k++; 
      i++; 
    } else if (ra[j] < la[i]){
      arr[k] = ra[j];
      k++;
      j++; 
    }
    if(i >= la.length){
      while(j < ra.length){
        arr[k] = ra[j];
        k++; 
        j++; 
      }
    }
    if(j >= ra.length){
      while(i < la.length){
        arr[k] = la[i];
        k++; 
        i++; 
      }
    }
    
  }
  return arr; 
}

function mergesort(arr){
  if(arr.length <= 1) return arr; 
  if(arr.length > 1){
    var mid = Math.floor(arr.length / 2);
    var la = [], ra = []; 
    for(var i = 0; i < mid; i++){
      la.push(arr[i]);
    }
    for(var j = mid; j < arr.length; j++){
      ra.push(arr[j]);
    }
    
    return merge(mergesort(la), mergesort(ra), arr);
    
  }
}