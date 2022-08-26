let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegistration = false;

let runnerAge = 22;

if (runnerAge > 18 && earlyRegistration === true){
  raceNumber +=1000;
};

if (runnerAge > 18 && earlyRegistration === true) {
  console.log(`Racer number ${raceNumber} will run at 9:30am`);
} else if (runnerAge > 18 && earlyRegistration === false) {
  console.log(`Racer number ${raceNumber} will run at 11:00am`);
} else if (runnerAge < 18) {
  console.log(`Racer number ${raceNumber} will run at 12:30pm`);
} else if (runnerAge === 18) {
  console.log('See registration desk');
} else {
  console.log('Invalid');
};
