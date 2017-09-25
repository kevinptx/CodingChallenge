//Declare two variables, a string and an integer named fullName and birthYear, and set them equal to "Mark Twain" and 1835.

var fullName = "Mark Twain";
var birthYear = 1835;

//Declare an empty array and name it myArray.
myArray = []

//Add the variables from the first question (fullName and birthYear) to myArray using the push method.  Print (console.log) myArray to the console.
//The push() method adds one or more elements to the end of an array and returns the new length of the array.
myArray.push({
  fullName: fullName,
  birthYear: birthYear
  });
console.log(myArray)

// Declare a variable named splitName. Set it equal to the variable from question 1, fullName. Split fullName into two separate objects in an array by using the split method.  splitName should equal ["Mark", "Twain"] when printed to the console.  Print splitName to the console.
//The JavaScript split() method Splits a string into an array of substrings:
//var string = "What is your name?";
//var response = string.split(" ");
//What,is,your,name?
//The split() method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
var splitName = fullName.split(' ');
console.log(splitName);


// Write a simple function that takes no parameters called sayHello.  When called, this function should print "Hello, ____!" to the console, where the blank is equal to the first index value in the splitName array from the previous question.  Call the function. Remember that the first index value of an array is [0], the 2nd would be [1] and so on...
function sayHello() {
  var firstIndex = splitName[0];
  console.log('Hello, ' + firstIndex + '!')
}
  sayHello();

  // Write another function called calcAge.  This function should take one parameter, a year, and it should return the implied age of Mark Twain.  Call the function passing the current year as the parameter.
  function calcAge(now) {
    return (now - birthYear);
  }
  console.log(calcAge(2017));
  //2017 - 1835 = 182

  // Starting with the basic function given below, write a function called sumOddNumbers that will print to the console and return the sum of all the odd numbers from 1 to 3000.  Consider using a loop, and don't forget to call the function afterwards!//

//This is my preferred way:
function sumOddNumbers() {
    var sum = 0;
    for (let i = 0; i <= 3000; i++){
      if (i % 2 === 1) {
        //you could also write: if (i % 2 !== 0)
        sum = sum + i;
        //or sum += i;
      }
    }
    console.log(sum);
    return sum;
}
sumOddNumbers();
//the answer should be 2250000


//Another way:
function sumOddNumbers(max) {
  let sum = 0;

  for(let i = 1; i <= max; i+=2){
    sum += i;
  }

  console.log(sum);
  return sum;
}
sumOddNumbers(3000);


//Another Way:
let sum = 0;
for (let i = 1; i < 3000; i += 2) {
    sum += i;
}


// Another Way:
function sumOddNumbers() {
    var sum = 0;
    for (let i = 1; i <= 3000; i += 2) {
        sum += i;
        //note: this is the same as sum = sum + i;
    }
    console.log(sum);
    return sum;
}
sumOddNumbers();
