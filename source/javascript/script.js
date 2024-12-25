const choices = ["rock", "paper", "scissors"];

var computerScore = 0;
var humanScore = 0;

playerSelection();

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function playerSelection() {
  let pSelect = document.querySelector("#r-p-s");
  pSelect.addEventListener("click", (e) => {
    if (choices.indexOf(e.target.id) != -1) {
      playRound(e.target.id, getComputerChoice());
    }
  });
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
      computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
    }
    console.log(`🤖${computerChoice} ${computerScore}\n🤴🏻${humanChoice} ${humanScore}`);
}
