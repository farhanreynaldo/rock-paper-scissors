function getComputerChoice() {
    num = Math.random()
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

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice == "rock") {
        if (computerChoice == 'paper') {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            computerScore++;
        } else if (computerChoice == "scissors") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            humanScore++;
        } else {
            console.log(`It's a draw!`)
        }
    } else if (humanChoice == 'scissors') {
        if (computerChoice == 'paper') {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            humanScore++;
        } else if (computerChoice == "rock") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            computerScore++;
        } else {
            console.log(`It's a draw!`)
        }
        
    } else { // paper
        if (computerChoice == 'scissors') {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            computerScore++;
        } else if (computerChoice == "rock") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            humanScore++;
        } else {
            console.log(`It's a draw!`)
        }
    }
}


let humanScore = 0;
let computerScore = 0;
const rock = document.querySelector('#rock');
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const result = document.querySelector("#result");
const score = document.createElement("p");

function checkWinner(humanScore, computerScore) {
    if (humanScore >= 5 || computerScore >= 5) {
        if (humanScore >= 5) {
            score.textContent = "You win!";
        } else {
            score.textContent = "You lose!";
        }
    }
};

rock.addEventListener("click", () => {
    computerChoice = getComputerChoice();
    playRound(rock.id, computerChoice);
    score.textContent = `Human score = ${humanScore}; computerScore = ${computerScore}`;
    result.appendChild(score);
    checkWinner(humanScore, computerScore);
    
});
paper.addEventListener("click", () => {
    computerChoice = getComputerChoice();
    playRound(paper.id, computerChoice);
    score.textContent = `Human score = ${humanScore}; computerScore = ${computerScore}`;
    result.appendChild(score);
    checkWinner(humanScore, computerScore);
});
scissors.addEventListener("click", () => {
    computerChoice = getComputerChoice();
    playRound(scissors.id, computerChoice);
    score.textContent = `Human score = ${humanScore}; computerScore = ${computerScore}`;
    result.appendChild(score);
    checkWinner(humanScore, computerScore);
});