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


function playerSelection() {
  const choice = prompt("Enter your choice (Rock, Paper, or Scissors): ").toUpperCase();
  
  if ((choice === "ROCK") || (choice === "PAPER") || (choice === "SCISSORS")) {
    return choice
  }
  else {
    alert("You Entered a wrong choice (Choose only Rock, Paper, or Scissors): ");
  }
}



function playRound(computerChoice, playerChoice) {
  let score = "";

  if (computerChoice === playerChoice) {
    alert("It's a tie! Play again.");
    score = "tie";
  }
  else if (
    (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (playerChoice === "PAPER" && computerChoice === "ROCK") ||
    (playerChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    alert(`You win! ${playerChoice} beats ${computerChoice}`);
    score = "win";
  }
  else  {
    alert(`You lose! ${computerChoice} beats ${playerChoice}`);
  }

return score;
}

function game() {
  let win = 0;
  let tie = 0;
  for (let i = 0; i < 5; i++){
    const computerChoice = getComputerChoice();
    const playerChoice = playerSelection();
    const result = playRound(computerChoice, playerChoice)

    if (result === "win") {
      win++;
    }
    else if (result === "tie" ) {
      tie++;
    }

  }

  let lose = 5 - (tie + win);
  alert(`score ${win} in 5 rounds. But tie ${tie} and lose ${lose}`)
  console.log(`score ${win} in 5 rounds. But tie ${tie} and lose ${lose}`);
}

startGame = game();