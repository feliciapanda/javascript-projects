// Chapter7
// const input = require("readline-sync");
// const testName = input.question("What's your name?");
const testName = "Taylor Swift";

const nameArray = testName.split(" ");
console.log(nameArray);
const firstName = nameArray[0];
const lastName = nameArray[1];
console.log(firstName);
console.log(lastName);

const firstLetterFirstName = nameArray[0][0];
const firstLetterLastName = nameArray[1][0];
console.log(firstLetterFirstName);
console.log(firstLetterLastName);

const output = [firstLetterFirstName, firstLetterLastName].join("");
console.log(output);
console.log(firstLetterFirstName + firstLetterLastName);
console.log(`Your initials are: ${output}`);