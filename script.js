// Assignment Code
var generateBtn = document.querySelector("#generate");

var characterLength = 8;
var choiceArr = [];
//Declare varibles 
var specialChar = ['!', '@','#','$','%','^','&','*','(',')','<','>'];
var lowerCase = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','b','v','n','m',]
var upperCase =['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
var number = ['0','1','2','3','4','5','6','7','8','9',];

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); // either true or false
  var passwordText = document.querySelector("#password");

  if (correctPrompts){
  var newPassword = generatePassword();

  passwordText.value = newPassword; //75$..
  } else {
    passwordTest.value ="";
  }
}

// Add event listener to generate button
// Start of the code
generateBtn.addEventListener("click", writePassword);

function generatePassword(){



var password = "";

for( var i = 0; i < characterLength; i ++){
  // Generate a random index from the choiceArr length
 
  var randomIndex =Math.floor( Math.random() * choiceArr.length);
  password = password + choiceArr[randomIndex]; 
}
return password;
}

function getPrompts(){
  choiceArr = [];

  // get the length of the password that the user provides from the prompt
  // characterLength = 55 - example 
  characterLength =parseInt( prompt("How many characters do you want your password to be ? (choose 8 - 128characters long  "));

  // Validation of the password length that user has given
if (isNaN(characterLength) || characterLength < 8 || characterLength > 128 ){

  alert(" Character length has to be a number, 8-128 digits . Please try again. ");
  return false;
}


// Asking the user  various options on how they want the password to be..?
// confirm() -> Yes/No ->true/false

// Array method called concat

if (confirm(" Would you like lowercase letters in your password?")){
choiceArr = choiceArr.concat(lowerCase);

}

if (confirm(" Would you like uppercase letters in your password?")){
  choiceArr = choiceArr.concat(upperCase);
} 


if (confirm(" Would you like special characters in your password?")){
  choiceArr = choiceArr.concat(specialChar);
}

if (confirm(" Would you like numbers in your password?")){
  choiceArr = choiceArr.concat(number);
}

return true;
}

// Application should first prompt the user for the length of the password - 8 -128 chars