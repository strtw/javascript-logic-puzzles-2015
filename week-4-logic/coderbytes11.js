'use strict';

function abCheck(str) {
    var abReg = /a...b/i;
    var baReg = /b...a/i;
    if (abReg.test(str) || baReg.test(str)) {
        return true;
    }
    return false;
}
