// Assignment Code
var generateBtn = document.getElementById("generate");
var charAmount = 0;


// Write password to the #password input
function writePassword(){

  var password = generatePassword();
  var passwordText = document.getElementById("password");

  passwordText.value = password; 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Function generatePassword uses conditions to create a randomized password with users conditions

function generatePassword(){
  let charCodes = [];
  var lowerCaseCharCodes = arraySort(97, 122);
  var upperCaseCharCodes = arraySort(65, 90);
  var numbersCharCodes = arraySort(48, 57);
  var symbolsCharCodes = arraySort(33, 47).concat(arraySort(58, 64))
  .concat(arraySort(91, 96)).concat(arraySort(123, 126));

  let charAmount = prompt("How many characters do you want for your password? (Please type a number between 8 and 128)");

  validateData(charAmount);

  console.log(charAmount);
/*
  getSelections(charCodes, lowerCaseCharCodes, upperCaseCharCodes, numbersCharCodes, symbolsCharCodes);
  */

  console.log(charCodes);

  let includeLowerCase = confirm("Would you like to include lower case?");
  let includeUpperCase = confirm("Would you like to include UPPER CASE?");
  let includeNumbers = confirm("Would you like to include numbers?");
  let includeSymbols = confirm("Would you like to include special characters?");

  console.log(charCodes);

  if (includeLowerCase){
    charCodes = charCodes.concat(lowerCaseCharCodes);
  }
  console.log(charCodes);

  if (includeUpperCase) {
    charCodes = charCodes.concat(upperCaseCharCodes);
  }
  console.log(charCodes);

  if (includeNumbers) {
    charCodes =  charCodes.concat(numbersCharCodes);
  }
  console.log(charCodes);

  if (includeSymbols) {
    charCodes = charCodes.concat(symbolsCharCodes);
  }
  console.log(charCodes);

  let password = [];
  for (let i = 0; i <= charAmount; i++){
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
    password.push(String.fromCharCode(characterCode));
  }
  password = password.join('');
  return password;
}

function validateData(charAmount){
  if (charAmount < 8 || charAmount > 128){
    alert("Your password needs to be between 8 and 128 characters!");
    charAmount = prompt("How many characters do you want for your password? (Please type a number between 8 and 128)");
    validateData(charAmount);
  }
  return charAmount;
}

/* NOT YET BEING USED NEEDS REFACTORING
function validateSelections(charCodes){
  if (charCodes.length === 0){
    alert("Your need to select at least one character type!");
    getSelections();
    validateSelections(charCodes);
  }
  return charCodes;
}
*/

function arraySort(low, high){
  let array =[];
  for (let i = low; i <= high; i++) {
    array.push(i); 
  }
  return array;
}
//Selections function was not returning the charcodes
function getSelections(charCodes){
  var lowerCaseCharCodes = arraySort(97, 122);
  var upperCaseCharCodes = arraySort(65, 90);
  var numbersCharCodes = arraySort(48, 57);
  var symbolsCharCodes = arraySort(33, 47).concat(arraySort(58, 64))
  .concat(arraySort(91, 96)).concat(arraySort(123, 126));

  let includeLowerCase = confirm("Would you like to include lower case?");
  let includeUpperCase = confirm("Would you like to include UPPER CASE?");
  let includeNumbers = confirm("Would you like to include numbers?");
  let includeSymbols = confirm("Would you like to include special characters?");

  console.log(charCodes);

  if (includeLowerCase){
    charCodes = charCodes.concat(lowerCaseCharCodes);
  }
  console.log(charCodes);

  if (includeUpperCase) {
    charCodes = charCodes.concat(upperCaseCharCodes);
  }
  console.log(charCodes);

  if (includeNumbers) {
    charCodes =  charCodes.concat(numbersCharCodes);
  }
  console.log(charCodes);

  if (includeSymbols) {
    charCodes = charCodes.concat(symbolsCharCodes);
  }
  console.log(charCodes);
  return charCodes;
}
