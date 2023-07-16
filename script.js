// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log('button clicked');
  
}
// added console so I can see when button is clicked

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// console.log(Math.floor(Math.random() * 10))