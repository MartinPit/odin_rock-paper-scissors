function getComputerChoice() {
    return Math.floor(Math.random() * 3); // 0 == rock, 1 == paper, 2 == scissors
}

function getChoiceNumber(playerSelection) {
    if (playerSelection === 'rock') {
        return 0;
    }

    if (playerSelection === 'paper') {
        return 1;
    }

    return 2;
}

function playSingleRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return 0; // draw
    }

    if ((playerSelection === 2 && computerSelection === 0) || playerSelection + 1 === computerSelection) {
        return -1; // loss
    }

    return 1; // win
}

function checkInput(playerInput) {
    return playerInput === 'rock' || playerInput === 'paper' || playerInput === 'scissors';


}

function game() {
    let score = 0;

    for (let i = 0; i < 5; i++) {
        console.log("Turn number: " + (i + 1));

        let playerInput = prompt("Do you want to play rock, paper or scissors?");
        playerInput = playerInput.toLowerCase();
        let status = checkInput(playerInput);

        if (! status) {
            console.log("Invalid input! Please try again.");
            i--;  // repeats turn
            continue;
        }

        score += playSingleRound(getChoiceNumber(playerInput), getComputerChoice());
        console.log(score);
    }

    if (score > 0) {
        console.log("You win!");
    } else if (score < 0) {
        console.log("You lose!");
    } else {
        console.log("Draw!");
    }


}