// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  console.log('button clicked');// added console so I can see when button is clicked
  var length = prompt("Enter how many characters you would like. 8-128")
  if (length < 8 || length > 128) {
    alert("ERROR! Password must be between 8 and 128 characters!");
    // prompt to make sure password is correct amount of characters
    return "You've generated a secure password";
    // THIS WILL BE THE RETURN MESSAGE
  }
  var includeLowercase = confirm("Would you like to include lowercase letters?");
  var includeUppercase = confirm("Would you like to include uppercase letters?");
  var includeSpecial = confirm("Would you like to include special characters?");
  var includeNumbers = confirm("Would you like to include numbers?");
  // these are vars for each prompt pop up
  if (includeLowercase && includeUppercase && includeSpecial && includeNumbers) {
    // alert("You must include at least one character type.");
  }

  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChar = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  var numbers = "0123456789";
  var characterSet = "";

  if (includeLowercase) {
    characterSet += lowercaseLetters;
  }

  if (includeUppercase) {
    characterSet += uppercaseLetters;
  }

  if (includeSpecial) {
    characterSet += specialChar;
  }

  if (includeNumbers) {
    characterSet += numbers;
  }
  
  var password = "";
  for (var i = 0)
}





