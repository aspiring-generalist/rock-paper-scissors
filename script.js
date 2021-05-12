//Computer Selection
function computerPlay() {
    let selection = Math.floor(Math.random() * 3);
    let computerSelection;

    if (selection === 0) {
        computerSelection = "rock";
    } else if (selection === 1){
        computerSelection = "paper";
    } else {
        computerSelection = "scissors"
    }

    return computerSelection
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    //Computer selection
    const computerSelection = computerPlay();
    
    //User input
    let playerInput = prompt("Rock, Paper, or Scissors?");
    let playerSelection = playerInput.toLowerCase();

    //Play a round of the game
    function playRound(playerSelection, computerSelection) {
        let result;
        if (playerSelection === "rock") {
            switch(computerSelection) {
                case "paper":
                    result = "Lose!";
                    break;

                case "scissors":
                    result = "Win!";
                    break;
                
                default:
                    result = "Draw!"
            }
        } else if (playerSelection === "paper") {
            switch(computerSelection) {
                case "rock":
                    result = "Win!";
                    break;

                case "scissors":
                    result = "Lose!";
                    break;
                
                default:
                    result = "Draw!"
            }
        } else if (playerSelection === "scissors") {
            switch(computerSelection) {
                case "rock":
                    result = "Lose!";
                    break;

                case "paper":
                    result = "Win!";
                    break;
                
                default:
                    result = "Draw!"
            }
        } else {
            result = "Please enter rock, paper, or scissors.";
        }
        return result;
    }
    
    //Show the player and computer selections
    console.log(`Player: ${playerSelection} Computer: ${computerSelection}`);

    //Show the result
    console.log(playRound(playerSelection, computerSelection));
}

/*
const playerSelection = "scissors";
const computerSelection = computerPlay();
console.log(`Player: ${playerSelection} Computer: ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));
*/