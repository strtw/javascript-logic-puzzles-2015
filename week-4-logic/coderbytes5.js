'use strict';

function simpleAdding(num) {
    var i;
    var result = 0;
    for (i = 1; i <= num; i += 1) {
        result = i + result;
    }
    return result;
}
