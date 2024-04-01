const prompt = require("prompt-sync")();

const target1 = 10 + Math.round(Math.random() * 90);
const target2 = Math.round(Math.random() * 100);

console.log(target1);
console.log(target2);

let guesses = 0;

while (true) {
  guesses++;

  const guess = Number(prompt("Guess the Number (0-100): "));
  //console.log(guess);

  if (guess > target1) {
    console.log("Your guess is too high.");
    continue;
  } 
  if (guess < target1) {
    console.log("Your guess is too low.");
    continue;
  } 
  
  else {
    console.log("You Guess It!");
    break;
  }
}

console.log("You gueesed the number in", guesses, "tries!");

