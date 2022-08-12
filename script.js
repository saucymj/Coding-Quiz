var highscore = document.getElementById("highscore");
var timer = document.getElementById("time");
var welcomemessage = document.getElementById("welcome");
var startButton = document.getElementById("start");
var questionsEl = document.getElementById("questionTitle");
var answerChoiceA = document.getElementById("choiceA");
var answerChoiceB = document.getElementById("choiceB");
var answerChoiceC = document.getElementById("choiceC");
var currentQuestionsindex = 0;
let i = 0

welcomemessage.setAttribute("style", "font-family: monospace");

 
highscore.addEventListener("click", function() {
    window.location.href = "scores.html"; 
})
var questionsArray = [
    {
        question: "What does CSS stand for?",
        answers: ["a: Computer Super Science", "b: Cadscading Style Sheet","c: Computer Style Sheet"],
        correctAnswer: 1
    },
    {
        question: "What does the html do?",
        answers: [
            "a: Style the website",
            "b: Make the website function",
            "c: Create the website"
        ],
        correctAnswer: 2
    },
    {
        question: "What function sends the console a loop?",
        answers: [
            "a: While",
            "b: For",
            "c: If"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the difference in Id and Class in html?",
        answers: [
            "a: Id selects one specific element, while class allows you to select multiple elements",
            "b: Class selects one element, and Id selects multiple elements",
            "c: They both select multiple elements"
        ],
        correctAnswer: 0
    },
    {
        question: "What does git pull do in terminal/gitbash?",
        answers: [
            "a: pulls and updates the repoistory",
            "b: clones the repository",
            "c: adds content to repository"
        ],
        correctAnswer: 0
    },
    {
        question: "What branch does giihub automatically report to?",
        answers: [
            "a: root",
            "b: none",
            "c: main"
        
        ],
        correctAnswer: 2
    },
    {
        question: "What is an array?",
        answers: [
            "a: container object that holds a fixed number of values of a single type",
            "b: both A and B",
            "c: a variable"
        ],
        correctAnswer: 0
    },
    {
        question: "What number does an array's index start at?",
        answers: [
            "a: 1",
            "b: 2",
            "c: 0"
        ],
        correctAnswer: 2
    },
    {
        question: "Which of these are psuedo code?",
        answers: [
            "a: :link",
            "b: both A and C",
            "c: :hover"
        ],
        correctAnswer: 1
    },
    {
        question: "Which flexbox element sets content on the verticle axis?",
        answers: [
            "a: align-items",
            "b: justify-content",
            "c: flex-wrap"
        ],
        correctAnswer: 0
    },
];

    startButton.addEventListener("click", function(){
       
    timeLeft = setInterval(timeInterval, 1000);    
    
        var timeLeft = 90;
    
        var timeInterval = setInterval(function() {
            timeLeft--;
            timer.textContent = timeLeft + " seconds";
    
        if (timeLeft === 1) {
            timer.textContent = timeLeft + "second";
    
        } else if (timeLeft === 0) {
            timer.textContent = "0 seconds";
    
            clearInterval(timeInterval);
            
        }
        
          
        }, 1000);
        
    });

startButton.onclick = generateQuiz;

function generateQuiz() {
//var currentQuestion = questionsArray[currentQuestionsindex];

        questionsEl.textContent = questionsArray[i].question;
        answerChoiceA.textContent = questionsArray[i].answers[0]; 
        answerChoiceB.textContent = questionsArray[i].answers[1]; 
        answerChoiceC.textContent = questionsArray[i].answers[2]; 

    };

    choiceA.addEventListener('click', function(event) {
        event.stopPropagation();
        correctAnswer = questionsArray[i].correctAnswer;
        console.log("correctAnswer " + correctAnswer);
    
        if (0 === correctAnswer) {
            score++;
            generateQuiz();
        }
        if (i >= questionsArray.length -1) {
            end_quiz();
            } else {
                i++ 
                setQuizQuestions();
            };
    });

    


