"use strict";
var isAlpha = /[a-zA-Z]/;


function wordLength() {
    var wordArray = ["house", "farm", "chicken", "dog", 44, 664, "123", "1a23"];
    function convertString(value) {
	    if(isNaN(value)){
		    return value;
		}
		else value = "a";
		return value;
    }
    var newArray = wordArray.map(convertString);
	
	function countAlphaLength(value){
	    if(isAlpha.test(value)){
		   var result = value.length;
		}
           return result;
	}

	var finalArray = newArray.map(countAlphaLength);
    finalArray.sort();
    finalArray.reverse();
	
	function matchLength(){
	    var i=0;
	    for(i=0;i<newArray.length;i++){
		    if(newArray[i].length === finalArray[0]){
			    var wordName = newArray[i];
                return wordName;				
			}
			    
        }
		
    }
console.log("The longest word is "+ matchLength() +" and it is " + finalArray[0] + " characters in length");
}

wordLength();
