
// merge sort

var arr = [2, 4, 1, 6, 8, 5, 3, 7];
console.log(arr);

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

//console.log(merge(la, ra, arr));


function mergesort(arr){
  if(arr.length <= 1) return arr; 
  if(arr.length > 1){
    var la = [], ra = []; 
    for(var i = 0; i < Math.floor(arr.length / 2); i++){
      la.push(arr[i]);
    }
    for(var j = Math.floor(arr.length / 2); j < arr.length; j++){
      ra.push(arr[j]);
    }
    
    return merge(mergesort(la), mergesort(ra), arr);
    
  }
}

console.log(mergesort(arr));

