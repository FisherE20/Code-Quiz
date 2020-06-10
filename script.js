const startButton= document.getElementById('start-btn');
const nextButton= document.getElementById('next-btn');

var ul= document.getElementById('ul');
var scoreCard= document.getElementById('scoreCard');
var quizBox= document.getElementById('questionBox');
//answer
var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');
var op4 = document.getElementById('op4');
//timer 
let minutesDisplay = document.querySelector("#minutes");
let secondsDisplay = document.querySelector("#seconds");


startButton.addEventListener('click', startGame)

var questions= {
        questions:[
        {q:'Inside which HTML element do you put the JavaScript code?',options:['<script>','<javascript>','<js>'
        , 'None of the Above'], answer:1},

        {q:"What does CSS stand for?",options:["Computer Style Sheets","Cascading Style Sheets","Colorful Style Sheets"
        , "Coordinating Style Sheet"], answer:2},

        {q:"What does HTML stand For",options:["What does HTML stand For","Home Tool Markup Language","Hyperlinks and Text Markup Language"
        , "Hotspot Text Markup Language"], answer:3},

        {q:'HTML stands for?',options:['answer 1','answer 2','answer 3'
        , 'answer 4'], answer:1},

    ],
}

let lastQuestionIndex= questions.length - 1;
let runningQuestionIndex=0;
index=0;

    
    
    function startGame(){
        //console.log('started');
        //startButton.classlist.add('hide')
        startTimer();
        renderQuestion();
    }
    
    function renderQuestions(){
        if(this.index<=this.questions.length-1){
        quizBox.innerHTML=this.index+1+"."+this.question[this.index].q;
        op1.innerHTML=this.questions[this.index].options[0];
        op2.innerHTML=this.questions[this.index].options[1];
        op3.innerHTML=this.questions[this.index].options[2];
        op4.innerHTML=this.questions[this.index].options[3];
        this.scoreCard();
    } else{
        quizBox.innerHTML="Quiz Over......!!!";
        op1.style.display="none";
        op2.style.display="none";
        op3.style.display="none";
        op4.style.display="none";
        btn.style.display="none";
    }
    }

    nextButton.addEventListener('click', next)

    function next(){
        this.index++;
        this.renderQuestion();

    }
    function checkAnswer(ele){
            var id=ele.id.split('');
            //console.log(id);
            if(id[id.length-1]==this.questions[this.index].answer){
               // console.log("Correct")
               this.score++;
               ele.className="correct";
               ele.innerHTML="Correct";
               this.scoreCard();
            } else{
                //console.log("Not")
                ele.className="wrong";
                ele.innerHTML="Wrong";
            }
    }
    function notClickAble(){
        var frameElement;
        for(let i=0; i<ul.children.length; i++){
            ul.children[i].style.pointerEvents="none";
        }
    }

    function clickAble(){
        var frameElement;
        for(i=0; i<ul.children.length; i++){
            ul.children[i].style.pointerEvents="auto";
            ul.children[i].style.className="";
        }
    }

    function notClickAble(){

    }
    score= 0,
    function scoreCard(){
        scoreCard.innerHTML=this.questions.length+"/"+this.score;
    }

    function startTimer() {
        var today = new Date();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('timer').innerHTML =
        m + ":" + s;
        var t = setTimeout(startTimer, 1000);
      }
      function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
      }

//window.onload=startGame.renderQuestions();

function button(ele){
    questions.check(ele);
    questions.notClickAble();
}

function next(){
    questions.next();
    questions.clickAble();
}


