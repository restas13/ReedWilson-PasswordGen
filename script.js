// Assignment code here
// Array assignments
var passwordContents = [];
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var lower = "abcdefghijklmnopqrstuvwxyz".split('');
var nums = "1234567890".split('');
var special = "!@#$%^&*()_-+={[}]:;<>.?/|".split('');

function generatePassword() {
  var length = parseInt(prompt("How long would you like your password to be? (must be greater than 7 and less than 128)"));
  var passwordCharacters = [];
  var finalPass = '';


  if (length >= 8 && length <= 128) {
    specifyPassword(length);
  } else {
    alert("Uh oh, it looks like you selected a number outside of the allowed range, please try again.");
  }

  for (var i = 0; i < parseInt(length); i++) {
    passwordCharacters.push(passwordContents[i]);
  }

  finalPass = passwordCharacters.toString();
  finalPass = finalPass.replaceAll(/,/g, '');
  console.log(finalPass);
  console.log("hello");

}

function specifyPassword(len) {
  if (confirm("would you like upper case letters in your password?")) {
    for (var i = 0; i < upper.length; i++) {
      passwordContents.push(upper[i]);
    }
    console.log(passwordContents);
  }

  if (confirm("would you like lower case letters in your password?")) {
    for (var i = 0; i < lower.length; i++) {
      passwordContents.push(lower[i]);
    }
    console.log(passwordContents);
  }

  if (confirm("would you like nuumbers in your password?")) {
    for (var i = 0; i < nums.length; i++) {
      passwordContents.push(nums[i]);
    }
    console.log(passwordContents);
  }

  if (confirm("would you like special charcters in your password?")) {
    for (var i = 0; i < special.length; i++) {
      passwordContents.push(special[i]);
    }
    console.log(passwordContents);
  }

  
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


