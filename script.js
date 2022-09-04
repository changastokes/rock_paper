        //new
        function computerPlay() {
            let rock = "Rock";
            let paper = "Paper";
            let scissors = "Scissors";
            let getRandomValue = Math.random();
            //console.log(getRandomValue);
            if (getRandomValue <= 0.33) {
            //console.log(rock);
            return rock;
            } else if (getRandomValue <= 0.66) {
                //console.log(paper);
                return paper;
            } else {
                //console.log(scissors);
                return scissors;
            }
        }       
           
        //game start
        function game() {
            //let roundsPlayed = 0;
            let playerWin = 0;
            let computerWin = 0;
            let gameWinner = "";

        // Add event listeners for all three buttons
        const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                playerSelection = button.className;
                const computerSelection = computerPlay();
                battleWinText.textContent = (playRound(playerSelection, computerSelection));
                playerWinText.textContent = "Player Win totals: " + playerWin;
                computerWinText.textContent = "Computer Win totals: " + computerWin;
                endGame();
            })
        })
        
            
        //play round, determine winner    
            function playRound(playerSelection, computerSelection) {
            let tie = "It's a Tie! You selected" + playerSelection + " and the computer selected " + computerSelection + ".";
            let paperBeatRock ="You Win! You selected " + playerSelection + " and the computer selected " + computerSelection + ".";
            let rockBeatScissors ="You Win! You selected" + playerSelection + " and the computer selected " + computerSelection + ".";
            let scissorsBeatPaper ="You Win! You selected" + playerSelection + " and the computer selected " + computerSelection + ".";
            let scissorsBeatsPapperLoss ="You Lose! You selected" + playerSelection + " and the computer selected " + computerSelection + ".";
            let paperBeatRockLoss ="You Lose! You selected" + playerSelection + " and the computer selected " + computerSelection + ".";
            let rockBeatScissorsLoss ="You Lose! You selected" + playerSelection + " and the computer selected " + computerSelection + ".";
        
            if (playerSelection === computerSelection) {
                return tie;
            } else if ((playerSelection === "Paper") && (computerSelection === "Rock")) {
                playerWin++;
                return paperBeatRock;
            }else if ((playerSelection === "Paper") && (computerSelection === "Scissors")) {
                computerWin++;
                return scissorsBeatsPapperLoss;
            }else if ((playerSelection === "Rock") && (computerSelection === "Papper")) {
                computerWin++;
                return paperBeatRockLoss;
            }else if ((playerSelection === "Rock") && (computerSelection === "Scissors")) {
                playerWin++;
                return rockBeatScissors;
            }else if ((playerSelection === "Scissors") && (computerSelection === "Rock")) {
                computerWin++;
                return rockBeatScissorsLoss;
            }else {
                playerWin++;
            return scissorsBeatPaper;
            }
        }
    

    //Create DOM for all results
    const container = document.querySelector("#container");
    const resultsDiv = document.createElement("div");
    resultsDiv.style.marginTop = "30px";
    container.appendChild(resultsDiv);

    //create player win tracking DOM
    const playerWinText = document.createElement("p");
    playerWinText.style.color = "blue";
    playerWinText.textContent = "Player Win totals: " + playerWin;
    resultsDiv.appendChild(playerWinText);

    //create computere win tracking DOM
    const computerWinText = document.createElement("p");
    computerWinText.style.color = "blue";
    computerWinText.textContent = "Computer Win totals: " + computerWin;
    resultsDiv.appendChild(computerWinText);

    // create battle won text DOM
    const battleWinText = document.createElement("p");
    battleWinText.style.color = "black";
    resultsDiv.appendChild(battleWinText);

    //create game win text DOM
    const gameWinText = document.createElement("p");
    gameWinText.style.color = "red";
    gameWinText.textContent = (gameWinText);
    resultsDiv.appendChild(battleWinText);



    //determine who won five
    function endGame() {
        if (playerWin == 5) {
            gameWinner = "You Win!";
            gameWinText.textContent = gameWinner;
             
            //disable game buttons
            document.getElementById("1").disabled = true;
            document.getElementById("2").disabled = true;
            document.getElementById("3").disabled = true;

            //create new DOM button to replay
            const playAgainButton = document.createElement("button");
            playAgainButton.textContent ="Play Agian!";
            resultsDiv.appendChild(playAgainButton);

            //if clicked, reload page
            playAgainButton.addEventListener('click', () => {
                location.reload();
            })

        }else if (computerWin == 5) {
            gameWinner = "COMPUTER WINS!";
            gameWinText.textContent = gameWinner;

            //disable game button
            document.getElementById("1").disabled = true;
            document.getElementById("1").disabled = true;
            document.getElementById("1").disabled = true;

            // create new button to replay DOM
            const playAgainButton = document.createElement("button");Y
            playAgainButton.textContent = "Play Again!";
            resultsDiv.appendChild(playAgainButton);

            //if clicked reload page
            playAgainButton.addEventListener('click', () => {
                location.reload();
            })
        }
    }
}
    game();

    /*if (playerWin > computerWin) {
        gameWinner = "You Win";
        }else if (playerWin === computerWin) {
            gameWinner = "Tie!";
        } else {
            gameWinner = "computer Wins!";   
        }
    
        //winner to the screen
        console.log("The winner is: " + gameWinner);
    }
    
            //function to capitalize the input
            function capitalize(playerSelection) {
                let allLowerCase = playerSelection.toLowerCase();
                 let playerSelection = allLowerCase.charAt(0).toUpperCase() + allLowerCase.slice(1);
                 //console.log(playerSelection);
                 return playerSelection;
             } 
        
           //function call to start game
           game();
    
    
           //loop through 5 rounds, track rounds and wins
           /* while (roundsPlayed < 5) {
                roundsPlayed++;
                const computerSelection = computerPlay();
                playerSelection = prompt("Player, type your selection")
                console.log(playRound(capitalize(playerSelection), computerSelection));
                //console.log(roundsPlayed)
                console.log("PLayer win totals" + playerWin);
               console.log("Computer win totals" + computerWin); */
        
        
        

           