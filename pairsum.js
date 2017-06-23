// You are given an array of length 10 that includes within it integers between 1 and 99, not necessarily unique and in a random order (Actually, it can be of any length, but let’s just say 10 for this problem.). Your task is to develop an algorithm to determine if there exists a pair of numbers within the array that sum to 100.



function pairsum(array, target){
  var array = array; 
  console.log(array);
  quicksort(array); 
  // var array = mergesort(array);
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

// var arr = [-30, 0, 10, 1, 3, 2, 4, -5, 9];
// var arr = [30, 10, 1, 3, 2, 4, 5, 9];
// var arr = [-7, 2, 1, 6, 8, 5, 3, 4];
// var arr = [7, 2, 1, 6, 8, 5, 3, 4];
var arrtrue = [7, 2, 1, 6, 8, 5, 3, 4, 99, 20];
var arrfalse = [7, 2, 1, 6, 8, 5, 3, 4, 30, 20];

var target = 100; 
console.log(pairsum(arrtrue, target));
console.log(pairsum(arrfalse, target));

// Hash Table approach: 


function hashpairsum(array, target){
  var hash = {}; 
  for (var i = 0; i < array.length; i++) {
    var current = array[i]; 
    if (hash[current]) return true; 
    var difference = target - current; 
    hash[difference] = true; 
    console.log(hash);
  };
  return false; 
}

var arrtrue = [7, 2, 1, 6, 8, 5, 3, 4, 99, 20];
// var arrtrue = [99, 2, 1, 6, 8, 5, 3, 4, 99, 20];
var arrfalse = [7, 2, 1, 6, 8, 5, 3, 4, 30, 20];

console.log(hashpairsum(arrtrue, target));
// console.log(hashpairsum(arrfalse, target));


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