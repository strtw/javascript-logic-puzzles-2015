'use strict';

function timeConvert(num) {
    var i;
    var numStr;
    var decStr;
    var intStr = "";
    var result;
    if (num < 60) {
        result = "0:" + num;
        return result;
    }
    num = num/60;
    numStr = num.toString();
    for (i = 0; i <= numStr.length; i += 1) {
        if (numStr.charAt(i) !== ".") {
            intStr = intStr + numStr.charAt(i);
        } else {
            decStr = numStr.substr(i);
            decStr = Number(decStr) * 60;
            result = intStr + ":" + decStr;
            break;
        }
    }
    return result;
}
