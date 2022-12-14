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
const someAdjective = "awesome.!! ";
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

//Understand String Immutability
let myWord = "Jello World..!";
myWord = "Hello World..!";
console.log(myWord);

//Use Bracket Notation to Find the Nth Character in a String
const newName = "MASIKAOMONDI";
const thirdLetterOfNewName = newName[2]
console.log(thirdLetterOfNewName);

//Use Bracket Notation to Find the Last Character in a String
const middleName = "Smith";
const lastLetterOfMiddleName = middleName[middleName.length - 1];
console.log(lastLetterOfMiddleName);

//Use Bracket Notation to Find the Last Character in a String
const someName = "Peter";
const secondToLastLetterOfSomeName = someName[someName.length - 2];
console.log(secondToLastLetterOfSomeName);

//Word Blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";
console.log(wordBlanks);

//Store Multiple Values in one Variable using JavaScript Arrays
const myArray = ["peanut butter", 12, "popcorn"];
console.log(myArray);

//Nest one Array within Another Array
const myTeams = [["Arsenal", 37], ["ManCity", 32]];
console.log(myTeams);

//Access Array Data with Indexes
const myNewArray = [50, 60, 70];
const myData = myNewArray[0];
console.log(myNewArray[0]);

//changing array data
const someData = [10, 25, 35];
someData[0] = 15;
console.log(someData);

//Access Multi-Dimensional Arrays With Indexes
const myDimension = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14]];
const myLog = myDimension[2][1];
console.log(myDimension);

//Manipulate Arrays With push()
const myPush = [["John", 23], ["cat", 2]];
myPush.push(["dog", 13]);
console.log(myPush);
