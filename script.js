let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}
console.log(generateTarget());

const compareGuesses = (human, comp, target) => {
    let compDiff = Math.abs(target - comp);
    let humanDiff = Math.abs(target - human);

    if(compDiff < humanDiff){
        return false;
    }else{
        return true;
    }
}

const updateScore = winner =>{
    switch(winner){
        case 'human':
            humanScore++;
            break;
        case 'computer':
            computerScore++;
            break;
    }
}

const advanceRound = () =>{
    currentRoundNumber++;
}
