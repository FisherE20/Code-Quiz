// selected all elements
const startButton= document.getElementById("start-btn");
const next= document.querySelector("next");
const quiz= document.getElementById("quiz");
const questionContainerElement= document.getElementById("question-container");
const score= document.querySelector("score");
const scoreCounter= document.querySelector("score Counter")
const counterTime= document.getElementById("#timer");

const answer1= document.querySelector("#answer1");
const answer2= document.querySelector("#answer2");
const answer3= document.querySelector("#answer3");
const answer4= document.querySelector("#answer4");

const scoreContainer= document.getElementById("scoreContainer");

// create some variables
const lastQuestionIndex= question.length- 1;
let runningQuestionIndex = 0;


startButton.addEventListener("click", startGame);

//start quiz
function startGame(){
    console.log('started');
startTimer();
startButton.classList.add('hide')
questionContainerElement.classList.remove('hide')
renderQuestion();
quiz.style.display = "block";
renderCounter();
}

// render a question
function renderQuestion() {
    let q = questions[runningQuestionIndex];

    questionInsert.innerHTML= "<p>" + q.question + "<p>";
    answer1.innerHTML = q.answer1;
    answer2.innerHTML = q.answer2;
    answer3.innerHTML = q.answer3;
    answer4.innerHTML = q.answer4;

}

//counter render
const questionTime = 60; //60s
let count = 60;

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML= count;
        count++;
    } else{
        count= 0;
        answerIsWrong();
        if(runningQuestionIndex < lastQuestionIndex){
            runningQuestionIndex++;
            questionRender();
        } else{clearInterval(timer);
            //end the quiz and show the score
            scoreRender();

        }

    };

    //Check Answers
    function checkAnswer(answer){
        if(question[runningQuestionIndex].correct == answer){
        // answer is correct
        scoreCounter++;
        answerIsCorrect();
    }else{
        // answer is wrong
        answerIsWrong();
    }
    if(runningQuestionIndex < lastQuestionIndex){
        count = 0;
        runningQuestionIndex++;
        questionRender();
    } else{
        clearInterval(TIMER);
        // end the quiz and show the score
    
    }
}
// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestionIndex);
        alert("Correct")
}
// answer is wrong
function answerIsWrong(){
    document.getElementById(runningQuestionIndex);
        alert("Wrong")
}

next.addEventListener("click", nextQuestion);

// move to next question
function nextQuestion() {
runningQuestionIndex++;
renderQuestion()
}

// Score render
function scoreRender(){
    scoreDiv.style.display= "block";

    //calculate score per questions answered
    let score= 0;
    scoreDiv.innerHTML= "<p> + score + </p>";
}
 
let timer= setInterval(function(){
    seconds--;
    document.getElementById("seconds").innerText= seconds % 60;
    document.getElementById("minutes").innerText= parseInt(seconds / 60);

}, 1000);
    
    clearInterval(timer);
}



//created questions
const questions = [
        {
            question:"Inside which HTML element do you put the JavaScript code?",
            choiceA:"<script> ",
            choiceB:"<javascript>",
            choiceC:"<js>",
            choiceD:"None of the Above",
            correct: "A"
            
        },
    
        {
            question:"What does CSS stand for?",
            choiceA:"Computer Style Sheets",
            choiceB:"Cascading Style Sheets",
            choiceC:"Colorful Style Sheets",
            choiceD:"Coordinating Style Sheet",
            correct: "B"
            
        },
    
        {
            question:"What does HTML stand For",
            choiceA: "Hyper Text Markup Language",
            choiceB:"Home Tool Markup Language",
            choiceC:"Hyperlinks and Text Markup Language",
            choiceD:"Hotspot Text Markup Language",
            correct: "C"
            
        },
    
        {
            question:"What is Javascript?",
            choiceA:"plumming ",
            choiceB:"decoration",
            choiceC:"landscape",
            choiceD:"framework",
            correct: "A"
            
        },
    
        {
            question:"What is Javascript?",
            choiceA:"plumming ",
            choiceB:"decoration",
            choiceC:"landscape",
            choiceD:"framework",
            correct: "A"
            
        }
    ]
// var highscore= recentScore;
// const recentScore= localStorage.getItem("recentScore");
// localStorage.setItem("recentScore", scoreCount)