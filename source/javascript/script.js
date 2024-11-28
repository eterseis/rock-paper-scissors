console.log("Hello, world!");

const choices = ["rock", "paper", "scissors"];

var computerScore = 0;
var humanScore = 0;



playGame();
console.log(`🤖${computerScore}\n🤴🏻${humanScore}`)
function getComputerChoice(){
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice(){
    let userChoice = window.prompt("What's your choice? ").toLowerCase();
    if (choices.indexOf(userChoice) == -1){
        return getHumanChoice();
    }
    return userChoice;
}

function playRound(humanChoice, computerChoice){
    console.log(`🤖${computerChoice}\n🤴🏻${humanChoice}`)
    if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore++;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors"){
        computerScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock"){
        computerScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++;
    }
}

function playGame(){
    for (let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore){
        console.log("The winner is ... THE HUMAN!💂🏻‍♀️")
    }
    else if (humanScore == computerScore){
        console.log("That's a tie!");
    }
    else{
        console.log("The roboticons has won 🤖bi-bip-pop")
    }
}