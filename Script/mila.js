
// kysymykset
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

let question = document.getElementById("question");
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
let i = 0;
let score = 0;
//guestion function

function displayQuestion() {
    /*for (let a = 0; a < li.length; a++) {
        li[a].style.background = "none";
    }*/
    for (let a = 0; a < span.length; a++) {
        span[a].style.background = "none";
        span[a].parentElement.style.background = "burlywood";
    }
    
    question.innerHTML = "Mikä on englanniksi " + questionBank[i].question + "?";
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];
    stat.innerHTML = "Kysymykset" + " " + (i + 1) + " " + "/" + " " + questionBank.length;
}

//calculat function
function calcScore(e) {
    //console.log("Valittu: ");// + e.innerHTML);
    //console.log("Vastaus: " + questionBank[i].answer);
    if (e.target.innerHTML === questionBank[i].answer && score < questionBank.length) {
        score = score + 1;
        document.getElementById(e.target.id).parentElement.style.background = "#07eb1a";
        document.getElementById(e.target.id).style.background = "#07eb1a";
        //console.log(e.id);
    }
    else {
        document.getElementById(e.target.id).parentElement.style.background = "#eb0b07";
        document.getElementById(e.target.id).style.background = "#eb0b07";
        //document.getElementById(e.id + "0").style.background = "#eb0b07";
    }
    setTimeout(nextQuestion, 300);
}

//fuction to display next question
function nextQuestion() {
    if (i < questionBank.length - 1) {
        i = i + 1;
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