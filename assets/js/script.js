// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // create arrays of the acceptable character types
  
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "%", "!", "'", ",", ".", "/", ":", ";", "<", ">", "?", "[", "]", "`", "{", "}", "|", "~"];
  
  // results of user input 
   
  var resultArray = [];
  var userArray = [];

  uppercaseArray [1]


  var numCharacter = prompt ("How many characters would you like to include? Min 8 Max 128.");
  var lowercase = confirm ("Would you like to include any lowercase characters? Hit cancel for no");
  var uppercase = confirm ("Would you like to include any uppercase characters? Hit cancel for no");
  var numbers = confirm ("Would you like to include any numbers? Hit cancel for no");
  var characters = confirm ("Would you like to include any special characters? Hit cancel for no");

  // check array


if (lowercase){
  resultArray = resultArray.concat(lowercaseArray);

}

if (uppercase){
  resultArray = resultArray.concat(uppercaseArray);

}

if (numbers){
  resultArray = resultArray.concat(numbArray);
  
}

if (characters){
  resultArray = resultArray.concat(characterArray);
}
console.log(resultArray)


for (var i = 0; i < numCharacter; i++) {
      
  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
  }

  return userArray.join("") ;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
