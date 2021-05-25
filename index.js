const input = require('readline-sync');
let str = "LaunchCode";
let wordInput = input.question("Please enter a word that will be moved around ");
let letterInput = input.question("Please enter the number of letters you would like to move to the end of " + wordInput+" " );
letterInput = Number(letterInput);


//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.



//Use a template literal to print the original and modified string in a descriptive phrase.
// console.log(`The original string ${str} and your new string ${str3}!`);

//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.


//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (letterInput > wordInput.length) { // if the number they input is greater than the length of the word they choose, the number will default to 3
console.log("Sorry your input is larger than the word, input will default to 3");
letterInput = 3;
}

let str2 = wordInput.slice(0,letterInput);
let str3 = wordInput.slice(letterInput) + str2;

console.log(`The original string ${wordInput} and your new string ${str3}!`);

