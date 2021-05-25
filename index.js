const input = require('readline-sync');
let str = "LaunchCode";
let wordInput = input.question("Please enter a word that will be moved around ");
let letterInput = input.question("Please enter the number of letters you would like to move to the end of LaunchCode ");


//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let str2 = wordInput.slice(0,letterInput);
let str3 = wordInput.slice(letterInput) + str2;
console.log(str3);
console.log("\n");

//Use a template literal to print the original and modified string in a descriptive phrase.
// console.log(`The original string ${str} and your new string ${str3}!`);

//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.


//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (letterInput > str.length) {
  console.log("Sorry your input is larger than the word");

} else {
  console.log(`The original string ${str} and your new string ${str3}!`);
}
