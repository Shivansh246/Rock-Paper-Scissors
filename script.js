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

function playRound(humanChoice,computerChoice){
    rounds++;
    let comp_output = document.querySelector(".comp-choice");
    comp_output.textContent = "Computer Chose: "+computerChoice;
    console.log('You chose: '+humanChoice+' Computer chose: '+computerChoice);
    if (humanChoice === computerChoice) {
     console.log("It's a draw!");
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`${humanChoice} beats ${computerChoice}`);
    }
    else {
        computerScore++;
        console.log(`${computerChoice} beats ${humanChoice}`);
    }
    console.log('\n');

    if(rounds!=0 && rounds%5==0){
        let final_result = document.querySelector(".result-output");
        let won = computerScore>humanScore?"computer":"you";
        final_result.textContent = won+" won by "+ Math.abs(computerScore-humanScore)+". Next round started!";
    }
}

let humanScore=0;
let computerScore=0;

let btn_rock = document.querySelector(".rock-button");
let btn_paper = document.querySelector(".paper-button");
let btn_sci = document.querySelector(".scissors-button");

let rounds = 0

btn_rock.addEventListener('click',()=>{
    playRound('rock',getComputerChoice());
});
btn_paper.addEventListener('click',()=>{
    playRound('paper',getComputerChoice());
});
btn_sci.addEventListener('click',()=>{
    playRound('scissors',getComputerChoice());
});


