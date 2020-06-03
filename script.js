const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionEl = document.getElementById('question')
const answerButtonsEl = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', ()=> {
    currentQuestionIndex++
    setNextQuestion()
} )

function startGame() {
    //console.log('Statred')
    startButton.classList.add('hide')
    shuffledQuestions= questions.sort( () => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answer.forEach(answer =>{
        const button = document.createElement('button')
        button.innerText = answerText
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsEl.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsEl.fistChild) {
        answerButtonsEl.removeChild
        (answerButtonsEl.firstChild)
    }  

}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body.correct)
    Array.from(answerButtonsEl.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')

    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function setStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
    
}

const questions = [
    {
        question:"What is Javascript?",
        answers:[
            {text:"plumming ", correct:true},
            {text:"decoration", correct:false},
            {text:"landscape", correct:false},
            {text:"framework", correct:false},
        ]
    };

    {
        question:"What is Javascript?",
        answers:[
            {text:"plumming ", correct:true},
            {text:"decoration", correct:false},
            {text:"landscape", correct:false},
            {text:"framework", correct:false},
        ]
    };

    {
        question:"What is Javascript?",
        answers:[
            {text:"plumming ", correct:true},
            {text:"decoration", correct:false},
            {text:"landscape", correct:false},
            {text:"framework", correct:false},
        ]
    };

    {
        question:"What is Javascript?",
        answers:[
            {text:"plumming ", correct:true},
            {text:"decoration", correct:false},
            {text:"landscape", correct:false},
            {text:"framework", correct:false},
        ]
    };

    {
        question:"What is Javascript?",
        answers:[
            {text:"plumming ", correct:true},
            {text:"decoration", correct:false},
            {text:"landscape", correct:false},
            {text:"framework", correct:false},
        ]
    };
];


// 
// var score= 0;

// for(var i=0; i<questions.length; i++){
//     var response= window.prompt(question[i].prompt);
//         if(response==questio[i].answer){
//             score++;
//             alert("correct!");
//         }else{
//             alert("wrong!");
//         }
// }
// alert("you got" + score +"/" + questions.length);