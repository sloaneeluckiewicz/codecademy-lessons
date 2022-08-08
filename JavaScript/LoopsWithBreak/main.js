/*
break keyword lets programs break out of the loop from within the loop's block.
when we want to stop a loop from continuing to execute before the original stopping condition is met, use break.
*/

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++){
    console.log(rapperArray[i]); 

    if (rapperArray[i] === 'Notorious B.I.G.') {
        break;
    }
}

console.log("And if you don't know, now you know.")