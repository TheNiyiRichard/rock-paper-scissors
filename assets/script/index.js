const choices = ["rock", "paper", "scissors"];

function computerPlay() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) return "It's a tie!";
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function game(playerChoice) {
    const computerChoice = computerPlay();
    const result = playRound(playerChoice, computerChoice);

    document.getElementById("result").innerText = `Computer chose ${computerChoice}. ${result}`;
}

document.getElementById("rock").addEventListener("click", () => game("rock"));
document.getElementById("paper").addEventListener("click", () => game("paper"));
document.getElementById("scissors").addEventListener("click", () => game("scissors"));
