let computerChoiceDisplay = document.querySelector("#computer-choice");

let userChoiceDisplay = document.querySelector("#user-choice");

let resultDisplay = document.getElementById("result");

let possibleChoice = document.querySelectorAll(".button");

let chosen = "";

//the code that shows the user's choice on the page and calls that function that makes the computer choose

possibleChoice.forEach((choice) =>
  choice.addEventListener("click", () => {
    chosen = choice.id;
    userChoiceDisplay.innerHTML = chosen;
    generateComputerAnswer(comparing);
  })
);

/*
Making a function that randomly picks one of the options and shows it on the page,
then using a callback with the resultfunc function that compares the generated answer
to the user's choice and gives the game result.
*/

function generateComputerAnswer(resultfunc) {
  let answer = Math.floor(Math.random() * possibleChoice.length + 1);

  switch (answer) {
    case 1:
      computerChoiceDisplay.innerHTML = "rock";
      answer = "rock";
      break;
    case 2:
      computerChoiceDisplay.innerHTML = "paper";
      answer = "paper";
      break;
    case 3:
      computerChoiceDisplay.innerHTML = "scissors";
      answer = "scissors";
      break;
  }
  resultfunc(answer);
}

//writing a function that takes the generated answer and compares it to the user's choice to give the result of the game

function comparing(generatedAnswer) {
  if (generatedAnswer == chosen) {
    resultDisplay.innerHTML = "Draw!";
    console.log(0);
  } else if (generatedAnswer == "paper" && chosen == "rock") {
    resultDisplay.innerHTML = "You Lose!";
    console.log(1);
  } else if (generatedAnswer == "paper" && chosen == "scissors") {
    resultDisplay.innerHTML = "You Win!";
    console.log(2);
  } else if (generatedAnswer == "scissors" && chosen == "paper") {
    resultDisplay.innerHTML = "You Lose!";
    console.log(3);
  } else if (generatedAnswer == "scissors" && chosen == "rock") {
    resultDisplay.innerHTML = "You Win!";
    console.log(4);
  } else if (generatedAnswer == "rock" && chosen == "scissors") {
    resultDisplay.innerHTML = "You Lose!";
    console.log(5);
  } else if (generatedAnswer == "rock" && chosen == "paper") {
    resultDisplay.innerHTML = "You Win!";
    console.log(6);
  }
}
