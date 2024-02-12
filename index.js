function game() {
    function getComputerChoice() {
        let choices = ["Rock", "Paper", "Scissors"]
        return choices[Math.round(Math.random() * 2)];
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

    let rounds = 0;
    let playerWins = 0;
    let computerWins = 0;

    while (rounds < 5) {
        let playerSelection = String(prompt("Check the console and choose between Rock, Paper, and Scissors"))
        let results = playRound(playerSelection)
        console.log(results.message)
        if (results.winner == "player") {
            playerWins++
        } else {
            computerWins++
        }
        rounds++
    }

    if (playerWins > 2) {
        console.log("You Won!")
    } else {
        console.log("Computer Won!")
    }
}

game();