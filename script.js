onload = document.getElementById("questionContent").hidden = true;
document.getElementById("restartBtn").hidden = true;

var quiz = [
    {
        question: 'What is thing?',
        answers: [
            { text: 'Option A', correct: true },
            { text: 'Option B', correct: false },
            { text: 'Option C', correct: false }
        ]
    },
    {
        question: 'What is thing2?',
        answers: [
            { text: 'Option A.2', correct: false },
            { text: 'Option B.2', correct: true },
            { text: 'Option C.2', correct: false }
        ]
    },
    {
        question: 'What is thing3?',
        answers: [
            { text: 'Option A', correct: true },
            { text: 'Option B', correct: false },
            { text: 'Option C', correct: false }
        ]
    },
    {
        question: 'What is thing4?',
        answers: [
            { text: 'Option A', correct: true },
            { text: 'Option B', correct: false },
            { text: 'Option C', correct: false }
        ]
    },
    {
        question: 'What is thing5?',
        answers: [
            { text: 'Option A', correct: true },
            { text: 'Option B', correct: false },
            { text: 'Option C', correct: false }
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

currentQuestion = 0; // CurrentQ is set to the first index place of 0
currentAnswer = 0;

function startGame() {
    // console.log('started')
    dissapearStart();
    showQuestionContent();
    appendQuestion();
}

var appendQuestion = function() {
    var quizArea = "<h1>" + (quiz[currentQuestion].question) + "</h1>"; // defines question display area
    document.getElementById("questions").innerHTML = quizArea; // displays question from array in doc by ID

    var answers = quiz[currentQuestion].answers; // defines answer display area
    console.warn(answers)
    var buttons = document.querySelectorAll('.answer-btn'); // grabs buttons, puts in an array

    for (var i = 0; i < answers.length; i++) { // loops through possible answers based on current questions
        buttons[i].textContent = answers[i].text; // sets content to button
        buttons[i].addEventListener('click', checkAnswer); // adds eventL to button
    }
}

var checkAnswer = function (e) {
    console.log(e.target.textContent);
    var selectedOption = e.target.textContent; // Grab text from current button

    for (var i = 0; i < quiz[currentQuestion].answers.length; i++) {
        var option = quiz[currentQuestion].answers[i]; // Grab iteration of 

        if (selectedOption === option.text) { // Compare: does the 2 texts match
           if(option.correct) { // Is it correct
                alert('Correct! ', option.text);
            } else {
                alert('Incorrect :( ', option.text);
            }
        }
    }

    currentQuestion++; // move on to next question
    appendQuestion();
}


