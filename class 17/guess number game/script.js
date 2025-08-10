// get references to HTML elements using DOM

const guessInput = document.getElementById("guessInput")
const submitBtn = document.getElementById("submitBtn")
const message = document.getElementById("message")
const attemptsDisplay = document.getElementById("attempts")
const resetBtn = document.getElementById("resetBtn")
const gamesDisplay = document.getElementById("games")
const pointsDisplay = document.getElementById("points")

// generate the random number b/w 1 and 100

let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber)


// keep the track of how many attempts the user has made
let attempts = 0;
let totalGames = 0;
let totalPoints = 0;

// function to check the user guess
function checkGuess() {
    // get the value from the input number field, convert it the number
    const userGuess = Number(guessInput.value);

    // check if the input is a valid number b/w 1 and 100
    if(!userGuess || userGuess < 1 || userGuess > 100){
        message.textContent = "Please enter the valid number between 1 and 100"
        message.style.color = "red";
        return; //stop further exectuion
    }

    // increment the attempt counter
    attempts++;
    attemptsDisplay.textContent = attempts; //update the attempts display


    // check if the guess is correct
    if(userGuess === randomNumber) {
        // if the correct, display a success message
        message.textContent = `Congratulations! You guessed it in ${attempts} attempts`;
        message.style.color = "green";
        calculatePoints();
        updateGame();
        disableGame();
    } else if(userGuess < randomNumber){
        // if the guess is too low
        message.textContent = "Guess is Too Low"
        message.style.color = "red"
    } else {
        // if the guess is too high
        message.textContent = "Too High! Try again";
        message.style.color = "red"
    }

    // if attempts exceed 5, reset the game automatically
    if(attempts >=5){
        message.textContent = `You have exceeded 5 attempts..game will restart`;
        message.style.color = "skyblue";
        updateGame();
        setTimeout(resetGame, 2000); //reset the game after 2 seonds
    }

}

// function to calculate points based on our attempts
function calculatePoints() {
    if(attempts <=5){
        totalPoints += 10; //excellent

    } else if(attempts <= 10){
        totalPoints += 5; //good
    } else {
        totalPoints += 2; //poor
    }
}

// function to update the total games and display the message
function updateGame(){
    totalGames++;
    gamesDisplay.textContent = totalGames;
    pointsDisplay.textContent = totalPoints;
}


// function to reset the game
function resetGame() {

    randomNumber = Math.floor(Math.random() * 100) + 1;

    // resetting the attempt counter
    attempts = 0;
    attemptsDisplay.textContent = attempts; //reset the display
    
    // clear the  input and message
    guessInput.value = '';
    message.textContent = ''

    // re-enable the input and button
    guessInput.disabled = false; //enable input box
    submitBtn.disabled = false; //enable submit button

}


// function to disable the input and button
function disableGame(){
    guessInput.disabled = true; //disabled input box
    submitBtn.disabled = true; //disabled submit button
}


submitBtn.addEventListener("click", checkGuess);

resetBtn.addEventListener("click", resetGame);



