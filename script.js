function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  console.log(choices[randomChoice]);
}

getComputerChoice();
