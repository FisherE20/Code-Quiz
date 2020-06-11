const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');

var ul = document.getElementById('ul');
var scoreCard = document.getElementById('scoreCard');
var quizBox = document.getElementById('questionBox');
//answer
var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');
var op4 = document.getElementById('op4');
//timer 
let minutesDisplay = document.querySelector("#minutes");
let secondsDisplay = document.querySelector("#seconds");


startButton.addEventListener('click', startGame)

var questions = {
    questions: [
        {
            q: 'Inside which HTML element do you put the JavaScript code?', options: ['<script>', '<javascript>', '<js>'
                , 'None of the Above'], answer: 1
        },

        {
            q: "What does CSS stand for?", options: ["Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"
                , "Coordinating Style Sheet"], answer: 2
        },

        {
            q: "What does HTML stand For", options: ["What does HTML stand For", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"
                , "Hotspot Text Markup Language"], answer: 3
        },

        {
            q: 'HTML stands for?', options: ['answer 1', 'answer 2', 'answer 3'
                , 'answer 4'], answer: 1
        },

    ],
}

let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;
index = 0;



function startGame() {
    //console.log('started');
    //startButton.classlist.add('hide')
    startTimer();
    renderQuestion();
}

function renderQuestions() {
    let q = questions[runningQuestionIndex];
    quizBox.innerHTML = "<ul>" + q.options + "</ul>";
    questionInsert.innerHTML =
    op1.innerHTML = q.options[0];
    op2.innerHTML = q.options[1];
    op3.innerHTML = q.options[2];
    op4.innerHTML = q.options[3];
    this.scoreCard();
}
// } else{
//     quizBox.innerHTML="Quiz Over......!!!";
//     op1.style.display="none";
//     op2.style.display="none";
//     op3.style.display="none";
//     op4.style.display="none";
//     btn.style.display="none";
// }
// }

nextButton.addEventListener('click', next)

function next() {
    if (runningQuestionIndex >= lastQuestionIndex) {
        renderQuestion();
    } else {
        runningQuestionIndex++;
        renderQuestion();

    }


}
function checkAnswer(ele) {
    var id = ele.id.split('');
    //console.log(id);
    if (id[id.length - 1] == this.questions[this.index].answer) {
        // console.log("Correct")
        this.score++;
        ele.className = "correct";
        ele.innerHTML = "Correct";
        this.scoreCard();
    } else {
        //console.log("Not")
        ele.className = "wrong";
        ele.innerHTML = "Wrong";
    }
}
function notClickAble() {
    var frameElement;
    for (let i = 0; i < ul.children.length; i++) {
        ul.children[i].style.pointerEvents = "none";
    }
}

function clickAble() {
    var frameElement;
    for (i = 0; i < ul.children.length; i++) {
        ul.children[i].style.pointerEvents = "auto";
        ul.children[i].style.className = "";
    }
}

function notClickAble() {

}
score = 0,
    function scoreCard() {
        scoreCard.innerHTML = this.questions.length + "/" + this.score;
    }

    function startTimer(setInterval) {
        var today = new Date();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('timer').innerHTML =
        m + ":" + s;
        var t = setTimeout(startTime, 1000);
        var t = setTimeout(startTimer, 1000);
      }


     setInterval(function () {
        var d = new Date(); //get current time
        var seconds = d.getMinutes() * 60 + d.getSeconds(); //convet current mm:ss to seconds for easier caculation, we don't care hours.
        var fiveMin = 60 * 5; //five minutes is 300 seconds!
        var timeleft = fiveMin - seconds % fiveMin; // let's say now is 01:30, then current seconds is 60+30 = 90. And 90%300 = 90, finally 300-90 = 210. That's the time left!
        var result = parseInt(timeleft / 60) + ':' + timeleft % 60; //formart seconds back into mm:ss 
        document.getElementById('timer').innerHTML = result;
    
    }, 500) 
    
    


      function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
      }
    //calling it every 0.5 second to do a count down
// // Set the date we're counting down to
// var countDownTime = getTime("37:25");

// // Update the count down every 1 second
// var x = setInterval(function () {

//     // Get today's date and time
//     var now = getTime("37:25");

//     // Find the distance between now and the count down date
//     var distance = countDownTime - now;

//     // Time calculations for days, hours, minutes and seconds
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     // Output the result in an element with id="demo"
//     document.getElementById("timer").innerHTML = minutes + ":" + seconds;

//     // If the count down is over, write some text 
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("timer").innerHTML = "EXPIRED";
//     }
// }, 1000);

var playerName;
var playerScore;
var gameResult = {};
var highscoreList = [];

function toHighscoreList() {
    playerName = $('#nameTag').text();   // for example value "Henry"
    playerScore = guessedWrong.length;   // for example value 3

    gameResult = { player: playerName, score: playerScore };
    highscoreList.push(gameResult);
    highscoreList.sort(function (a, b) { return (b.score - a.score) });

    $('#score1').text(highscoreList[0].player + " - score: " + highscoreList[0].score);
};

var highscore = JSON.parse(window.localStorage.getItem("highscore")) || [];

localStorage.setItem("highscore", JSON.stringify(highscore));

//onload= startGame(renderQuestions());

function button(ele) {
    questions.check(ele);
    questions.notClickAble();
}

function next() {
    questions.next();
    questions.clickAble();
}


