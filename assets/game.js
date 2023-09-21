
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
const computerSelection = getComputerChoice();
console.log(`computer choice is ${computerSelection}`);