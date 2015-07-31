'use strict';

function reverseCase(aString) {
    var modArray = [];
    var i = 0;
    for (i = 0; i < aString.length; i += 1) {
        if (aString.charAt(i).toUpperCase() === aString.charAt(i)) {
            modArray[i] = aString.charAt(i).toLowerCase();
        } else {
            modArray[i] = aString.charAt(i).toUpperCase();
        }
    }
    var finalString = modArray.join("");
    return finalString;
}
