function computerPlay() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
        if (playerSelection === computerSelection) {
            return "It's a tie!"
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            return "You lose! Paper beats Rock."
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            return "You win! Rock beats Scissors."
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            return "You win! Paper beats Rock."
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            return "You lose! Scissors beat Rock."
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            return "You lose! Rock beat Scissors."
        } else {
            return "You win! Scissors beats Paper"
        }
    }

function game() {
    for (let i = 0; i < 5; i++) {
    console.log(playRound(prompt("Enter your move"),computerPlay()))
}
}
game()