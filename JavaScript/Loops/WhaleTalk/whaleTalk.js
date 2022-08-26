const input= 'My favorite soup is french onion soup';
const vowels =['a', 'e', 'i', 'o', 'u'];
let resultArray=[];

for (let i = 0; i< input.length; i++){
  //console.log('i is ' + i);
  //console.log(input[i]);
  if (input[i] === 'e'){
    resultArray.push(input[i]);
    //console.log(resultArray)
  } else if (input[i] === 'u'){
    resultArray.push(input[i]);
    //console.log(resultArray)
  }
  for(let j = 0; j< vowels.length; j++){
    //console.log('j is '+ j);
    if (input[i] === vowels[j]){
      //console.log('Both arrays have '+ input[i]);
      resultArray.push(input[i]);
      //console.log(resultArray);
    }
  }
}

let resultString = resultArray.join(' ');
console.log(resultString);