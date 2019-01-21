let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber);
let earlyRegistration = false;
let runnerAge = 28;
if (earlyRegistration && runnerAge > 18) {
  raceNumber += 1000;
}
if (earlyRegistration && runnerAge > 18) {
  console.log(`Race starts at 9:30am. Your race number is ${raceNumber}.`);
} else if (!earlyRegistration && runnerAge > 18) {
  console.log(`Race starts at 11:00am. Your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
  console.log(`Race starts at 12:30pm. Your race number is ${raceNumber}.`);
} else {
  console.log("See registration desk");
}
