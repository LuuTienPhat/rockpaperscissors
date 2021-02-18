const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
const guestGesture = document.getElementById("guest-gesture");
const result = document.getElementsByClassName("result")[0];

let guestScore = 0;
let homeScore = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function play(playerChoice) {
    const computerChoice = getRandomInt(3);
    console.log(computerChoice);
    console.log(playerChoice);

    if(computerChoice == 0) {
        guestGesture.src = "./images/rock.png";
    }
    else if(computerChoice == 1) {
        guestGesture.src = "./images/paper.png";
    }
    else {
        guestGesture.src = "./images/scissors.png";
    }

    winTieLose(playerChoice,computerChoice);
}

function winTieLose(playerChoose, computerChoice) {
    if(playerChoose == 0) {
        if(computerChoice == 1) {
            result.innerHTML = "You Lose";
            guestScore++;
            document.getElementById("guest-score").innerHTML = guestScore;
        }
        else if(computerChoice == 2) {
            result.innerHTML = "You win";
            homeScore++;
            document.getElementById("home-score").innerHTML = homeScore;
        }
        else {
            result.innerHTML = "Tie";
        }
    }

    else if(playerChoose == 1) {
        if(computerChoice == 2) {
            result.innerHTML = "You Lose";
            guestScore++;
            document.getElementById("guest-score").innerHTML = guestScore;
        }
        else if(computerChoice == 0) {
            result.innerHTML = "You win";
            homeScore++;
            document.getElementById("home-score").innerHTML = homeScore;
        }
        else {
            result.innerHTML = "Tie";
        }
    }

    else if(playerChoose == 2) {
        if(computerChoice == 0) {
            result.innerHTML = "You Lose";
            guestScore++;
            document.getElementById("guest-score").innerHTML = guestScore;
        }
        else if(computerChoice == 1) {
            result.innerHTML = "You win";
            homeScore++;
            document.getElementById("home-score").innerHTML = homeScore;
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

