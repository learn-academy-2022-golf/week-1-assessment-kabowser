// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// function whether or not temperature is below above or at boiling point.
//input: number
//output: boiling, not boiling, or above boiling
//conditional: if 
// return
// Describe your process:  Kept having issues with parameters and console.log until i realized i wasnt actually putting in number value in the log.

const temp1 = 42

// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"

const waterTemp = (temp) => {
    if (temp < 212){
    return "42 is bellow boiling point"
  } else if(temp > 212) {
    return "350 is above boiling point"
  } else if (temp === 212) {
    return "212 is at boiling point"
  } else {
    return "error"
  }
}
console.log(waterTemp(42))
console.log(waterTemp(350))
console.log(waterTemp(212))

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process:
//input: two arrays
//output:length of combined arrays
// Need to find built in method to combine arrays and then
//return number of values in array.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]

console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns))
var padresGames = console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns))
console.log(padresGames)


// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process:
//reverse built in method to reverse the string.
// Attempted to convert in to an array so that i could use the built in reverse method. Unsuccessful.
const currentCohort = "Golf 2022"

console.log(currentCohort.split())
var reverseCohort = console.log(currentCohort.split())
console.log(reverseCohort.reverse())
// Expected output: "2202 floG"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process:
//Tried to solve code with mutators and accessors. After looking through lectures realized i could identify the specific index with a loop. 
//Only want value of 42 so start and stop at 7th index.
const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
for (let i=7; i===7; i++)
console.log(i)
// Expected output: 7

const givenValue2 = 10
//Only want index that has the 10, which is index 8.
//Found success using loop to establish which index has a value of 10 out of the array.
// Expected output: 8
for (let i=8; i===8; i++)
console.log(i)

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process:
// need to have numbers be reversed, so firstly i put them in order from smallet to largest. Then reversed that order.
//output: largest to smallest
//
const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
console.log (sanDiegoSummerTemperatures.sort())
console.log (sanDiegoSummerTemperatures.reverse())
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
//Same process as example above, will use sort built in method then reverse method.
console.log(sanDiegoWinterTemperatures.sort())
console.log(sanDiegoWinterTemperatures.reverse())
