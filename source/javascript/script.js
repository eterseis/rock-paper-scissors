const choices = ["rock", "paper", "scissors"];

var computerScore = 0;
var playerScore = 0;

let round = document.querySelector(".roundInfo .round");
let result = document.querySelector(".roundInfo .result");
let score = document.querySelector(".score p");
let winner = document.querySelector("#winner");

playerSelection();

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function playerSelection() {
  let options = document.querySelector("#options");
  options.addEventListener("click", (e) => {
    if (choices.indexOf(e.target.id) != -1) {
      if (playerScore < 5 && computerScore < 5){
        playRound(e.target.id, getComputerChoice());
        score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
      }
    }
  });
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    round.textContent = `Player: ${playerChoice}  | Bot: ${computerChoice}`;
    result.textContent = "That's a tie!";
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    round.textContent = `Player: ${playerChoice}  | Bot: ${computerChoice}`;
    result.textContent = "Computer has won";
    computerScore++;
  } else if (playerChoice == "rock" && computerChoice == "scissors") {
    round.textContent = `Player: ${playerChoice}  | Bot: ${computerChoice}`;
    result.textContent = "Player has won";
    playerScore++;
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
    round.textContent = `Player: ${playerChoice}  | Bot: ${computerChoice}`;
    result.textContent = `Computer has won`;
    computerScore++;
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    round.textContent = `Player: ${playerChoice}  | Bot: ${computerChoice}`;
    result.textContent = `Player has won`;
    playerScore++;
  } else if (playerChoice == "scissors" && computerChoice == "rock") {
    round.textContent = `Player: ${playerChoice}  | Bot: ${computerChoice}`;
    result.textContent = `Computer has won`;
    computerScore++;
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    round.textContent = `Player: ${playerChoice}  | Bot: ${computerChoice}`;
    result.textContent = `Player has won`;
    playerScore++;
  }
  if (playerScore == 5 || computerScore == 5){
    let entity = (playerScore > computerScore) ? "Player" : "Bot";
    winner.textContent = `The winner is ${entity}🥇`;
  }
}
