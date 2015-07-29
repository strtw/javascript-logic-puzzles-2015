'use strict';

function evaluateExpression(operand1, operand2, operator) {
    var result;
    var isOp = /[+\-\%\*\/]/;
    if ((!((isNaN(operand1)) || (isNaN(operand2)))) && (isOp.test(operator))) {
        switch (operator) {
        case "+":
            result = operand1 + operand2;
            break;
        case "-":
            result = operand1 - operand2;
            break;
        case "*":
            result = operand1 * operand2;
            break;
	case "/":
            result = operand1 / operand2;
	    break;
	case "%":
            result = operand1 % operand2;
	    break;
	default:
	    throw ("Please enter a valid arithmetic operator: + - / % *");
		}
	    return result;
	}
	else { 
	throw ("Operator arugment must be a valid arithmetic operator: + - / % *");
    }
}    
