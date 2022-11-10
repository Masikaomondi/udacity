console.log("Hiya friends!");
console.log(10 * 2 + 24 - 2);
var joke = "Why couldn't the shoes go out and play? \n They were all \"tied\" up\!"
console.log(joke);

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
const myLine = "FirstLine\n\t\\SecondLine\nThirdLine";

//concatenation of two strings
const ourStr = "This is the start. " + "This is the end. ";
console.log(ourStr);

//Concatenating Strings with the Plus Equals Operator
let mySent = "This is the first sentence. ";
mySent += "This is the second sentence.";
console.log(mySent);

//Constructing Strings with Variables
const myName = "MasikaOmondi";
const myString = "Hello, my name is " + myName + ", and I am well!";
console.log(myString);

//Appending Variables to Strings
const someAdjective = "awsome.!! ";
let someStr = "Learning to code is ";
someStr += someAdjective;
console.log(someStr);

//Find the Length of a String
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;
console.log(lastNameLength);

//Use Bracket Notation to Find the First Character in a String
let firstLetterOfLastName = "";
const firstName = "Lovelace";
firstLetterOfFirstName = firstName[0]
console.log(firstLetterOfFirstName);
