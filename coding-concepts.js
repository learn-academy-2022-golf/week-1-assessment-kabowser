// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2022"
//console.log(cohort.length)

// a) Your answer: Will return 10
// b) Verify and explain: .length built in method count number of characters in a string including spaces.

// --------------------2) What will this log?

const greeting = "Hello World!"
//console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: [] is a built in method that gives us whatever value is in the 4th index.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
//console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: Since the const index was assigned 1, it gives us the string that is in the 1 index spot "ruby"

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: Code doesn't work
// b) Verify and explain: toUpperCase built in method only works for strings, the const weekendDays is an array.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: wont work
// b) Verify and explain: number is the answer, im very confused with the .length. I'm not certain why the console.log is giving me: number in terminal.
