function getComputerChoice() {
  num = Math.random();
  if (num < 0.33) {
    return "rock";
  } else if (num < 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  choice = prompt("Choose between rock, paper, or scissors");
  return choice;
}

function checkWinner() {
  if (humanScore >= 5 || computerScore >= 5) {
    if (humanScore >= 5) {
      score.textContent = "You win!";
    } else {
      score.textContent = "You lose!";
    }
    humanScore = 0;
    computerScore = 0;
  }
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (
    (humanChoice == "rock") & (computerChoice == "paper") ||
    (humanChoice == "paper") & (computerChoice == "scissors") ||
    (humanChoice == "scissors") & (computerChoice == "rock")
  ) {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  } else if (
    (humanChoice == "paper") & (computerChoice == "rock") ||
    (humanChoice == "scissors") & (computerChoice == "paper") ||
    (humanChoice == "rock") & (computerChoice == "scissors")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`It's a draw!`);
  }
}

let humanScore = 0;
let computerScore = 0;

const result = document.querySelector("#result");
const score = document.createElement("p");

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    computerChoice = getComputerChoice();
    playRound(button.id, computerChoice);
    score.textContent = `Human score = ${humanScore}; computerScore = ${computerScore}`;
    result.appendChild(score);
    checkWinner(humanScore, computerScore);
  });
});
