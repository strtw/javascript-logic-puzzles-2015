'use strict';

function AlphabetSoup(str) {
    var alpArray = str.split("");
    alpArray.sort();
    alpArray = alpArray.join("");
    return alpArray;
}
