// Assignment Code
var generateBtn = document.getElementById("generate");
var charAmount = 0;
/*
var charNumber = document.getElementById("characters");
var includeUpperCaseElement = document.getElementById("includeUpperCase");
var includeNumbersElement = document.getElementById("includeNumbers");
var includeSymbolsElement = document.getElementById("includeSymbols");
var form = document.getElementById("options");
var formSumbit = document.getElementById("formSubmit");
*/

var lowerCaseCharCodes = arraySort(97, 122);
var upperCaseCharCodes = arraySort(65, 90);
var numbersCharCodes = arraySort(48, 57);
var symbolsCharCodes = arraySort(33, 47).concat(arraySort(58, 64))
.concat(arraySort(91, 96)).concat(arraySort(123, 126));



// Write password to the #password input
function writePassword(){
/*
  var charAmount = charNumber;
  var includeUpperCase = includeUpperCaseElement;
  var includeNumbers = includeNumbersElement;
  var includeSymbols = includeSymbolsElement;

  */

  var password = generatePassword();
  var passwordText = document.getElementById("password");

  passwordText.value = password; 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*
function showResults(){
  console.log("This is the number of characters: " + charNumber);
}

function showForm(){
  form.setAttribute("style", "display: ' ';");
}

generateBtn.addEventListener("click", showForm);

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  var charAmount = charNumber;
  console.log(charAmount);
});
*/

//Function generatePassword uses conditions to create a randomized password with users conditions

function generatePassword(){
  let charCodes = [];

  let charAmount = prompt("How many characters do you want for your password? (Please type a number between 8 and 128)");

validateData(charAmount);

getSelections();

validateSelections(charCodes);


let password = [];
  for (let i = 0; i < charAmount; i++){
    var characterCode = charCodes[Math.floor(math.random() * charCodes.length)];
    password.push(String.fromCharCode(characterCode));
  }
  return password = password.join('');
}

function validateData(charAmount){
  if (charAmount < 8 || charAmount > 128){
    alert("Your password needs to be between 8 and 128 characters!");
    charAmount = prompt("How many characters do you want for your password? (Please type a number between 8 and 128)");
    validateData();
  }
  return charAmount;
}

function validateSelections(charCodes){
  if (charCodes.length < 1){
    alert("Your need to select at least one character type!");
    getSelections();
    validateSelections();
  }
  return charCodes;
}

function arraySort(low, high){
  let array =[];
  for (let i = low; i <= high; i++) {
    array.push(i); 
  }
  return array;
}

function getSelections(){
  let includeLowerCase = confirm("Would you like to include lower case?");
  let includeUpperCase = confirm("Would you like to include UPPER CASE?");
  let includeNumbers = confirm("Would you like to include numbers?");
  let includeSymbols = confirm("Would you like to include special characters?");

  if (includeLowerCase){
    charCodes = charCodes.concat(lowerCaseCharCodes);
  }
  if (includeUpperCase) {
    charCodes = charCodes.concat(upperCaseCharCodes);
  }
  if (includeNumbers) {
    charCodes =  charCodes.concat(numbersCharCodes);
  }
  if (includeSymbols) {
    charCodes = charCodes.concat(symbolsCharCodes);
  }
  return charCodes
}
