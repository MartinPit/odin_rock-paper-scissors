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

function checkEndOfGame() {
    let heading = document.querySelector('.result h1');

    if (playerPoints >= 5) {
        heading.textContent = 'YOU WIN'
    }

    if (computerPoints >= 5) {
        heading.textContent = 'YOU LOSE'
    }
}

function incrementPoints(result) {
    if (result > 0) {
        playerPoints++;
        let points = document.querySelector('.points.player');
        points.textContent = 'Player points: ' + playerPoints;
    } else if (result < 0) {
        computerPoints++
        let points = document.querySelector('.points.ai');
        points.textContent = 'AI points: ' + computerPoints;
    }

    checkEndOfGame()
}

function resetButtons() {
    let buttons = document.querySelectorAll('.ai div');
    buttons.forEach(button => {
        button.classList.remove('button-alt');
        button.classList.add('button');
    })
}

function toggleAiButton(computerChoice) {
    resetButtons();

    let clickedButton;
    if (computerChoice === 0) {
        clickedButton = document.querySelector('.ai .rock');
    } else if (computerChoice === 1) {
        clickedButton = document.querySelector('.ai .paper');
    } else {
        clickedButton = document.querySelector('.ai .scissors');
    }

    clickedButton.classList.add('button-alt');
}

function buttonClick(e) {
    let playerChoice = e.target.classList[1]
    let computerChoice = getComputerChoice();
    if (playerChoice === 'reset') {
        resetGame()
        return;
    }


    toggleAiButton(computerChoice);
    let result = playSingleRound(getChoiceNumber(playerChoice), computerChoice);
    incrementPoints(result);
}

function resetGame() {
    let pPoints = document.querySelector('.points.player');
    let cPoints = document.querySelector('.points.ai');
    let heading = document.querySelector('.result h1');

    pPoints.textContent = 'Player points: 0';
    cPoints.textContent = 'AI points: 0';
    heading.textContent = '';
    playerPoints = 0;
    computerPoints = 0;

    resetButtons();
}

let playerPoints = 0;
let computerPoints = 0;

let buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener('click', buttonClick))