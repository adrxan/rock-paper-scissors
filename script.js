const humanScore = document.querySelector("#humanScore");
const computerScore = document.querySelector("#computerScore");
const choices = ["rock", "paper", "scissors"];

const comTurnEmote = document.querySelector("#comTurnEmote");
const playerTurnEmote = document.querySelector("#playerTurnEmote");

const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
const choiceButtons = document.querySelector("#choiceButtons");

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

const emotes = {
  rock: "🪨",
  paper: "📄",
  scissors: "✂️",
};

function setEmote(result, element) {
  element.textContent = emotes[result] || "";
}

function computerEmote(result) {
  setEmote(result, comTurnEmote);
}

function playerEmote(result) {
  setEmote(result, playerTurnEmote);
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie.";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win this round!";
  } else {
    return "Computer wins this round!";
  }
}

function checkScore() {
  const humanScoreValue = Number(humanScore.textContent);
  const computerScoreValue = Number(computerScore.textContent);
  if (humanScoreValue < 5 && computerScoreValue < 5) {
    createBtn("Next Round");
  } else if (humanScoreValue === 5) {
    message.textContent = "You win the game! 🎊";
    createBtn("Reset");
  } else if (computerScoreValue === 5) {
    message.textContent = "Computer wins ☹️ try again.";
    createBtn("Reset");
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    playerEmote(playerChoice);
    const computerChoice = getComputerChoice();
    computerEmote(computerChoice);
    const result = determineWinner(playerChoice, computerChoice);

    if (result === "You win this round!") {
      humanScore.textContent++;
    } else if (result === "Computer wins this round!") {
      computerScore.textContent++;
    }
    message.textContent = result;
    checkScore();
  });
});

function createBtn(text) {
  choiceButtons.style.display = "none";
  const buttonsDiv = document.querySelector("#buttons");
  const newBtn = document.createElement("button");
  newBtn.textContent = text;
  newBtn.style.width = "auto";
  buttonsDiv.appendChild(newBtn);
  newBtn.addEventListener("click", () => {
    switch (text) {
      case "Next Round":
        choiceButtons.style.display = "block";
        newBtn.style.display = "none";
        message.textContent = "...Go!";
        break;
      case "Reset":
        choiceButtons.style.display = "block";
        newBtn.style.display = "none";
        message.textContent = "...Go!";
        humanScore.textContent = 0;
        computerScore.textContent = 0;
        comTurnEmote.textContent = "🤜";
        playerTurnEmote.textContent = "🤛";
        break;
    }
  });
}
