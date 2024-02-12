function game() {
    
    function getComputerChoice() {
        let choices = ["Rock", "Paper", "Scissors"]
        return choices[Math.round(Math.random() * 2)];
    }
    
    function playRound(playerSelection, computerSelection = getComputerChoice()) {
        let userChoice = playerSelection.toLowerCase();
        let computerChoice = computerSelection.toLowerCase();
    
        if (userChoice == "rock" && computerChoice == "scissors") {
            return "You Win! Rock beats Scissors";
        }
    
        else if (userChoice == "rock" && computerChoice == "paper") {
            return "You Lose! Paper beats Rock";
        }
    
        else if (userChoice == "paper" && computerChoice == "rock") {
            return "You Win! Paper beats Rock";
        }
    
        else if (userChoice == "paper" && computerChoice == "scissors") {
            return "You Lose! Scissors beats Paper";
        }
    
        else if (userChoice == "scissors" && computerChoice == "paper") {
            return "You Win! Scissors beats Paper";
        }
    
        else if (userChoice == "scissors" && computerChoice == "rock") {
            return "You Lose! Rock beats Scissors";
        }
    
        return playRound(playerSelection)
    }

    let contador = 1;

    while (contador <= 5) {
        let playerSelection = String(prompt("Check the console and choose between Rock, Paper, and Scissors"))
        console.log(playRound(playerSelection))
        contador++
    }
}

game();