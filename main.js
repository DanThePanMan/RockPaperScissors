function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch (choice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection) {
        let compTemp = getComputerChoice();
        return(playRound(playerSelection, compTemp));
    }
    else{
        if(playerSelection == "rock" && computerSelection == "paper"){
            return "You Lose! Paper beats Rock";
        }
        else if (playerSelection == "rock" && computerSelection == "scissors") {
            return "You Win! Rock beats Scissors";
        }
        else if (playerSelection == "paper" && computerSelection == "scissors") {
            return "You Lose! Scissors beats Paper";
        }
        else if (playerSelection == "paper" && computerSelection == "rock") {
            return "You Win! Paper beats Rock";
        }
        else if (playerSelection == "scissors" && computerSelection == "rock") {
            return "You Lose! Rock beats Scissors";
        }
        else if (playerSelection == "scissors" && computerSelection == "paper") {
            return "You Win! Scissor beats Paper";
        }
    }

}

function game(){
    
    let a = 0;
    const container = document.querySelector(".buttons");
    const textContatiner = document.querySelector(".textLine")
    const textReturn = document.createElement('p');
    container.addEventListener('click', (event) =>{
        textReturn.remove();
        console.log(event.target.id)
        let userChoise = event.target.id;
        let computerChoice = getComputerChoice();
        

        
        textReturn.classList.add("textBox")
        textReturn.textContent = playRound(userChoise,computerChoice);
        textContatiner.appendChild(textReturn);
    })
    
    
    a ++;
    
}

game()