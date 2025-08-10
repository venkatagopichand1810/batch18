// get the references of the dom elements

const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")
const timerElement = document.getElementById("timer")
const progressBar = document.getElementById("progress")

// init 
let currentQuestionIndex = 0; //current question index
let score = 0; //user score
let timer; //timer reference
let timeLeft = 15; //timer left


// quiz questions array

const questions = [
    {
        question: "What is HTML?",
        answers: [
            {text: "HyperText Markup Language", correct: true},
            {text: "Hyper market", correct: false},
            {text: "Hyper text medium Language", correct: false},
            {text: "none of the above", correct: false}
        ]
    },

    {
        question: "What is css?",
        answers: [
            {text: "Backend", correct: false},
            {text: "database", correct: false},
            {text: "frontend", correct: true},
            {text: "none of the above", correct: false}
        ]
    },

    {
        question: "What is Javasscipt?",
        answers: [
            {text: "Javascript is for design", correct: false},
            {text: "Javascript is used to write the FE and BE", correct: true},
            {text: "Javascript is only for FE", correct: false},
            {text: "none of the above", correct: false}
        ]
    },


    {
        question: "What is React?",
        answers: [
            {text: "React is the library ", correct: true},
            {text: "React is the backend language", correct: false},
            {text: "React is to design Andriod applications", correct: false},
            {text: "none of the above", correct: false}
        ]
    }
];

// function to start the quiz

function startQuiz() {
    currentQuestionIndex = 0; //resetting the question index
    score = 0;
    nextButton.style.display = "none"; //hide next button initially
    updateProgress();
    showQuestion(); //load the question
}

// function to display the current question
function showQuestion() {
    resetState(); //reset the UI state
    startTimer(); //start the countdown timer

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    // create the buttons for each answer
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn")
        button.addEventListener('click', () => selectAnswer(answer))
        answerButtons.appendChild(button)
    })

}

// function to reset the state before showing the new question 

function resetState(){
    clearInterval(timer); //clear existing timer
    timeLeft = 15; //reset the timer to 15 seconds
    timerElement.textContent = timeLeft; //display the updated timer

    nextButton.style.display = "none"; //hide the next button
    answerButtons.innerHTML = ""; //remove the previous answer button

}


// function to start the countdown timer
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;

        if(timeLeft === 0){
            clearInterval(timer);
            selectAnswer({correct: false}); //auto-select wrong if time runs out
        }
    }, 1000)
}



// function to handle the answer selection
function selectAnswer(answer){
    clearInterval(timer); //stop timer

    // disable all buttons after the selecting the answer
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true; //disable the buttons
        button.classList.add("disabled"); //add disabled

        // highlight the correct or wrong answer
        if(button.textContent === answer.text){
            button.classList.add(answer.correct ? "correct" : "wrong")
        }
    });

    if(answer.correct){
        score++; //increase the score if answer if correct
    }

    nextButton.style.display = "block" //show the next button

    // event listener for the next button
    nextButton.addEventListener("click", () => {
        currentQuestionIndex++; //move to next question
    
        // update the progress bar
        updateProgress();

        if(currentQuestionIndex < questions.length){
            showQuestion(); //load the next question
        } else {
            showScore(); //end quiz if no more questions
        }
    })

}


// progress function
function updateProgress(){
    // calculate the progress based on the question count
    const progress = ((currentQuestionIndex) / questions.length) * 100;
    progressBar.style.width = `${progress}%`; //update the progress bar width

}


function showScore() {
resetState();
questionElement.textContent = `You scored ${score} out of ${questions.length}!`;
nextButton.textContent = "Play Again";
nextButton.style.display = "block"

// reset the quiz when the user clicks  "play again"
nextButton.addEventListener("click", startQuiz)
}

startQuiz();
