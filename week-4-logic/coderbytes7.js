'use strict';

function SimpleSymbols(str) {
    var falseRegExp = /=[a-zA-Z]=/;
    var falseRegExp1 = /\+[a-zA-Z]=/;
    var falseRegExp2  = /=[a-zA-Z]+/;
	if(falseRegExp.test(str) || falseRegExp1.test(str) || falseRegExp2.test(str)) {
            return "false";
	}
             return "true";
    }
