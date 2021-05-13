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
    let currentRound = 1;

    for (let i = 0; i < 5; i++) {

    //Computer selection
    const computerSelection = computerPlay();
    
    //User input
    let playerInput = prompt("Rock, Paper, or Scissors?");
    let playerSelection = playerInput.toLowerCase();

    //Show round number
    console.log(`Round ${currentRound}`);

    //Play a round of the game
    function playRound(playerSelection, computerSelection) {
        let result;
        if (playerSelection === "rock") {
            switch(computerSelection) {
                case "paper":
                    result = "Lose!";
                    computerScore += 1;
                    break;

                case "scissors":
                    result = "Win!";
                    playerScore += 1;
                    break;
                
                default:
                    result = "Draw!"
            }
        } else if (playerSelection === "paper") {
            switch(computerSelection) {
                case "rock":
                    result = "Win!";
                    playerScore += 1;
                    break;

                case "scissors":
                    result = "Lose!";
                    computerScore += 1;
                    break;
                
                default:
                    result = "Draw!"
            }
        } else if (playerSelection === "scissors") {
            switch(computerSelection) {
                case "rock":
                    result = "Lose!";
                    computerScore += 1;
                    break;

                case "paper":
                    result = "Win!";
                    playerScore += 1;
                    break;
                
                default:
                    result = "Draw!"
            }
        } else {
            result = ("Please enter rock, paper, or scissors.");
        }
        return result;
    }
    
    function roundResult() {
        //Show the player and computer selections
        console.log(`Player: ${playerSelection} Computer: ${computerSelection}`);

        //Show the result of this round
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Your Score: ${playerScore} Computer Score: ${computerScore}`);
    }
    roundResult();
    currentRound ++;
    }

    //Final results
    if (playerScore > computerScore) {
        console.log("Final Results: You win!");
    } else if (playerScore < computerScore) {
        console.log("Final Results: Computer wins!");
    } else {
        console.log("Final Results: Draw!");
    }

    function playAgain() {
        let input = prompt("Would you like to play again? Yes/No");
        if (input.toLowerCase() === "yes" || input.toLowerCase() === "y") {
            game();
        } else {
            console.log("Thanks for playing!");
        }
    }

    playAgain();
    
}

game();

/*
const playerSelection = "scissors";
const computerSelection = computerPlay();
console.log(`Player: ${playerSelection} Computer: ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));
*/