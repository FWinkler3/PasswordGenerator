// Assignment Code
var generateBtn = document.querySelector("#generate");

function getPrompts() {
  //create arrays of items to be included in password
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacterList = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "{", "}", "~"];

  //this creates the variable array to place the selected options in to 
  var passwordCriteria = [];

  //1. Prompt user for the password criteria
  var userInput = window.prompt("How many characters would you like your password to be? (Pick between 8 and 128 characters)");
  var passwordLength = parseInt(userInput);

  //1a. Password length must be a number
  if (isNaN(passwordLength)) {
    window.alert("That's not a number! Please choose a number between 8 and 128.")
    return getPrompts()
  } 

  //1b. Password length between 8 and 128 characters
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 and 128 characters.")
    return getPrompts()
  }

  //1c. Lowercase, Uppercase, Numbers, Special Characters 
  var userWantsLowercase = window.confirm("Would you like to include lowercase letters in your password?");
  var userWantsUppercase = window.confirm("Would you like to include uppercase letters in your password?");
  var userWantsNumbers = window.confirm("Would you like to include numbers in your password?");
  var userWantsSpecialCharacters = window.confirm("Would you like to include special characters in your password?");

  if (userWantsLowercase) {
    passwordCriteria = passwordCriteria.concat(lowercaseList)
  }
  if (userWantsUppercase) {
    passwordCriteria = passwordCriteria.concat(uppercaseList)
  }
  if (userWantsNumbers) {
    passwordCriteria = passwordCriteria.concat(numberList)
  }
  if (userWantsSpecialCharacters) {
    passwordCriteria = passwordCriteria.concat(specialCharacterList)
  }
console.log(passwordCriteria)

//3. Generate password based on criteria

var passwordString = ""; 
for (var i = 0; i < passwordLength; i++) {
passwordString += passwordCriteria[Math.floor(Math.random() * (passwordCriteria.length))]; 
}

return passwordString
}

// Write password to the #password input

function writePassword() {
    var password = getPrompts();
    var passwordText = document.querySelector("#password");

      passwordText.value = password;  
}


//4. Display generated password on page
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);