// Chapter7
// const input = require("readline-sync");
// const testName = input.question("What's your name?");
// const testName = "Taylor Swift";

// const nameArray = testName.split(" ");
// console.log(nameArray);
// const firstName = nameArray[0];
// const lastName = nameArray[1];
// console.log(firstName);
// console.log(lastName);

// const firstLetterFirstName = nameArray[0][0];
// const firstLetterLastName = nameArray[1][0];
// console.log(firstLetterFirstName);
// console.log(firstLetterLastName);

// const output = [firstLetterFirstName, firstLetterLastName].join("");
// console.log(output);
// console.log(firstLetterFirstName + firstLetterLastName);
// console.log(`Your initials are: ${output}`);

// Chapter 9
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// for (let i = 0; i < 10; i += 3) {
//     console.log(i);
// }

// let index = 10;
// while (index > 0) {
//     console.log(`Hello!${index}`);
//     index--;
// }

// let index2 = 10;
// while (index > 0 && index2>0) {
//     console.log(`Hello!${index}`);
//     console.log(`Hello!2 ${index2}`);
//     index--;
//     index2-=3;
// }
// Chapter 11
// We can use recursion to remove all of the ‘i’ entries from the array ['One', 'i', 'c', 'X', 'i', 'i', 54].

// Consider the code sample below, which declares the removeI function.

// function removeI(arr) {
//     if (baseCase is true){
//     //return final array
//     //end recursion
//     } else {
//     //remove one 'i' entry from array
//     //call removeI function again
//     }
// };
// Which TWO of the following work as a base case for the function? Feel free to test the options in VScode to check your thinking.

// !arr.includes('i')
// arr.includes('i')
// arr.indexOf('i')===-1
// arr.indexOf('i') !== -1


// let arr = ['One', 'i', 'c', 'X', 'i', 'i', 54]
// function removeI(arr) {
//     if (!arr.includes("i")){
//         return arr;
//     //return final array
//     //end recursion
//     } else {
//     //remove one 'i' entry from array
//     //call removeI function again
//     }
// };

// The factorial of a number (n!) is the product of a positive, whole number and all the positive integers below it.

// For example, four factorial is 4! = 4*3*2*1 = 24, and 5! = 5*4*3*2*1 = 120.

// Consider the code sample below, which declares the factorial function.

// function factorial(integer) {
//     if (baseCase is true){
//     //solve last step
//     //end recursion
//     } else {
//     //call factorial function again
// //     }
// };
// Which of the following should be used as base case for the function?

// integer === 1
// integer < 1
// integer === 0
// integer < 0 
function combineEntries(arrayName){
    if (arrayName.length <= 1){
        return arrayName[0];
    } else {
        //call combineEntries again
    }
}
combineEntries(["L","C","1"]);