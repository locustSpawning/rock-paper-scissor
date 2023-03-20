
let options = ['rock', 'paper', 'scissors'];
let randIndex = Math.floor(Math.random() * options.length);
randOption = options[randIndex];

function getComputerChoice(){
    console.log('computer: ' + randOption);
    return randOption;
}


function getPlayerChoice(string){
    let choice = prompt("Rock, paper, or scissors? ");
    return console.log('player choice: ' + choice.toLocaleLowerCase());
}



function playRound(computerSelection, playerSelection){
    if (computerSelection == 'rock' & playerSelection == 'scissors'){
        return console.log('rock beats scissors!');
    } 
}

let computerSelection = getComputerChoice()
let playerSelection = getPlayerChoice()
console.log(playRound(playerSelection, computerSelection));