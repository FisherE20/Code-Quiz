var ul= document.getElementById('ul');
var btn= document.getElementById('button');
var scoreCard= document.getElementById('scoreCard');
var quizBox= document.getElementById('questionBox');
var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');
var op4 = document.getElementById('op4')

    var app= {
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

    
    index= 0,
    function renderQuestions(){
        if(this.index<=this.questions.length-1){
        quizBox.innerHTML=this.index+1+"."+this.question[this.index].q;
        op1.innerHTML=this.questions[this.index].options[0];
        op2.innerHTML=this.questions[this.index].options[1];
        op3.innerHTML=this.questions[this.index].options[2];
        op4.innerHTML=this.questions[this.index].options[3];
        this.scoreCard();
    }
    else{
        quizBox.innerHTML="Quiz Over......!!!";
        op1.style.display="none";
        op2.style.display="none";
        op3.style.display="none";
        op4.style.display="none";
        btn.style.display="none";
    }
    },
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
        frameElement(let i=0; i<ul.children.length; i++){
            ul.children[i].style.pointerEvents="none";
        }
    }

    function clickAble(){
        frameElement(let i=0; i<ul.children.length; i++){
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
    
    //Set the date we're counting down to
    var countDownDate= newDate("60:00").getTime();

    //Update the count down every 1 second
    let timer= setInterval(function(){
        seconds--;
        
        //Get time
        var now= newDate().getTime();

        //find distance between now and the count down date
        var distance= countDownDate - now;
        
        //Time calculations for minutes and seconds.
        var minutes=Math.floor((distance % 1000 * 60* 60))/ (1000 * 60));
        var seconds = Math.floor((distane % (1000 * 60)) / 1000);

        //Output the result in an element with id=""
        document.getElementById("time").innerHTML= minutes + "m" + seconds + "s";

        // If count down is over, Write some text
        if(distance < 0){
            clearInterval(timer);
        

        document.getElementById("seconds").innerText= seconds % 60;
        document.getElementById("minutes").innerText= parseInt(seconds / 60);
        }, 1000);
        
    
    }

window.onload=app.renderQuestions();

function button(ele){
    app.check(ele);
    app.notClickAble();
}

function next(){
    app.next();
    app.clickAble();
}


