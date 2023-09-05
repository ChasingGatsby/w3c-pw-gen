// Assignment Code
var generateBtn = document.querySelector("#generate");

var passCrit = {
  length: null,
  uCase: null,
  lCase: null,
  specCh: null,
  num: null

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

function passNum () {
  if (confirm ("Does your password need numeric characters?")) {
    passCrit.num = '0123456789'.split('')
  }

}

function passSpec () {
  if (confirm ("Does your password need special characters?")) {
    passCrit.specCh = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("")
  }
}


var genPass = []
var random = function() {
  genPass.length = passCrit.length
  const genPool = [passCrit.uCase, passCrit.lCase, passCrit.num, passCrit.specCh]
  const min = 1

}

var generatePassword = function() {
  
  passLength();
  passUpCase();
  passLowCase()
  passNum()
  passSpec()
  for (let i = 0; i < genPass.length; i++) {
    
  }
  outPass = genPass.toString()
  return outPass
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);