let options = ['rock', 'paper', 'scissors'];
let numPlayerWins = 0;
let numCompWins = 0;


function getComputerChoice(){
    let randIndex = Math.floor(Math.random() * options.length);
    return options[randIndex];
}



function getPlayerChoice(string){
    if (string === 'rock'){
        playerSelection = 'rock'
    }
    else if (string === 'paper'){
        playerSelection = 'paper'
    }
    else if (string === 'scissors'){
        playerSelection = 'scissors'
    }
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
    let score = "<br>(" +"You: " + numPlayerWins + " - " + "Comp: " + numCompWins + ")"
    switch (result){
        case 0:  // tie
            document.getElementById('print-content').innerHTML ='Tie! Play again!' +  score;
            document.getElementById('print-content').style = 'color: #bec4cf;'
            break;
        case 1:  // computer wins
            document.getElementById('print-content').innerHTML ='Computer wins! ' + computerSelection + ' beats ' + playerSelection + score;
            document.getElementById('print-content').style = 'color: #c98e3a;'
            break;
        case 2:  // player wins
            document.getElementById('print-content').innerHTML = 'You win! ' + playerSelection + ' beats ' + computerSelection + score;
            document.getElementById('print-content').style = 'color: #738eba;'
            break;
    }
}

function ComputerImage(computerSelection){
    document.getElementById('computer-move').src = 'images/question.png';
    document.getElementById('comp-text').innerHTML = " . . . ";
    let myImage = 'images/rock.jpg'
    if (computerSelection == 'paper'){
        myImage = 'images/paper.jpg';
    }
    else if(computerSelection == 'scissors') {
        myImage = 'images/scissors.jpg';
    }
    window.setTimeout(()=>{
        document.getElementById('computer-move').src = myImage;
        document.getElementById('comp-text').innerHTML =(computerSelection);
    }, 500)
}

function game(){
    let computerSelection = getComputerChoice();
    ComputerImage(computerSelection);
    
    console.log('player choice: ' + playerSelection);
    result = playRound(computerSelection, playerSelection);
    printResult(result, computerSelection, playerSelection);

    if (numPlayerWins + numCompWins >= 5){
        finalResults()
    }
}


playing_button_ids = [
    'rock_button',
    'paper_button',
    'scissors_button'
]


end_button_ids = [
    "end-play-button",
    "end-quit-button"
]

function moveButtons(some_div, elements){
    elements.forEach((elename)=>{
        element = document.getElementById(elename);
        element.remove();
        some_div.appendChild(element);
    })
    
}

function finalResults(){

    let hidden_div = document.getElementById('hidden_things');
    let show_div = document.getElementById('player_buttons');
    moveButtons(hidden_div, playing_button_ids);
    moveButtons(show_div, end_button_ids);



    if (numPlayerWins > numCompWins){
        document.getElementById('print-content').innerHTML = ('You win this round!')
        document.getElementById('print-content').style = 'color: #738eba;'
    }
    else{
        document.getElementById('print-content').innerHTML = ('Computer wins this round!')
        document.getElementById('print-content').style = 'color: #c98e3a;'
    }
    
    
}

function playerButtonClicked(string){
    getPlayerChoice(string);
    game();

}