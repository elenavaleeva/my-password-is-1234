// Assignment Code
var generateBtn = document.querySelector("#generate");
// Generator functions 
var characterLength = 8;
var choiceArr = [];

var specialCharArr = ['!', '@','#','$','%','^','&','*','(',')','<','>'];
var lowerCaseArr = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','b','v','n','m',]
var upperCaseArr =['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
var numberArr = ['0','1','2','3','4','5','6','7','8','9',];

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); // either true or false
  var passwordText = document.querySelector("#password");

  if (correctPrompts){
  var newPassword = generatePassword();

  passwordText.value = newPassword;
  } else {
    passwordTest.value ="";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
var password = "";
for( var i = 0; i < characterLength; i ++){
  var randomIndex =Math.floor( Math.random() * choiceArr.length);
  password = password + choiceArr[randomIndex];
}
return password;
}

function getPrompts(){
  choiceArr = [];

  characterLength =parseInt( prompt("How many characters do you want your password to be ? (choose 8 - 128characters long  "));
if (isNaN(characterLength) || characterLength < 8 || characterLength > 128 ){

  alert(" Character length has to be a number, 8-128 digits . Please try again. ");
return false;
}

if (confirm(" Would you like lowercase letters in your password?")){
choiceArr = choiceArr.concat(lowerCaseArr);
}
if (confirm(" Would you like uppercase letters in your password?")){
  choiceArr = choiceArr.concat(upperCaseArr);
}
if (confirm(" Would you like special characters in your password?")){
  choiceArr = choiceArr.concat(specialCharArr);
}
if (confirm(" Would you like numbers in your password?")){
  choiceArr = choiceArr.concat(numberArr);
}
return true;
}