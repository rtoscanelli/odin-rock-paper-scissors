// Get all DOM elements that are needed
const info = document.querySelector('.info');
const finalInfo = document.querySelector('.final-info');
const plays = document.querySelectorAll('.play');

// Create Elements
const roundResult = document.createElement('div');
roundResult.id = 'round-result';
const score = document.createElement('div');
score.id = 'score';
const finalResult = document.createElement('div');
finalResult.id = 'final-result';
const restart = document.createElement('button');
restart.id = 'restart';
restart.textContent = 'Restart';

let playerScore, computerScore;
playerScore = computerScore = 0;

plays.forEach((playerChoice) => {
    playerChoice.addEventListener('click', () => {
        if (playerScore == 5 || computerScore == 5) {
            return;
        }
        else game(playerChoice.id);
    });
})

restart.addEventListener('click', restartGame);

function restartGame() {
    playerScore = computerScore = 0;
    info.removeChild(roundResult);
    info.removeChild(score);
    finalInfo.removeChild(finalResult);
    finalInfo.removeChild(restart);
}

function game(playerChoice) {
    info.appendChild(roundResult);
    info.append(score);
    roundResult.textContent = playRound(playerChoice, getComputerChoice())
    score.textContent = playerScore + '-' + computerScore;
    if (playerScore == 5) {
        finalResult.textContent = 'You Win!!';
        finalInfo.appendChild(finalResult);
        finalInfo.appendChild(restart);
    }
    else if (computerScore == 5) {
        finalResult.textContent = 'You Lose!!'
        finalInfo.appendChild(finalResult);
        finalInfo.appendChild(restart);
    }
    return ;
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    computer = computerChoice.toLowerCase();
    
    if (playerChoice == computer) {
        return "That's a tie! " + computerChoice + " vs " + 
        computerChoice + ".";
    }
    else if (playerChoice == "rock" && computer == "scissors"){
        playerScore++;
        return "You win! Rock beats Scissors";
    }
    else if (playerChoice == "rock" && computer == "paper"){
        computerScore++;
        return "You lose! Paper beats Rock.";
    }
    else if (playerChoice == "paper" && computer == "rock"){
        playerScore++;
        return "You win! Paper beats Rock.";
    }
    else if (playerChoice == "paper" && computer == "scissors"){
        computerScore++;
        return "You lose! Scissors beats Paper.";
    }
    else if (playerChoice == "scissors" && computer == "paper") {
        playerScore++;
        return "You win! Scissors beats paper.";
    }
    else if (playerChoice == "scissors" && computer == "rock") {
        computerScore++;
        return "You lose! Rock beats Scissors.";
    }
}

function getComputerChoice() {
    let plays = ['Rock', 'Paper', 'Scissors'];
    let play = plays[Math.floor(Math.random() * 3)];
    return play;
}