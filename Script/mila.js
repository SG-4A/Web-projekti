
// kysymykset
let questionBank = [
    {
        question: "Oranssi?",
        options: ["Yellow", "Orange", "Brown"],
        answer: "Orange"
    },

    {
        question: "Sininen?",
        options: ["Blue", "Pink", "Black"],
        answer: "Blue"
    },

    {
        question: "Keltainen?",
        options: ["Brown", "Yellow", "White"],
        answer: "Yellow",
    },

    {
        question: "Punainen?",
        options: ["Green", "Pink", "Red"],
        answer: "Red",
    },

   {
        question: "Vihreä?",
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
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+" "+(i+1)+" "+"/"+" "+questionBank.lenght;
    
}

//calculat function
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
       score= score+1;
        document.getElementById(e.id).style.background= "#57E30B";
    }
    else{
        document.getElementById(e.id).style.background= "#E30B21";
    }
    setTimeout(nextQuestion,300);
}

//fuction to display next question
function nextQuestion(){
    if(i<questionBan.lenght-1)
    {
        i=i+1;
        displayQuestion();        
    }
    else{
        points.innerHTML= score+ "/"+questionBank.lenght;
        quizContainer.style.display= "block"
    }
}

//click events to next button
next.addEventListener("click",nextQuestion);

//back to quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answer
function checkAnswer(){
    let answerBank= document.getElementById("answerBank");
    let answers= document.getElementById("answers");
    answerBank.style.display= "block";
    scoreboard.style.display= "block";
    for(let a=0;a<questionBank.length;a++)
    {
        let list= document.createElement("li");
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}