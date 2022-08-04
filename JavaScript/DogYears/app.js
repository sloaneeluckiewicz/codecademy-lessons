// convert my age from human years to dog years
// first two years of a dog's life count as 10.5 dog years each 
// each year following equates to 4 dog years

// constant variable of my current age 
const myAge=22;

// changing variable uses let 
let earlyYears=2;

// accounting for first 2 years of dog's life
earlyYears= earlyYears*10.5;

// already accounted for the first 2 years so subtract 2 from current age
let laterYears= myAge-2;

// calculate the number of dog years accounted for by my later years
laterYears *=4;

// adding early and later years together to get age in dog years
let myAgeInDogYears = earlyYears + laterYears;

// returns string with all lowercase letters
let myName ='Sloane'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)