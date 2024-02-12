function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.round(Math.random() * 2)];
}