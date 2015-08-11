'use strict';

function longestWord(sen) {
    var i;
    var longestWordLength;
    var senArray = sen.split(" ");
    var finalArray = newArray.slice();          //copies array
    for (i = 0; i < finalArray.length; i++) {    //replaces string with its length value
        finalArray[i] = finalArray[i].length;
    }
    finalArray.sort();
    finalArray.reverse();
    longestWordLength = finalArray[0];
    for (i = 0; i < senArray.length; i++) {
        if (senArray[i].length === longestWordLength) {
            return senArray[i];
        }
    }
}
