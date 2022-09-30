function getComputerChoice() {
    let plays = ['Rock', 'Paper', 'Scissors'];
    let play = plays[Math.floor(Math.random() * 3)];
    return play;
}

function singleRound(playerChoice, computerChoice) {
    //1 - convert/accept case insesitive player choice
    playerChoice = playerChoice.toLowerCase()
    computer = computerChoice.toLowerCase()
    //2 - compare both choices
    if (playerChoice == computer) {
        return "That's a tie! " + computerChoice + " vs " + computerChoice + "."
    }
    else if (playerChoice == "rock" && computer == "scissors")
        return "You win! Rock beats Scissors"
    
    else if (playerChoice == "rock" && computer =="paper")
        return "You lose! Paper beats Rock."
    
    else if (playerChoice == "paper" && computer == "rock")
        return "You win! Paper beats Rock."
    
    else if (playerChoice == "paper" && computer =="scissors")
        return "You lose! Scissors beats Paper."

    else if (playerChoice == "scissors" && computer == "paper")
        return "You win! Scissors beats paper."

    else if (playerChoice == "scissors" && computer =="rock")
        return "You lose! Rock beats Scissors."
}