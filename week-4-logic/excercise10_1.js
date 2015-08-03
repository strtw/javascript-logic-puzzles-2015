"use strict";

function FirstReverse(str) {
    var i;
    var result = "";
    for (i = str.length; i >= 0; i--) {
        result += str.charAt(i);
    }
    return result;
}
