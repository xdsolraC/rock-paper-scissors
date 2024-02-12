function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.round(Math.random() * 2)];
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

const buttons = document.querySelectorAll(".selection");
let rounds = 0;
let playerWins = 0;
let computerWins = 0;

function playRoundEventListener(elem) {
    elem.addEventListener("click", () => {
        playRound(elem.id);
    });
}

buttons.forEach((elem) => playRoundEventListener(elem));
