// Assignment Code
var generateBtn = document.querySelector("#generate");

var passCrit = {

}

var passLength = function() {
  let length = Number(prompt("Select a password length", "8-128 characters"))
  if (length > 128) {
    alert("TOO BIG")
  } else if (length < 8) {
    alert("TOO SMALL")
  } else {
    
    }
}

var passUpCase = function() {
 confirm("Does your password need uppercase letters?") 

}

var passLowCase = function() {
  confirm ("Does your password need lowercase letters?")
}


function generatePassword() {
  passLength();
  passUpCase()

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);