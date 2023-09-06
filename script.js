// Assignment Code
var generateBtn = document.querySelector("#generate");

var passCrit = {
  length: null,
  uCase: null,
  lCase: null,
  spec: null,
  num: null

}

var genPass = []

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
 } else {
  passCrit.uCase = null;
 }
}

var passLowCase = function() {
  if (confirm ("Does your password need lowercase letters?")) {
  passCrit.lCase = 'abcdefghijklmnopqrstuvwxyz'.split('')
  } else {
    passCrit.lCase = null
  }
}

function passNum () {
  if (confirm ("Does your password need numeric characters?")) {
    passCrit.num = '0123456789'.split('')
  } else {
    passCrit.num = null
  }

}

function passSpec () {
  if (confirm ("Does your password need special characters?")) {
    passCrit.spec = "!#$%&'()*+-./:;<=>?@[]^_`{|}~".split("")
  } else {
    passCrit.spec = null
  }
  
}


var generatePassword = function() {
  passLength();
  genPass.length = passCrit.length
  passUpCase();
  passLowCase();
  passNum();
  passSpec();
  var rawPool = [passCrit.uCase, passCrit.lCase, passCrit.num, passCrit.spec]
  var charPool = rawPool.filter (elements => {
    return elements !== null;
  })
  for (let i = 0; i < genPass.length; i++) {
    var rdArray = charPool[Math.floor(Math.random() * charPool.length)]
    var rdChar = rdArray[Math.floor(Math.random() * rdArray.length)]
    genPass[i] = rdChar
  }
  var newPass = genPass.join("")
  console.log (genPass.length)
  console.log (charPool)
  console.log (newPass)
  return newPass
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);