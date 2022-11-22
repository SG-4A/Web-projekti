
// kysymykset
let questions = [
    {
        q: "Oranssi?",
        options: ["Yellow", "Orange", "Brown"],
        answer: "Orange"
    },

    {
        q: "Sininen?",
        options: ["Blue", "Pink", "Black"],
        answer: "Blue"
    },

    {
        q: "Keltainen?",
        options: ["Brown", "Yellow", "White"],
        answer: "Yellow",
    },

    {
        q: "Punainen?",
        options: ["Green", "Pink", "Red"],
        answer: "Red",
    },

 {
        q: "Vihreä?",
        options: ["Brown", "Purpple", "Green"],
        answer: "Orange"
    },

]

let question= document.getElementById("question");
let quizContainer= document.getElementById("quiz-container");
let scorecard= document.getElementById("scorecard");
let option0= document.getElementById("option0");
let option1= document.getElementById("option1");
let option2= document.getElementById("option2");
let option3= document.getElementById("option3");
let next= document.querySelectorAll(".next");
let points= document.getElementById("score");
let span= document.querySelectorAll("span");
let i=0;
let score= 0;

//guestion function

function displayQuestion(){
    for(let a=0;a<span.length;a++){
        span[a].style.background="none";
    }
    question.innerHTML= "Q."+(i+1)+" " +questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
}