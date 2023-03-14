// Assignment code here
// Array assignments
var passwordContents = [];
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var lower = "abcdefghijklmnopqrstuvwxyz".split('');
var nums = "1234567890".split('');
var special = "!@#$%^&*()_-+={[}]:;<,>.?/|".split('');
console.log(special);

function generatePassword(){

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


