

var moves = ["Rock", "Paper", "Scissors"];

var roundNumber = 0;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    console.log(Math.floor(Math.random() * (max - min + 1) + min))
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


function getRandomChoice() {

    let choice = moves[getRandomInt(0, 2)];

    return choice;
}

 function playRoundandupdate(e) {
    console.log("CALLBACK " + roundNumber);
    playRound(getRandomChoice(),e);
    roundNumber++;
    document.getElementsByClassName("rounds")[0].innerHTML ="Rounds played : " + roundNumber;
   }



function playRound(computerchoice, playerchoice) {
    let playerimage = document.getElementById("player");
    let computerimage = document.getElementById("computer");
    let player = playerchoice.toLowerCase();
    let computer = computerchoice.toLowerCase();
    let result = document.getElementById("score");
    images = {
        'rock' : "./images/rock.gif",
        'paper' : "./images/paper.gif",
        'scissors' : "./images/scissors.gif"
    }

    computerimage.src = images[computer]
    playerimage.src = images[player]
    
    if (player === computer) {
        result.innerHTML = "Draw";
        return
    }

    


    if (player === "rock") {
        if (computer === "paper") {
            result.innerHTML = "Computer Wins !";
        }
        else {
            result.innerHTML = "Player Wins !";
        }
    }
    else if (player === "paper") {
        if (computer === "scissors") {
            result.innerHTML = "Computer Wins !";
        }
        else {
            result.innerHTML = "Player Wins !";
        }
    }
    else if (player === "scissors") {
        if (computer === "rock") {
            result.innerHTML = "Computer Wins !";
        }
        else {
            result.innerHTML = "Player Wins !";
        }
    }
     
    return result;
}
/* for (let i = 0;i < rules.length ;i++) 
    for (let j = 0; j < rules[i].length; j++) {
        console.log(rules[i][j]);
    } */


let weapons = document.querySelectorAll(".weapons img");

for (let i = 0; i < weapons.length; i++) {
    weapons[i].addEventListener("click", () => {
        playRoundandupdate(weapons[i].name);
    });
}





