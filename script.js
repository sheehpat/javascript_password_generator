// Assignment Code
var generateBtn = document.getElementById("generate");

// Write password to the #password input
function writePassword(){

  var password = generatePassword();
  var passwordText = document.getElementById("password");

  passwordText.value = password;

  console.log(password);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Function generatePassword uses conditions to create a randomized password with users conditions

function generatePassword(){

  var charAmount = validateData();

  console.log(charAmount);

  var charCodes = getSelections();

  charCodes = validateSelections(charCodes);

  console.log(charCodes);

//Creates randomized password using selection criteria user inputted.
  let password = [];
  for (let i = 0; i < charAmount; i++){
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
    password.push(String.fromCharCode(characterCode));
  }
  password = password.join('');
  return password;
}

//Validates that the user selected a valid number of characters.
function validateData(){
  let charCheck = prompt("How many characters do you want for your password? (Please type a number between 8 and 128)");

  if (charCheck < 8 || charCheck > 128){
    alert("Your password needs to be between 8 and 128 characters!");
    return validateData();
  }
  return charCheck;
}

//Validates that the user selected at least one of the password character options.
function validateSelections(charCodes){
  let validateCodes = charCodes;
  if (validateCodes.length > 0){
    return validateCodes;
  }
  alert("Your need to select at least one character type!");
   return getSelections();
}

//Assorts the unicode character codes into an array using just low and high number of array.
function arraySort(low, high){
  let array =[];
  for (let i = low; i <= high; i++) {
    array.push(i); 
  }
  return array;
}
//Gets password selection options, and creates charCodes array for character options for password
function getSelections(){
  var charCodes = [];
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
  if (includeUpperCase){
    charCodes = charCodes.concat(upperCaseCharCodes);
  }
  console.log(charCodes);
  if (includeNumbers){
    charCodes =  charCodes.concat(numbersCharCodes);
  }
  console.log(charCodes);
  if (includeSymbols){
    charCodes = charCodes.concat(symbolsCharCodes);
  }
  console.log(charCodes);
  return charCodes;
}
