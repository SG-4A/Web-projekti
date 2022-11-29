const quizData = [
    {
        question: "Kuinka monta maanosaa on olemassa?",
        a: "5",
        b: "6",
        c: "7",
        correct: "c",
    },
    {
        question: "Argentiinan pääkaupunki on...",
        a: "Buenos Aires",
        b: "Córdoba",
        c: "Rosario",
        correct: "a",
    },
    {
        question: "Suomen väestö on ... asukasta",
        a: "n. 4 500 000",
        b: "n. 5 500 000",
        c: "n. 6 500 000",
        correct: "b",
    },
    {
        question: "Missä rivissä on virhe?",
        a: "Kanada, Yhdysvallat, Meksiko",
        b: "Brasilia, Chile, Bolivia",
        c: "Australia, Bulgaria, Uusi-Seelanti",
        correct: "c",
    },
    {
        question: "Mikä on pienin maa?",
        a: "Andorra",
        b: "Vatikaani",
        c: "Liechtenstein",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function deselectAnswers(){
    answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;

    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

submit.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2>Vastasit ${score}/${quizData.length} kysymyksestä oikein</h2>
            <button onclick="location.reload()">Kokeilla vielä kerran</button>
            `;
        }
    }
    });