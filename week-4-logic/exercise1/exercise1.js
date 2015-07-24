"use strict";

function wordLength() {
    var wordArray = ["house", "farm", "chicken", "dog", 123];
    function countElement(value) {
        var result = value.length;
        if (result === undefined) {
            result = "";
        }
        return result;
    }
    var newArray = wordArray.map(countElement);

    newArray.sort();
    newArray.reverse();

console.log("The longest word is " + newArray[0] + " characters in length");
}

wordLength();
