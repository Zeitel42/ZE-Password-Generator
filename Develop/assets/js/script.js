// Assignment code here
var passArray = [];
var passwordNum = 0;
var chosenCharacters = [];
var password = "";
var lastPass = "";

// //  prompt user for password length // //

function userPasswordLength() {
  var userNum = window.prompt("How many characters would you like your password to be? Please enter a number between 8 and 128.");
// validate length meets criteria
  if(userNum < 8 || userNum > 128 || isNaN(userNum)){
    userPasswordLength();
  }else{
    var confirmNum = window.confirm("You have chosen to have your password " + userNum + " characters long! Click OK to confirm or Cancel to choose a different number.");
    if(confirmNum){
      passwordNum = parseInt(userNum);       // converts string numbers into integers //
      bigLetters();
      return
    }else{
      userPasswordLength();
    }
  }
}

// //  CHARACTER TYPES // //

// // PROMPT USER FOR UPPERCASE LETTERS // //

function bigLetters(){
  var upperCase = window.prompt("Would you like uppercase letters in your password? Please enter Y or N.");
  
  if(upperCase === "Y"){
    var capitals = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    chosenCharacters.push(...capitals);
    window.alert("Great! Uppercase letters will be part of the password.");
    littleLetters();
    return
  }else if(upperCase === "N"){
    window.alert("Ok. No uppercase letters then.");
    littleLetters();
    return
  }else{
    window.alert("Please enter Y or N to choose.");
    bigLetters();
  } 
}

// // PROMPT USER FOR LOWERCASE LETTERS // //

function littleLetters() {
  var lowerCase = window.prompt("Would you like lowercase letters in your password? Please enter Y or N.");

  if(lowerCase === "Y"){

    var littles = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    chosenCharacters = chosenCharacters.concat(littles);
    window.alert("Wonderful! Lowercase letters will be part of the password.");
    prompNums();
    return
  }else if(lowerCase === "N"){
    window.alert("Ok. No lowercase letters then.");
    prompNums();
    return
  }else{
    window.alert("Please enter Y or N to choose.");
    littleLetters();
  } 
}

// // // PROMPT USER FOR NUMBERS // //

function prompNums(){
  var numbers = window.prompt("Would you like numbers in your password? Please enter Y or N.");

  if(numbers === "Y"){

    var integers = ["0", "1","2", "3", "4", "5", "6", "7", "8", "9"]; 

    chosenCharacters = chosenCharacters.concat(integers);
    window.alert("Cool! Numbers letters will be part of the password.");
    charSpecial()();
    return
  }else if(numbers === "N"){
    window.alert("Ok. No numbers letters then.");
    charSpecial();
    return
  }else{
    window.alert("Please enter Y or N to choose.");
    prompNums();
  } 
}

// // // PROMPT USER FOR SPECIAL CHARACTERS // //

function charSpecial() {
  var specials = window.prompt("Would you like special characters in your password? Please enter Y or N.");

  if(specials === "Y"){

    var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "<", ">"];  
    chosenCharacters = chosenCharacters.concat(specialChars);
    window.alert("Sweet! Special characters letters will be part of the password.");
    rando();
    return
  }else if( specials === "N"){

    if(chosenCharacters.length === 0){
      window.alert("You must choose at least one character type.");
      bigLetters();
    }else{
      window.alert("Ok. No special characters letters then.");
      rando();
      return
    }
    
  }else{
    window.alert("Please enter Y or N to choose.");
    charSpecial();
  }
}

function rando() {

  for(var i = 0 ; i < passwordNum; i++){

    var rando = Math.floor(Math.random()* chosenCharacters.length);

    passArray.push(...chosenCharacters[rando]);
    lastPass = passArray.join(" ");              // converts array into string without commas
    
  }
  writePassword();
  return  
}



// // GENERATE PASSWORD // //

// generatePassword();

function generatePassword(){
  var clear = document.querySelector("#password");
  if(clear.value != " "){
    clear.value = " ";
    userPasswordLength();
  }
  return
}

//Write password to the #password input

function writePassword() {

  password = lastPass;
  var passwordText = document.querySelector("#password");
  passwordText.value = "Your Random Password: \n" + password;
  return
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
