// Assignment Code
var generateBtn = document.querySelector("#generate");

var passCrit = {
  length: 0,
  uCase: null,
  lCase: null,

}

function passLength() {
  let inLength = Number(prompt("Select a password length (8-128 characters)"))
  if (inLength > 128) {
    alert("TOO BIG");
    passLength()
  } else if (inLength < 8) {
    alert("TOO SMALL");
    passLength()
  } else {
    passCrit.length = inLength
  }
}

var passUpCase = function() {
 if (confirm("Does your password need uppercase letters?")) {
  passCrit.uCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
 }
}

var passLowCase = function() {
  if (confirm ("Does your password need lowercase letters?")) {
  passCrit.lCase = 'abcdefghijklmnopqrstuvwxyz'.split('')
  }
}

function generatePassword() {
  passLength();
  passUpCase();
  passLowCase()
  console.log (passCrit)
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);