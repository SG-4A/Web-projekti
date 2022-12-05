//Malli:https://github.com/Ahmad528/quizApp/blob/main/quizwuiz/quiz.js
//Sara-Sofia Kesäniemi

//Kysymykset talletettu taulukkoon:

let questions =[
{
    q: "Mikä on sanan oikein kirjoitettu muoto?",
    o: ["avaruus-asema", "avaruusasema", "avaruus asema"],
    a: "avaruusasema"
},

{
    q: "Mikä näistä vaihtoehdoista on oikein?",
    o: ["suomen kieli", "suomen-kieli", "suomenkieli"],
    a: "suomenkieli"
},

{
    q: "Mikä seuraavista sanoista on kirjoitettu oikein?",
    o: ["mikroaalto-uuni", "sähkö hammas harja", "sapelihammastiikeri"],
    a: "sapelihammastiikeri"
},

{
    q: "Valitse oikea vaihtoehto:",
    o: ["punainen ruusu", "punainenruusu", "punainen-ruusu"],
    a: "punainen ruusu"
},

{
    q: "Viimeinen kysymys! Mikä näistä on kirjoitettu oikein?",
    o:["tuote-esittely", "tuoteesittely", "tuote esittely"],
    a:"tuote-esittely"
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
let hideButton = document.getElementById("backbutton");
let showButton = document.getElementById("extraButton");
const PERFECT ="Mahtavaa sait täydet pisteet ja keräsit kaikki tulikärpäset!"
const GOOD = "Hienoa työtä! Keräsit melkein kaikki tulikärpäset!"
const AVERAGE = "Hyvää työtä! Seuraavalla kerralla saat varmasti kaikki tulikärpäset!"
const POOR = "Onnistut varmasti paremmin ensikerralla! Yritä visaa uudestaan."
const IMAGE0 = document.getElementById("pointsOne");
const IMAGE1 = document.getElementById("pointsTwo");
const IMAGE2 = document.getElementById("pointsThree");
const IMAGE3 = document.getElementById("pointsFour");
const IMAGE4 = document.getElementById("pointsFive");


// functio joka näyttää kysymykset:

function displayQuestion(){
    for(let a=0; a<span.length; a++){
        span[a].style.background="none";
    }
        question.innerHTML= "Kysymys"+ " " + (i+1)+":"+" "+questions[i].q;
        option0.innerHTML=questions[i].o[0];
        option1.innerHTML=questions[i].o[1];
        option2.innerHTML=questions[i].o[2];
        document.getElementById("stats").innerHTML="Kysymys" + " "+(i+1)+" "+ "/" + " " +questions.length;
    
    }

// functio tuloksen laskemiseen:
function calculateScore(e){
    if(e.innerHTML===questions[i].a && points<questions.length)
{
    points= points+1;
    document.getElementById(e.id).style.background="#57E30B";
}
else{
    document.getElementById(e.id).style.background="#E30B21";
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
        if(points===5){
            document.getElementById("answerComment").textContent= PERFECT;
            IMAGE4.classList.remove("hidden");
        } else if (points===4){
            document.getElementById("answerComment").textContent= GOOD;
            IMAGE3.classList.remove("hidden");
        } else if(points===3){
            document.getElementById("answerComment").textContent= AVERAGE;
            IMAGE2.classList.remove("hidden");
            hideButton.classList.add("hidden");
            showButton.classList.remove("hidden");
        } else if (points===2){
            document.getElementById("answerComment").textContent= POOR;
            IMAGE1.classList.remove("hidden");
            hideButton.classList.add("hidden");
            showButton.classList.remove("hidden");
        } else if (points===0 || points===1){
            document.getElementById("answerComment").textContent= POOR;
            IMAGE0.classList.remove("hidden");
            hideButton.classList.add("hidden");
            showButton.classList.remove("hidden");
            
        }
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
        list.innerHTML= questions[j].q+":"+"<br>"+questions[j].a;
        answers.appendChild(list);
    }
}


displayQuestion();

