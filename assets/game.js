
function game(){
for (i= 0; i <= 5; i++){

function getComputerChoice(){
    const randomNumber= Math.floor(Math.random() * 2);
    switch(randomNumber){
        case 0:
        return 'rock';
        
        case 1:
        return 'paper';
        
        case 2:
        return 'scissors';
    
    }
}
const playerSelection = prompt('');
console.log(`Your choice is ${playerSelection}`)
const computerSelection = getComputerChoice();
console.log(`computer choice is ${computerSelection}`);

function playRound(playerSelection ,computerSelection){
    return `You lose ${playerSelection} beats ${computerSelection}`;
    

}
console.log(playRound(playerSelection,computerSelection));

}

}
console.log(game());