'use strict';


//Begin sum function that sums all of the numbers in an array. 
//[0,1,2,3,01,"01","dog",4,5,"cat"] should return 17

function sumArray(anArray) {
    var i;
    var result = 0;

    for (i=0; i<anArray.length; i+=1) {
    if( Number(anArray[i])  ) {
        anArray[i] = Number(anArray[i]);
        result += anArray[i];
        }
        }
	return result;
}
	

//Begin multiply Function that multiplies all of the numbers in an array. 
//[0,1,2,3,01,"01","dog",4,5,"cat"] should return 120


function multArray(anArray) {
var i;
var result = 1;
for(i=0; i<anArray.length; i+=1) {
    if( anArray[i] > 0){
	   result *= anArray[i];
	    }
	}
	return result;
}
