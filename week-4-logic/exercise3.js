'use strict';

(function (high, low) {
    var high = 10;
    var low = 6;
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
})();
