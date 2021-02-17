const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
const guestGesture = document.getElementById("guest-gesture");
const guestScore = document.getElementById("guest-score");
const homeScore = document.getElementById("home-score");
const result = document.getElementsByClassName("result")[0];

function choose() {
    
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function play(playerChoice) {
    const computerChoice = getRandomInt(3);
    console.log(computerChoice);
    console.log(playerChoice);

    if(computerChoice == 0) {
        guestGesture.src = "./rock.png";
    }
    else if(computerChoice == 1) {
        guestGesture.src = "./paper.png";
    }
    else {
        guestGesture.src = "./scissors.png";
    }

    winTieLose(playerChoice,computerChoice);
}

function winTieLose(playerChoose, computerChoice) {
    if(playerChoose == 0) {
        if(computerChoice == 1) {
            result.innerHTML = "You Lose";
            guestScore.innerHTML = parseInt(guestScore.innerHTML) + 1;
        }
        else if(computerChoice == 2) {
            result.innerHTML = "You win";
            homeScore.innerHTML = parseInt(homeScore.innerHTML) + 1;
        }
        else {
            result.innerHTML = "Tie";
        }
    }

    else if(playerChoose == 1) {
        if(computerChoice == 2) {
            result.innerHTML = "You Lose";
            guestScore.innerHTML = parseInt(guestScore.innerHTML) + 1;
        }
        else if(computerChoice == 0) {
            result.innerHTML = "You win";
            homeScore.innerHTML = parseInt(homeScore.innerHTML) + 1;
        }
        else {
            result.innerHTML = "Tie";
        }
    }

    else if(playerChoose == 2) {
        if(computerChoice == 0) {
            result.innerHTML = "You Lose";
            guestScore.innerHTML = parseInt(guestScore.innerHTML) + 1;
        }
        else if(computerChoice == 1) {
            result.innerHTML = "You win";
            homeScore.innerHTML = parseInt(homeScore.innerHTML) + 1;
        }
        else {
            result.innerHTML = "Tie";
        }
    }
}


rock.addEventListener('click', () => {
    play(0);
});

paper.addEventListener('click', () => {
    play(1);
});

scissors.addEventListener('click', () => {
    play(2);
});

