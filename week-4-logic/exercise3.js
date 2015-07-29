'use strict';

function randInt(high, low) {
    if ((high - low) >= 3) {
        var result = Math.floor(Math.random() * (high - low)) + low;
        while (result === low) {
            result = Math.floor(Math.random() * (high - low)) + low;
        }
        return result;
    }	  
       else { 
        throw ("Please enter values whose difference is greater than 3");
    }	
}
