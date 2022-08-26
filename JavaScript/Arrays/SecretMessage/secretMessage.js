let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

let removed = secretMessage.pop();
let added = secretMessage.push('to', 'Program');
let splice = secretMessage.splice(7,1,'right');
let shift=secretMessage.shift();
let unshift =secretMessage.unshift('Programming');
let superSplice= secretMessage.splice(6,5,'know');


console.log(secretMessage.join(' '))