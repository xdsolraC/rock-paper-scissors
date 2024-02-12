function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.floor(Math.random() * choices.length)];
}

function getResults(playerSelection, computerSelection = getComputerChoice()) {
    const userChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    if (userChoice === computerChoice) {
        return { winner: null, message: "Draw!" };
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return {
            winner: "player",
            message: `You Win! ${userChoice} beats ${computerChoice}`,
        };
    } else {
        return {
            winner: "computer",
            message: `You Lose! ${computerChoice} beats ${userChoice}`,
        };
    }
}

function disableButtons(nodeList) {
    nodeList.forEach((button) => {
        button.removeEventListener("click", playRoundEventListener);
        button.disabled = true;
    });
}

function endGame(messageColor, endMessage) {
    message.style.color = messageColor;
    message.textContent = endMessage;
    disableButtons(buttons);
}

function displayResults(results) {
    message.textContent = results.message;

    if (results.winner === "computer" || results.winner === "player") {
        roundsPlayed++;
        currentRound.textContent = roundsPlayed;
    }

    if (results.winner === "computer") {
        computerWins++;
    } else if (results.winner === "player") {
        playerWins++;
    }

    playerScore.textContent = playerWins;
    computerScore.textContent = computerWins;
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    let userChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();

    if (userChoice == "rock" && computerChoice == "scissors") {
        return {
            winner: "player",
            message: "You Win! Rock beats Scissors"
        }
    }

    else if (userChoice == "rock" && computerChoice == "paper") {
        return {
            winner: "computer",
            message: "You Lose! Paper beats Rock"
        }
    }

    else if (userChoice == "paper" && computerChoice == "rock") {
        return {
            winner: "player",
            message: "You Win! Paper beats Rock"
        }
    }

    else if (userChoice == "paper" && computerChoice == "scissors") {
        return {
            winner: "computer",
            message: "You Lose! Scissors beats Paper"
        }
    }

    else if (userChoice == "scissors" && computerChoice == "paper") {
        return {
            winner: "player",
            message: "You Win! Scissors beats Paper"
        }
    }

    else if (userChoice == "scissors" && computerChoice == "rock") {
        return {
            winner: "computer",
            message: "You Lose! Rock beats Scissors"
        }
    }

    return playRound(playerSelection)
}

// Global variables
const buttons = document.querySelectorAll(".selection");
let gameContainer = document.querySelector(".gameContainer");
let currentRound = document.querySelector("#round");
let message = document.querySelector(".message");
let playerScore = document.querySelector("#player-score");
let computerScore = document.querySelector("#computer-score");
let rounds = 0;
let playerWins = 0;
let computerWins = 0;

function playRoundEventListener(elem) {
    elem.addEventListener("click", () => {
        playRound(elem.id);
    });
}

buttons.forEach((elem) => playRoundEventListener(elem));
