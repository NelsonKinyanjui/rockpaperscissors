 function getComputerChoice(){

    let result = Math.floor(Math.random() * 3);
   switch (result){
    case 0:
    return 'rock';
    case 1:
        return 'paper';
        case 2:
        return 'scissors';
   }
}
console.log(getComputerChoice());
function playRound(payerSelection,computerSelection){
return `you loose! ${computerSelection} beats ${playerSelection} `;
}
console.log(playRound());