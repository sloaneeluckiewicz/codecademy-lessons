/* 
Utilize a do... while loop to determine the number of cups of sugar is required for a recipe
*/

const cupsOfSugarNeeded = 22;
let cupsAdded = 0;

do {
    cupsAdded++;
    console.log(`${cupsAdded} cup was added.`);
} while (cupsAdded < cupsOfSugarNeeded);