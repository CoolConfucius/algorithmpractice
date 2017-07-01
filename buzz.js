// Question 4:
// Given an unsorted int array, treat each element as the price of an egg for a particular time. Your objective is to maximize the profit for one business transaction by finding out the best time to buy an egg and the best time to sell the egg. You must purchase the egg first then be able to sell it (i.e. the index of purchase must by lesser than the index of sale)

// Input :  [4, 14, 12, 8 , 9 , 17]
// Output : 13

var maximize = function(array){
    var min = array[0]; 
    var max = array[0]; 
    var i = 0; 
    while(i < array.length){
        if(array[i] < min){
            min = array[i]; 
            max = array[i];
        }
        if(array[i] > max){
            max = array[i];
        }
        i++; 
    }
    return (max - min); 
}

var input = [20, 4, 14, 12, 8 , 9 , 17]; 

console.log(maximize(input)); 



var maximize = function(array){
    var min = array[0]; 
    var max = array[0]; 
    var difference = 0; 
    var maxdifference = 0; 
    var j = 0; // index of maxdifference min 
    var i = 1; 
    while(i < array.length){
        if(array[i] < min){
            min = array[i];
            max = array[i];
        }
        if(array[i] > max){
            max = array[i];
        }
        difference = max - min; 
        if(difference > maxdifference){
            j = i; 
            maxdifference = difference; 
        }
        i++; 
    }
    return maxdifference; 
}

var input = [20, 4, 14, 12, 8 , 9 , 17, 1]; 

console.log(maximize(input)); 