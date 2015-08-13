'use strict';
function letterChanges(str) {
    var i;
    var newString = "";
    var strChar;
    var charCode;
    var charCode2;

    //This loop writes a new string with each letter replaced by the next letter in the alphabet.
    for (i = 0; i < str.length; i += 1) {
        strChar = str.charAt(i);
        if (strChar === "z" || strChar === "Z") {
            newString = newString + "A";
        } else {
            charCode = (str.charCodeAt(i) + 1);
            newString = newString + String.fromCharCode(charCode);
        }
    //This loop finds lowercase vowels and capitalizes them. "A" is not included because it was accounted for in the previous section.
    }
    for (i = 0; i < newString.length; i += 1) {
        charCode2 = newString.charAt(i);
        switch (charCode2) {
        case "e":
        case "i":
        case "o":
        case "u":
            charCode2 = charCode2.toUpperCase();
            newString = newString.substr(0, i) + charCode2 + newString.substr(i + 1);
            break;
        }
    }
    return newString;
}
