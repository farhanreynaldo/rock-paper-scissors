function getComputerChoices() {
    num = Math.random()
    if (num < 0.33) {
        return "Rock";
    } else if (num < 0.67) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log(getComputerChoices())