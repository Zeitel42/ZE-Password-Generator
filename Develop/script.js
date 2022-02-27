// Assignment code here
var randCharArray = [];
var passwordNum = "";

// prompt user for password length
function userPasswordLength() {

  var userNum = window.prompt("How many characters would you like your password to be? Please enter a number between 8 and 128.");

// validate length meets criteria

  if(userNum < 8 || userNum > 128){

    userPasswordLength();

  }else{

    passwordNum = userNum;

  }
  console.log(userNum + " local");
}
userPasswordLength();
console.log(passwordNum + " extracted");

function generatePassword(){
  var passwordArray = [];
  var randomArray = Math.floor(Math.random() * passwordNum);
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
