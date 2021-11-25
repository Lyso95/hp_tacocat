//Get the string from the page
//controller
function getValue(){
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value.toLowerCase();  
    let revString = checkPalindrome(userString);
    displayString(revString);
}
//Reverse the string
//model
function checkPalindrome(userString) {
    let revArray = [];
    let stringEven = false;
    
    //reverse a string using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        revArray += userString[index];
    }
    //check the Array and give a true or false back.
    if(revArray.localeCompare(userString)){
        stringEven = true;
        revArray = 'Text ist kein Palindrom!'
    } else {
        stringEven = false;
    }
    return revArray;
}

//Display infotext or palindrome
//view
function displayString(revArray){
    //write to the page
    document.getElementById("msg").innerHTML = `Dein Text rückwärts lautet: ${revArray}`; 
    //turn on alert box
    document.getElementById("alert").classList.remove("invisible");
}