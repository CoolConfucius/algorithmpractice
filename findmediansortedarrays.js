var findMedianSortedArrays = function(nums1, nums2) {
  var sumlengths = nums1.length + nums2.length; 
  console.log(sumlengths);
  var even = sumlengths%2 === 0; 


  // var k = 1; 
  var i = 0;   
  var j = 0;
  var newarray = [];
  var stop = even ? sumlengths / 2 + 1: Math.floor(sumlengths / 2) + 1; 
  console.log(even);
  console.log(stop);
  while(i < nums1.length || j < nums2.length){
    if (nums1[i] < nums2[j]) {
      newarray.push(nums1[i]);
      // console.log(newarray);
      i++; 
    } else {
      newarray.push(nums2[j]);
      // console.log(newarray);
      j++; 
    }



    if(newarray.length >= stop){

      if (even) {
        console.log(newarray);

        return ((newarray[stop -1] + newarray[stop-2])/2);
      } else {
        console.log(newarray);
        return newarray[stop -1];
      }

    }
  }
};

// var nums1 = [1, 3];
// var nums2 = [2]; 

var nums1 = [1, 2];
var nums2 = [3, 4];

console.log(findMedianSortedArrays(nums1, nums2));