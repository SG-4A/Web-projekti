
// kysymykset ja oikeat vastaukset
let questionBank = [
    {
        question: "oranssi",
        option: ["Yellow", "Orange", "Brown", "Green"],
        answer: "Orange"
    },

    {
        question: "sininen",
        option: ["Blue", "Pink", "Black", "Brown"],
        answer: "Blue"
    },

    {
        question: "keltainen",
        option: ["Brown", "Yellow", "White", "Orange"],
        answer: "Yellow",
    },

    {
        question: "punainen",
        option: ["Green", "Pink", "Red", "Brown"],
        answer: "Red",
    },

    {
        question: "vihreä",
        option: ["Brown", "Purple", "Green", "Red"],
        answer: "Green"
    },
]
const TIME_AMOUNT = 5;
let question = document.getElementById("question");
let timer = document.getElementById("timer");
let questions = document.getElementById("questions");
let quizContainer = document.getElementById("quiz-container");
let scoreboard = document.getElementById("scoreboard");
let option0 = document.getElementById("option0");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let next = document.querySelector(".next");
let points = document.getElementById("score");
let span = document.querySelectorAll("span");
let li = document.querySelectorAll("li");
let questionIndex = 0;
let score = 0;
let timeAmount = TIME_AMOUNT;
let questionAnswered = false;

//guestion function

function displayQuestion() {
    
    for (let a = 0; a < span.length; a++) {
        span[a].style.background = "none";
        span[a].parentElement.style.background = "burlywood";
    }
    
    question.innerHTML = "Mikä on englanniksi " + questionBank[questionIndex].question + "?";
    option0.innerHTML = questionBank[questionIndex].option[0];
    option1.innerHTML = questionBank[questionIndex].option[1];
    option2.innerHTML = questionBank[questionIndex].option[2];
    option3.innerHTML = questionBank[questionIndex].option[3];
    stat.innerHTML = "Kysymykset" + " " + (questionIndex + 1) + " " + "/" + " " + questionBank.length;
    timer.innerHTML = timeAmount;
    setTimeout(myTimer, 1000);
}

//calculat function
function calcScore(e) {
    setQuestionTextColor("white",500);
    
    if (e.target.innerHTML === questionBank[questionIndex].answer && score < questionBank.length) {
        score = score + 1;
        document.getElementById(e.target.id).parentElement.style.background = "#07eb1a";
        document.getElementById(e.target.id).style.background = "#07eb1a";
       
    }
    else {
        document.getElementById(e.target.id).parentElement.style.background = "#eb0b07";
        document.getElementById(e.target.id).style.background = "#eb0b07";
        
    }
    questionAnswered = true;
    timeAmount = TIME_AMOUNT;
    setTimeout(nextQuestion, 300);
}

function myTimer()
{
    if (questionAnswered)
    {
        questionAnswered = false;
        return;
    }
    timeAmount--;
    timer.innerHTML = timeAmount;
    if (timeAmount <= 0)
    {
        timeAmount = TIME_AMOUNT;
        nextQuestion();
        //question.style.color = "red";
        setQuestionTextColor("red", 500);
        //setTimeout(resetQuestionText, 500);

        
    }
    else
    {
        setTimeout(myTimer, 1000);
    }
}

function setQuestionTextColor(color, timeOut) {
    question.style.color = color;
    setTimeout(resetQuestionText, timeOut);
}

function resetQuestionText() {
    question.style.color = "black"
}

//fuction to display next question
function nextQuestion() {
    if (questionIndex < questionBank.length - 1) {
        questionIndex = questionIndex + 1;
        displayQuestion();
    }
    else {
        points.innerHTML = score + "/" + questionBank.length;
        questions.style.display = "none";
        scoreboard.style.display = "block";
    }
}

//click events to next button
//next.addEventListener("click", nextQuestion);

//back to quiz button event
function backToQuiz() {
    location.reload();
}

//function to check Answer
function checkAnswer() {
    let answerBank = document.getElementById("answerBank");
    let answers = document.getElementById("answers");
    answerBank.style.display = "block";
    scoreboard.style.display = "none";
    for (let a = 0; a < questionBank.length; a++) {
        let list = document.createElement("li");
        list.innerHTML = questionBank[a].answer;
        answers.appendChild(list);
    }
}
function initialize()
{
    option0.addEventListener("click", calcScore);
    option1.addEventListener("click", calcScore);
    option2.addEventListener("click", calcScore);
    option3.addEventListener("click", calcScore);
    displayQuestion();
}

initialize();


//Koodipohja otettu Youtubesta. https://www.youtube.com/watch?v=2jwdyO_UunE&t=121s//