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
    gameContainer.appendChild(restartBtn);
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

    if (playerWins >= 5) {
        endGame("green", "You won the game!");
    } else if (computerWins >= 5) {
        endGame("red", "Computer won the game!");
    }
}

function playRound(playerSelection) {
    if (roundsPlayed >= 9 || playerWins >= 5 || computerWins >= 5) {
        return;
    }

    const results = getResults(playerSelection);

    displayResults(results);
}

// Global variables
const buttons = document.querySelectorAll(".selection");
let gameContainer = document.querySelector(".gameContainer");
let currentRound = document.querySelector("#round");
let message = document.querySelector(".message");
let playerScore = document.querySelector("#player-score");
let computerScore = document.querySelector("#computer-score");
let restartBtn = document.createElement("button");
restartBtn.textContent = "Restart Game";
restartBtn.classList = "restartBtn";
let roundsPlayed = 0;
let playerWins = 0;
let computerWins = 0;

function playRoundEventListener(elem) {
    elem.addEventListener("click", () => {
        playRound(elem.id);
    });
}

buttons.forEach((elem) => playRoundEventListener(elem));

restartBtn.addEventListener("click", () => {
    location.reload();
});