function getComputerChoice(){
    let rNum=Math.random();
    if(rNum>=0 && rNum<=0.35){
        return 'rock';
    }else if(rNum>0.35 && rNum<=0.75){
        return 'paper';
    }else{
        return 'scissors';
    }
}

function getHumanChoice(){
    return prompt('Enter your choice: ').toLowerCase();
}

function playRound(humanChoice,computerChoice){
    console.log('You chose: '+humanChoice+' Computer chose: '+computerChoice);
    if(humanChoice=='rock'){
        if(computerChoice=='paper'){
            computerScore++;
            console.log('paper beats rock');
        }else if(computerChoice=='scissors'){
            humanScore++;
            console.log('rock beats scissors');
        }else{
            console.log("It's a draw!");
        }
    }else if(humanChoice=='paper'){
        if(computerChoice=='scissors'){
            computerScore++;
            console.log('scissors beats paper');
        }else if(computerChoice=='rock'){
            humanScore++;
            console.log('paper beats rock');
        }else{
            console.log("It's a draw!");
        }
    }else{
        if(computerChoice=='rock'){
            computerScore++;
            console.log('rock beats scissors');
        }else if(computerChoice=='paper'){
            humanScore++;
            console.log('scissors beats paper');
        }else{
            console.log("It's a draw!");
        }
    }
    console.log('\n');
}
function playGame(){
    for(let i=0;i<5;i++){
        playRound(getHumanChoice(),getComputerChoice());
    }
    if(computerScore>humanScore){
        console.log('Computer Wins');
    }else if(computerScore<humanScore){
        console.log('You win');
    }else{
        console.log("The game is drawn");
    }
}
let humanScore=0;
let computerScore=0;
playGame();

