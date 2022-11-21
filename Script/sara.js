//Malli:https://github.com/Ahmad528/quizApp/blob/main/quizwuiz/quiz.js

//Kysymykset talletettu taulukkoon:

let questions =[
{
    q: "Kysymys 1",
    o: ["Vaihtoehto1, vaihtoehto2, vaihtoehto3"],
    a: ["vaihtoehto2,"]
},

{
    q: "kysymys 2",
    o: ["vaihtoehto1, vaihtoehto2, vaihtoehto3"],
    a: ["vaihtoehto3"]
},

{
    q: "kysymys3",
    o: ["vaihtoehto1, vaihtoehto2, vaihtoehto3"],
    a: ["vaihtoehto3"]
},

{
    q: "kysymys4",
    o: ["vaihtoehto1, vaihtoehto2, vaihtoehto3"],
    a: ["vaihtoehto1"]
},

{
    q: "kysymys5",
    o:["vaihtoehto1, vaihtoehto2, vaihtoehto3"],
    a:["vaihtoehto1"]
},
]

// Tarvittavat muuttujat:

let question = document.getElementById("question");
let quiz = document.getElementById("container");
let scoreBoard = document.getElementById("scores");
let option0 = document.getElementById("option0");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let next = document.querySelector(".next");
let finalScore = document.getElementById("yourScoreHere");
let span = document.querySelectorAll("span");
let i=0;
let points=0;

// functio joka näyttää kysymykset:

function displayQuestion(){
    for(let j=0; j<span.length; j++){
        span[j].style.background='none';
    }
        question.innerHTML= "Q." + (i+1)+" "+questions[i].question;
        option0.innerHTML=questions[i].option[0];
        option1.innerHTML=questions[i].option[1];
        option2.innerHTML=questions[i].option[2];
        stat.innerHTML="Kysymys" + " "+(i+1)+" "+ "/" + " " +questions.length;
    
    }

// functio tuloksen laskemiseen:
function calculateScore(e){
    if(e.innerHTML===questions[i].a && points<questions.length)
{
    points= points+1;
    document.getElementById(e.id).style.background= "dark green";
}
else{
    document.getElementById(e.id).style.background= "dark red";
}
setTimeout(nextQuestion,300);
}

// functio joka siirtää seuraavaan kysymykseen:
function nextQuestion(){
    if(i<questions.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        finalScore.innerHTML= points+ "/"+ questions.length;
        quiz.style.display= "none";
        scoreBoard.style.display= "block"
    }
    }

// Eventti seuraava-painikkeelle:

next.addEventListener("click",nextQuestion);

//Takaisin painike:
function backToQuiz(){
    location.reload();
}

// Funktio jolla tarkistetaan vastaukset:

function checkAnswers(){
    let answerBank= document.getElementById("answers");
    let answers= document.getElementById("answerList");
    answerBank.style.display= "block";
    scoreBoard.style.display= "none";
    for(let j=0;j<questions.length;j++)
    {
        let list= document.createElement("li");
        list.innerHTML= questions[b].a;
        answers.appendChild(list);
    }
}


displayQuestion();

