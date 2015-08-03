"use strict";

function truncateString(aString, num) {
    var i;
    var resultArray = [];
    var stringArray = aString.split("");
        for (i = 0; i < num ; i++) {
        resultArray.push(stringArray[i]);
    }
    var result = resultArray.join("");
    return result;
}
