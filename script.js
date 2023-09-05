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
    var genLength = length
    console.log(genLength)
    }
}

var passUpCase = function() {
 if (confirm("Does your password need uppercase letters?")) {
  var genUCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
 }
 console.log(genUCase)
}

var passLowCase = function() {
  if (confirm ("Does your password need lowercase letters?")) {
  var genLCase = 'abcdefghijklmnopqrstuvwxyz'.split('')
  }
  console.log(genLCase)
}

function generatePassword() {
  passLength();
  passUpCase();
  passLowCase()

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);