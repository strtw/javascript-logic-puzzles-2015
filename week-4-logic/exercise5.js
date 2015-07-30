'use strict';

function dashNumbers(n){
    var i;
    var numStringArray = numString.split("");
    for (i=0; i<numStringArray.length; i++){
        if(numStringArray[i] % 2 === 0 && numStringArray[i-1] % 2 === 0){
	    numStringArray[i] = "-" + numStringArray[i];
		}
	}
	var returnString = numStringArray.join("");
	return returnString;
}
