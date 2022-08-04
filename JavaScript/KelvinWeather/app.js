// constant variable of kelvin
const kelvin =0;

// kelvin to celsius
let celsius= kelvin - 273;

// celsius to fahrenheit
let fahrenheit= celsius*(9/5)+32;

// rounding down the fahrenheit temp
fahrenheit= Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);