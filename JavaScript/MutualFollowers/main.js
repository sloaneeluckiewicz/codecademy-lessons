/*
Utilize nested for loops to:
Create two arrays of "friends" from two mock users so that you can extract the names of the followers who exist in both lists.
*/

const bobsFollowers= ['Jackie', 'Mason', 'Kaden', 'Remi'];
const tinasFollowers= ['Sloane', 'Kaden', 'Mason'];
const mutualFollowers= [];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(bobsFollowers[i]);
        }
    }
};

console.log(mutualFollowers);