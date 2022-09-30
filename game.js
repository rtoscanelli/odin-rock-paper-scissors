function getComputerChoice() {
    let plays = ['Rock', 'Paper', 'Scissors'];
    let play = plays[Math.floor(Math.random() * 3)];
    return play;
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

function validPlay(playerPlay) {
    playerPlay = playerPlay.toLowerCase();
    plays = ['rock', 'paper', 'scissors'];
    if (plays.includes(playerPlay)){
        return true;
    }
    else {
        return false;
    }
}

let playerScore, computerScore;

function game() {
    let computerPlay, playerPlay = "";
    playerScore = computerScore = 0;
    for (let index = 0; index < 5; index++) {
        computerPlay = getComputerChoice();
        
        playerPlay = prompt("Chose a play: Rock, Paper or Scissors!");

        while(!validPlay(playerPlay)){
            playerPlay = prompt("Play does not exist. Chose a valid play: Rock, Paper or Scissors!");
        }

        console.log("ROUND:", index+1);
        console.log(playRound(playerPlay, computerPlay));
        console.log("Player Score:", playerScore, 
        "Computer Score:", computerScore);
        
        playerPlay = "";
    }
    
    console.log("");
    if (playerScore > computerScore)
        console.log("You Win! 🏆");
    else if (playerScore < computerScore)
        console.log("You Lose! 😢");
    else
        console.log("That's a Tie! 🙂");
}   