// function reverse(str) {
//     let lettersArray = str.split('');
//     let reversedLettersArray = lettersArray.reverse();
//     return reversedLettersArray.join('');
//  }

// let reverse = function (str) {
//     let lettersArray = str.split('');
//     let reversedLettersArray = lettersArray.reverse();
//     return reversedLettersArray.join('');
// }

// let logger = function(errorMsg) {
//     console.log("ERROR: " + errorMsg);
//  };
 
//  if (userInput < 0) {
//    logger("Invalid input");
//  }
// let nums = [3.14, 42, 4811];
// let halvedfn  = function (number){
//     return number/2;
// }
// // TODO: Write a mapping function
// // and pass it to .map()
// let halved = nums.map(halvedfn);

// console.log(halved);


let names = ["Chris", "Jim", "Sally", "Blake", "Paul"];
function initials(str){
 return str[0];
}
// TODO: Write a mapping function
// and pass it to .map()
let firstInitials = names.map(initials);

console.log(firstInitials);