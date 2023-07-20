let playerScore = 0;
let computerScore = 0;
let playerChoice = '';
let computerChoice = '';

function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getPlayerChoice() {
    let playerC = prompt("Please select Rock, Paper, or Scissors");
    playerChoice = playerC ? playerC.toLowerCase() : ''; // Handle Cancel or empty input
    return playerChoice;
}

let randomC = getComputerChoice();
computerChoice = randomC.toLowerCase();

function playRound() { // Remove the computerChoice parameter
    computerChoice = computerChoice.toLowerCase(); // Convert to lowercase for consistent comparison
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        // Player wins this round
        playerScore++;
    } else if (
        (playerChoice === 'scissors' && computerChoice === 'rock') ||
        (playerChoice === 'paper' && computerChoice === 'scissors') ||
        (playerChoice === 'rock' && computerChoice === 'paper')
    ) {
        // Computer wins this round
        computerScore++;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        computerChoice = getComputerChoice();
        playerChoice = getPlayerChoice();
        playRound(); // Remove the computerChoice argument
        
        console.log('Player Choice:', playerChoice);
        console.log('Computer Choice:', computerChoice);
        console.log('Player Score:', playerScore);
        console.log('Computer Score:', computerScore);
    }
    
    // Compare playerScore and computerScore to determine the winner
    let winner;
    if (playerScore > computerScore) {
        winner = 'Player';
    } else if (playerScore < computerScore) {
        winner = 'Computer';
    } else {
        winner = 'It\'s a Tie';
    }

    // Display the winner in a popup
    alert('Game Over!\n\nPlayer Score: ' + playerScore + '\nComputer Score: ' + computerScore + '\n\nWinner: ' + winner);
}

game();