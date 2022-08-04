

var moves = ["Rock", "Paper", "Scissors"];

var roundNumber = 0;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
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
    let playerimage = document.getElementsByName("player")[0];
    let computerimage = document.getElementsByName("computer")[0];
    let player = playerchoice.toLowerCase();
    let computer = computerchoice.toLowerCase();
    let result = document.getElementsByClassName("score")[0];
    if (player == computer) {
        return "Draw";
    }
    else if (player == "rock") {
        if (computer == "paper") {
            computerimage.src = "./images/paper.gif";
            playerimage.src = "./images/rock.gif";
            result.innerHTML = "Computer Wins !";
        }
        else {
            computerimage.src = "./images/scissors.gif";
            playerimage.src = "./images/rock.gif";
            result.innerHTML = "Player Wins !";
        }
    }
    else if (player == "paper") {
        if (computer == "scissors") {
            computerimage.src = "./images/scissors.gif";
            playerimage.src = "./images/paper.gif";
            result.innerHTML = "Computer Wins !";
        }
        else {
            computerimage.src = "./images/rock.gif";
            playerimage.src = "./images/paper.gif";
            result.innerHTML = "Player Wins !";
        }
    }
    else if (player == "scissors") {
        if (computer == "rock") {
            computerimage.src = "./images/rock.gif";
            playerimage.src = "./images/scissors.gif";
            result.innerHTML = "Computer Wins !";
        }
        else {
            computerimage.src = "./images/paper.gif";
            playerimage.src = "./images/scissors.gif";
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



