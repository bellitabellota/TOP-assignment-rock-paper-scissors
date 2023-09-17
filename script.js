let computerSelection = '';
let result = '';
let gameIsPlaying = false;
let intervalId;
let wins = 0;
let losses = 0;
let ties = 0;

const resultMessage = document.querySelector('.js-result');
const scoreMessage = document.querySelector('.js-score');
const winMessage = document.querySelector('.js-winner');
const containerPlayerMove = document.querySelector('.js-container-player-moves');
const speechBubble = document.querySelector('.js-speech-bubble');
const startGameButton = document.querySelector('.js-start-game');
const computerMoveContainer = document.querySelector('.js-computer-move-container');

startGameButton.addEventListener('click', () => {
  containerPlayerMove.style.display='flex';
  speechBubble.classList.add('display-none');
  startGameButton.classList.add('display-none');
})

document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('rock');
})

document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('paper');
})

document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('scissors');
})

function playGame(playerSelection) {
  if (!gameIsPlaying) {
    gameIsPlaying = true;

    if (wins < 5 && losses < 5) {

      computerMoveContainer.style.display='flex';
      randomlyDisplayingImages();

      setTimeout(() => {
        clearInterval(intervalId);
        computerMoveContainer.style.display='none';

        resultMessage.textContent = checkForWinnerOfRound(playerSelection);
        updateScore();
        scoreMessage.textContent = `You ${wins} || ${losses} Joe`;
        gameIsPlaying = false;
        checkForFivefoldWinner();
        
      }, 2500);
    }
  }
}

function randomlyDisplayingImages() {
  const image = document.getElementById('image');
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
  
  intervalId = setInterval(() =>{
    let random = Math.floor (Math.random() * 3);
    
    image.src = `/images/${images[random]}`;
    image.src = `/images/${images[random]}`;
  }, 100);
}

function getComputerMove() {      
  let number = Math.random();
  
  if (number < 1/3) {
    computerSelection = 'scissors';
  } else if (number > 1/3 && number < 2/3) {
    computerSelection = 'rock';
  } else if (number > 2/30 ) {
    computerSelection = 'paper';
  }
  return computerSelection;
}

function checkForWinnerOfRound(playerSelection) {

  let message = '';

  computerSelection = getComputerMove();

  if (playerSelection === 'scissors') {
    if (computerSelection ==='scissors') {result = 'Tie'; message =`Both picked ${playerSelection}.\nTie.`;}
    else if (computerSelection === 'rock') {result = 'You loose'; message =`You picked ${playerSelection}. Joe picked ${computerSelection}.\nYou loose.`;}
    else if (computerSelection === 'paper') {result = 'You win'; message =`You picked ${playerSelection}. Joe picked ${computerSelection}.\nYou win.`;}
  } else if (playerSelection === 'paper') {
    if (computerSelection ==='paper') {result = 'Tie'; message =`Both picked ${playerSelection}.\nTie.`;}
    else if (computerSelection === 'rock') {result = 'You win'; message =`You picked ${playerSelection}. Joe picked ${computerSelection}.\nYou win.`;}
    else if (computerSelection === 'scissors') {result = 'You loose'; message =`You picked ${playerSelection}. Joe picked ${computerSelection}.\nYou loose.`;}
  } else if (playerSelection === 'rock') {
    if (computerSelection ==='rock') {result = 'Tie'; message =`Both picked ${playerSelection}.\nTie.`;}
    else if (computerSelection === 'scissors') { result = 'You win'; message =`You picked ${playerSelection}. Joe picked ${computerSelection}.\nYou win.`;}
    else if (computerSelection === 'paper') {result = 'You loose'; message =`You picked ${playerSelection}. Joe picked ${computerSelection}.\nYou loose.`;}
  }

  return message;
}

function updateScore() {
  if (result === 'Tie') {
    ties ++;
  } else if (result ==='You win') {
    wins ++;
  } else if (result === 'You loose') {
    losses ++;
  }
}

function restartGame() {
  document.querySelector('.js-replay-button').addEventListener('click', () => {
    containerPlayerMove.style.display='none';
    speechBubble.classList.remove('display-none');
    startGameButton.classList.remove('display-none');

    resultMessage.textContent = '';
    scoreMessage.textContent = '';
    winMessage.classList.add('display-none');
  
    wins = 0;
    losses = 0;
    ties = 0;
  })
}

function checkForFivefoldWinner() {   
  if (wins === 5 || losses === 5) {
    if (losses > wins) {
      winMessage.classList.remove('display-none');
      winMessage.textContent = 'Joe won the game!\n';

      const replayButton = document.createElement('button');
      replayButton.classList.add('replay-button', 'js-replay-button')
      replayButton.textContent = 'Play again';
      winMessage.appendChild(replayButton);

      restartGame();
    }
    else if (wins > losses) {
      winMessage.classList.remove('display-none');
      winMessage.textContent ='You won the game!\n';

      const replayButton = document.createElement('button');
      replayButton.classList.add('replay-button', 'js-replay-button')
      replayButton.textContent = 'Play again';
      winMessage.appendChild(replayButton);

      restartGame();
    }
  }
}