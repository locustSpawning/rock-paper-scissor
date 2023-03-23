let options = ['rock', 'paper', 'scissors'];
let numPlayerWins = 0;
let numCompWins = 0;

function getComputerChoice(){
    let randIndex = Math.floor(Math.random() * options.length);
    return options[randIndex];
}


function getPlayerChoice(string){
    return prompt("Rock, paper, or scissors? ");
}


function playRound(computerSelection, playerSelection){
    if (computerSelection == playerSelection){
        return 0;
    }
    if ((computerSelection == 'rock' & playerSelection == 'paper') |
        (computerSelection == 'paper' & playerSelection == 'scissors') |
        (computerSelection == 'scissors' & playerSelection == 'rock')){
        numPlayerWins +=1;
        return 2;
    }
    numCompWins += 1;
    return 1;
}

function printResult (result, computerSelection, playerSelection) {
    switch (result){
        case 0:  // tie
            console.log('Tie! Play again!');
            break;
        case 1:  // computer wins
            console.log('Computer wins! ' + computerSelection + ' beats ' + playerSelection);
            break;
        case 2:  // player wins
            console.log('Player wins! ' + playerSelection + ' beats ' + computerSelection);
            break;
    }
}


function game(){
    for (let i = 0; i < 5; i++){
        let computerSelection = getComputerChoice();
        console.log('computer: ' + computerSelection);
        let playerSelection = getPlayerChoice();
        
        console.log('player choice: ' + playerSelection);
        result = playRound(computerSelection, playerSelection);
        printResult(result, computerSelection, playerSelection);
    }
}

function finalResults(){
    if (numPlayerWins > numCompWins){
        console.log('Player wins this round!')
    }
    else{
        console.log('Computer wins this round!')
    }
}

game();
finalResults();