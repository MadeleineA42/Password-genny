// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log('button clicked');
  var length = prompt("Enter how many characters you would like. 8-128")
  if (length < 8 || length > 128) {
      alert("ERROR! Password must be between 8 and 128 characters!");
      // prompt to make sure password is correct amount of characters
      return ""
      // THIS WILL BE THE RETURN MESSAGE
  } 
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