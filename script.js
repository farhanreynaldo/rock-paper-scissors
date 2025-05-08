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

function playGame() {
    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice);
    }
}

let humanScore = 0;
let computerScore = 0;
playGame();
console.log(`Human score = ${humanScore}; computerScore = ${computerScore}`)