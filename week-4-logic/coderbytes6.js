'use strict';

function LetterCapitalize(str) {
    var i;
    var firstChar = str.charAt(0);
    var charAti;
    var charAtiPlus;
    var newString = firstChar.toUpperCase();
    for (i = 0; i < str.length; i += 1) {
        charAti = str.charAt(i);
        charAtiPlus = str.charAt(i + 1);
        if (str.charAt(i) === " " && str.charAt(i + 1) !== " ") {
            newString = newString + " " + charAtiPlus.toUpperCase();
            i += 1;
        } else {
            newString = newString + charAti;
        }
    }
    return newString;
}
