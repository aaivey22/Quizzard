onload = document.getElementById("questionContent").hidden = true;
document.getElementById("restartBtn").hidden = true;

var questions = [
    {
        question: 'What is thing?',
        answers: [
            { text: 'a', correct: true },
            { text: 'b', correct: false },
            { text: 'c', correct: false }
        ]
    }
]
startButton = document.getElementById('startBtn');
startButton.addEventListener('click', startGame);

function showQuestionContent() {
    document.getElementById("questionContent").hidden = false;
}

function dissapearStart() {
    document.getElementById("startBtn").hidden = true;
    document.getElementById("introPage").hidden = true;
    // console.log('hidden')
}

function startGame() {
    // console.log('started')
    dissapearStart()
    showQuestionContent()
}



// const questionContainerEl = document.getElementById('questionContainer');
// const questionEl = document.getElementById('question')
// const answerBtnEl = document.getElementById('answerBtns')
// var currentQuestionIndex

// startButton.addEventListener('click',startGame)



//     startButton.classList.add('hide');
//     crrentQuestionIndex = 0
//     questionContainerEl.classList.remove('hide');
//     setNextQuestion()

// function showQuestion(questions){
//     questionEl.innerText = question.question
// }

// function setnextQuestion() {
//     showQuestion(currentQuestionIndex)
// }

// function selectAnswer() {

// }

