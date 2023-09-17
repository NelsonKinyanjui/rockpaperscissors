function getComputerChoice(){
    let result = math.floor(math.random() * 3);
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