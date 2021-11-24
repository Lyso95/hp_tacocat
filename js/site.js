//Get the string from the page
//controller
function getValue(){
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;  
    let revString = checkPalindrome(userString);
    displayString(revString);
}
//Reverse the string
//model
function checkPalindrome(userString) {
    let revString = [];
    let stringEven = false;
    let reversedString = "";
    
    //reverse a string using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }
    if(revString.localeCompare(userString)){
        stringEven = true;
        revString = 'Text ist kein Palindrom!'
    } else {
        stringEven = false;
    }
    return revString;
}

//Display the reversed string to the user
//view
function displayString(revString){
    //write to the page
    document.getElementById("msg").innerHTML = `Dein Text rückwärts lautet: ${revString}`; 
    //turn on alert box
    document.getElementById("alert").classList.remove("invisible");
}