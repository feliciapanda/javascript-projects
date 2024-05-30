const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}
let startsWithA = function(input) {
    return input[0].toLowerCase() === "a";
}
console.log(getValidInput("Enter a string that starts with 'a': ", startsWithA));
// TODO 1: write a validator 
// that ensures input starts with "a"

// TODO 2: write a validator 
// that ensures input is a vowel
let inputIsVowel = function(inputWord){
    return inputWord[0].toLowerCase().includes("a","e","i","o","u");
}
console.log(getValidInput("Enter a string that is a vowel: ", inputIsVowel));
// Be sure to test your code!


let fileLogger = function(msg) {

  // Put the message in a file
}

function logError(msg, logger) {
  let errorMsg = 'ERROR: ' + msg;
  logger(errorMsg);
}

logError('Something broke!', fileLogger);