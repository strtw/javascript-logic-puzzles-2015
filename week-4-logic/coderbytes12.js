'use strict';

function vowelCount(str) {
    var i;
    var count = 0;
    var vowelRegExp = /[aeiou]/i;
    for (i = 0; i < str.length; i++) {
        if (vowelRegExp.test(str.charAt(i))) {
            count += 1;
        }
        return count;
    }
}
