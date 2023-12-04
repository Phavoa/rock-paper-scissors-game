function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3) + 1;

  switch (randomChoice) {
    case 1:
      return "ROCK";
    case 2:
      return "PAPER";
    case 3:
      return "SCISSORS";
    default:
      return "Invalid Choice";
  }
}

let score = 0;
let computerScore = 0;
let playerScore = 0;

function playRound(playerChoice) {
  const gameResult = document.querySelector(".gameResult");
  let computerChoice = getComputerChoice();

  if (computerChoice === playerChoice) {
    gameResult.textContent = "Tie!";
    score++;
  }
  else if (
    (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (playerChoice === "PAPER" && computerChoice === "ROCK") ||
    (playerChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    gameResult.textContent = `${playerChoice} beats ${computerChoice}`;
    score++;
    playerScore++;
  }
  else {
    gameResult.textContent = `${computerChoice} beats ${playerChoice}`;
    score++;
    computerScore++;
  }
  updateScore();
}

function updateScore() {
  const playerScoreDisplay = document.querySelector(".playerScoreDisplay");
  const computerScoreDisplay = document.querySelector(".computerScoreDisplay");

  playerScoreDisplay.textContent = `Player: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer: ${computerScore}`;
  if (score === 5) {
    if (playerScore > computerScore) {
      announceWinner("You")
    }
    else if (playerScore < computerScore) {
      announceWinner("Computer")
    }
  }
  else if (score >= 5) {
    resetGame();
  }
};

function announceWinner(winner) {
  const finalGameResult = document.querySelector(".finalGameResult");
  finalGameResult.textContent = `${winner} wins the game!`;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  score = 0;
}

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

rockBtn.addEventListener('click', () => playRound("ROCK"));
paperBtn.addEventListener('click', () => playRound("PAPER"));
scissorsBtn.addEventListener('click', () => playRound("SCISSORS"));