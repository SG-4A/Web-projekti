//Vastaus pankki
let questionBank = [
    {
        question : "Missä Olympialaiset saivat alkunsa?", 
        option : ["Kreikka","Italia","Suomi","Amerikka"],
        answer : "Kreikka"
    },
    {
        question : "Kuka keksi puhelimen?", 
        option : ["Steve Jobs","Elon Musk","Alexander Graham Bel","Bill Gates"],
        answer : "Alexander Graham Bel"
    },
    {
        question : "Mikä maa käytti ensimmäisenä paperi rahaa?", 
        option : ["Italia","Amerikka","Kiina","Suomi"],
        answer : "Kiina"
    },
    {
        question : "Mikä maa lahjoitti Vapaudenpatsaan Amerikkaan?", 
        option : ["Ranska","Venäjä","Ruotsi","Suomi"],
        answer : "Ranska"
    },
    {
        question : "Minä vuonna Suomi sai itsenäisyyden", 
        option : ["1917","1876","2000","1984"],
        answer : "1917"
    },
]

let question = document.getElementById("question");
let quizContainer = document.getElementById("quiz-container");
let scorecard = document.getElementById("scorecard");
let option0 = document.getElementById("option0");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let options = document.querySelector(".next");
let points = document.getElementById("score");
let span = document.querySelectorAll("span");
let i=0;
let score= 0;

//function to display questions
function displayQuestion(){
    for(let a=0;a<span.length;a++){
        span[a].style.background="none";
    }
    question.innerHTML= " " +(i+1)+". "+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Kysymys"+" "+(i+1)+" "+"/"+" "+questionBank.length;
}

//function to calculate scores
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

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML = score+ "/"+ questionBank.length;
        quizContainer.style.display = "none";
        scoreboard.style.display= "block"
    }
}
//yrittää olla kuvan vaihtaja

function v13() {
	
	
	const PRIZE1 = '<img src="../Images/Nimetön.png">';
	const PRIZE2 = '<img src="../Images/purkki0.png">';
	const PRIZE3 = '<img src="../Images/purkki1.png">';
	const PRIZE4 = '<img src="../Images/purkki2.png">';
    const PRIZE5 = '<img src="../Images/purkki3.png">';
    const PRIZE6 = '<img src="../Images/purkki4.png">';


    document.getElementById("scoreboard").innerHTML = "";

    let score = Number(document.getElementById("score").value);


    let result = document.getElementById("scoreboard");

    if (result =0) {
        document.getElementById("result").innerHTML = PRIZE1;} 
    else if (result = 1) {
        document.getElementById("result").innerHTML = PRIZE2;}
    else if (result = 2) {
        document.getElementById("result").innerHTML = PRIZE3;}
    else if (result = 3){
        document.getElementById("result").innerHTML = PRIZE4;}
    else if (result = 4) {
        document.getElementById("result").innerHTML = PRIZE5;}
    else if (result = 5) {
        document.getElementById("result").innerHTML = PRIZE6;}
}
















function getImage(scoreboard)

let image = "";
if(imagePlace = 0){
    image = "../images/Nimetön.png"
}
if(imagePlace = 1){
    image = "../images/purkki0.png"
}
if(imagePlace = 2){
    image = "../images/purkki1.png"
}
if(imagePlace = 3){
    image = "../images/purkki2.png"
}
if(imagePlace = 4){
    image = "../images/purkki3.png"
}
if(imagePlace = 5){
    image = "../images/purkki4.png"
}
//back to quiz buttton event
function backToQuiz(){
    location.reload();
}
//yrittää olla kuvan vaihtaja
function getImage(answerBank)

let image = "";
if(imagePlace = 0){
    image = "../images/Nimetön.png"
}
if(imagePlace = 1){
    image = "../images/purkki0.png"
}
if(imagePlace = 2){
    image = "../images/purkki1.png"
}
if(imagePlace = 3){
    image = "../images/purkki2.png"
}
if(imagePlace = 4){
    image = "../images/purkki3.png"
}
if(imagePlace = 5){
    image = "../images/purkki4.png"
}
//function to check answers
function checkAnswer(){
    let answerBank = document.getElementById("answerBank");
    let answers= document.getElementById("answers");
    answerBank.style.display= "block";
    scoreboard.style.display= "none";
    for(let a=0;a<questionBank.length;a++)
    {
        let list = document.createElement("li");
        list.innerHTML = questionBank[a].answer;
        answers.appendChild(list);

    }

}
displayQuestion();