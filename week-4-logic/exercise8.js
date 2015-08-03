"use strict";

function freqItem(anArray) {
    var count = 1;
    var newArray = [];
    var resultArray = [];
    var i;
    anArray.sort();
    for (i = 0; i < anArray.length ; i++) {
        if (anArray[i] === anArray[i + 1]) {
            count ++;
        }
        else {
            newArray.push(count + " " + anArray[i]);
            count = 1;
        }
    }
    newArray.sort();
    newArray.reverse();
    resultArray.push(newArray[0]);
    var finalResultArray = resultArray[0].split(" ");
    var result = "There are " + finalResultArray[0] + " instances of " + finalResultArray[1];
    return result;
}
