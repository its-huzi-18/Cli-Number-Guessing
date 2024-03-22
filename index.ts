#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "please guess a number between 1-6:",
  },
]);
if (answer.userGuessedNumber === randomNumber) {
  console.log("Congratulation! you guessed right Number");
} else {
  console.log("You guessed wrong number");
};
