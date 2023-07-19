playerScore = 0;
computerScore = 0;

function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let randomC = getComputerChoice();
let computerChoice = randomC.toLowerCase()
console.log(computerChoice)

let playerC = prompt("Please select Rock, Paper, or Scissors");
let playerChoice = playerC.toLowerCase()
console.log(playerChoice)

function playRound(playerChoice, computerChoice) {
    if (playerChoice === 'rock' && computerChoice === 'scissors') {  
        playerScore ++;
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        playerScore ++;
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        playerScore ++;
    }
}

console.log('Player Score: ' + playerScore)