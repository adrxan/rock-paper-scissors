let humanScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

function game() {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log("---------");
  }
  console.log(`Final score - Human: ${humanScore}, Computer: ${computerScore}`);
}

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * choices.length);
  console.log(`Computer plays ${choices[randomChoice]}`);
  return choices[randomChoice];
}

function getHumanChoice() {
  let input = prompt("Rock, Paper, or Scissors?").toLowerCase();
  if (input === "rock" || input === "paper" || input === "scissors") {
    console.log(`Human plays ${input}`);
    return input;
  } else {
    console.log("Skipped your turn");
  }
}

function playRound(humanSelection, computerSelection) {
  if (humanSelection == computerSelection) {
    console.log("It's a tie.");
  } else if (
    (humanSelection == "rock" && computerSelection == "scissors") ||
    (humanSelection == "paper" && computerSelection == "rock") ||
    (humanSelection == "scissors" && computerSelection == "paper")
  ) {
    console.log("Human wins!");
    humanScore++;
  } else {
    console.log("Computer wins!");
    computerScore++;
  }
}

game();
