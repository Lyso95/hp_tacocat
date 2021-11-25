//get user input
function getValue(){

    //makes shure that alert is invisible
    document.getElementById("alert").classList.add("invisible");
    //get string from page
    let userString = document.getElementById("userString").value;

    //check for palindrome
    let returnObj = checkForPalindrome(userString);

    //display message to page
    displayMessage(returnObj);
}

//check for palindrome
function checkForPalindrome(userString){

    //lowers string
    userString = userString.toLowerCase();
    
    //remove spaces and special characters
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex,"");

    let revString = [];
    let returnObj = {};

    for (let index = userString.length - 1; index >= 0; index--){
        revString += userString[index];
    }
    
    if (revString == userString) {
        returnObj.msg = "Sehr gut! Du hast ein Palindrom eingegeben!"
    } else {
        returnObj.msg = "Sorry! Du hast kein Palindrom eingegeben!"
    }
    returnObj.reversed = revString;
    return returnObj;
}

function displayMessage(returnObj){
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Dein Text rückwärts lautet: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");
}