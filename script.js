function getComputerChoice() {
  num = Math.random();
  if (num < 0.33) {
    return "elephant";
  } else if (num < 0.67) {
    return "ant";
  } else {
    return "man";
  }
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
    (humanChoice == "elephant") & (computerChoice == "paper") ||
    (humanChoice == "ant") & (computerChoice == "man") ||
    (humanChoice == "man") & (computerChoice == "elephant")
  ) {
    currentStatus.textContent = `${humanChoice} is beaten by ${computerChoice}`;
    computerScore++;
  } else if (
    (humanChoice == "ant") & (computerChoice == "elephant") ||
    (humanChoice == "man") & (computerChoice == "ant") ||
    (humanChoice == "elephant") & (computerChoice == "man")
  ) {
    currentStatus.textContent = `${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else {
    currentStatus.textContent = `It's a draw!`;
    console.log(`It's a draw!`);
  }
}

function fetchImage(choice) {
  switch (choice) {
    case "elephant":
      return "images/elephant.png";
      break;
    case "ant":
      return "images/ant.png";
      break;
    case "man":
      return "images/man.png";
      break;
  }
}

let humanScore = 0;
let computerScore = 0;

const result = document.querySelector(".result");
const score = document.querySelector(".result > p");
const humanSign = document.querySelector(".human.sign img");
const computerSign = document.querySelector(".computer.sign img");
const currentStatus = document.querySelector(".current.status h2");

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    computerChoice = getComputerChoice();
    humanSign.src = fetchImage(button.id);
    computerSign.src = fetchImage(computerChoice);
    playRound(button.id, computerChoice);
    score.textContent = `Human ${humanScore} - ${computerScore} Computer`;
    result.appendChild(score);
    checkWinner(humanScore, computerScore);
  });
});
