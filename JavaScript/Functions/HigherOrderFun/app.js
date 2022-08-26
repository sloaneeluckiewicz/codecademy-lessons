/* 
higher-order function: a function that either accepts functions as parameters, returns a function, or both
callback functions: functions that get invoked during the execution of the higher-order function 
*/

const addTwo = num => {
    return num+2;
}

const checkConsistentOutput = (func, val) => {
    let checkA = val + 2;
    let checkB = func(val);
    if (checkA === checkB) {
        return func(val);
    } else {
        return 'inconsistent results';
    }
};

console.log(checkConsistentOutput(addTwo, 22));