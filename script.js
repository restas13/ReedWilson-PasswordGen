// Assignment code here
// Array assignments
var passwordContents = [];
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var lower = "abcdefghijklmnopqrstuvwxyz".split('');
var nums = "1234567890".split('');
var special = "!@#$%^&*()_-+={[}]:;<>.?/|".split('');

//Generate password function, contains password making steps
function generatePassword() {
  var length = parseInt(prompt("How long would you like your password to be? (must be greater than 7 and less than 128)"));
  var passwordCharacters = [];
  var finalPass = '';

  //Checks if the length the user specified is within the set range
  if (length >= 8 && length <= 128) {
    specifyPassword();
  } else {
    alert("Uh oh, it looks like you selected a number outside of the allowed range, please try again.");
    return "Your Secure Password";
  }

  //Checks if the passwordContents array has any values to put into the password
  if (passwordContents.length == 0) {
    alert("Uh oh, it looks like you don't have any characters to use for your password, please try again and add at least one character type to make up the password.");
    return "Your Secure Password";
  }

  //Loops for the ammount of characters the user wants and adds a random character
  for (var i = 0; i < parseInt(length); i++) {
    var num = Math.floor(Math.random() * passwordContents.length);
    passwordCharacters.push(passwordContents[num]);
  }

  //Converts the password to a readable string
  finalPass = passwordCharacters.toString();
  finalPass = finalPass.replaceAll(/,/g, '');
  console.log(finalPass);

  //returns the password value
  return finalPass;
}

//Adds the users character types to the passwordContents array
function specifyPassword() {
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

  //resets the passwordContents array
  passwordContents = [];
  console.log(passwordContents);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


