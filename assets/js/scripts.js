let rulesForm=document.getElementById("rulesId");
let quizForm=document.getElementById("quizId");
let resultForm=document.getElementById("resultId");
let QuestionNum=document.getElementById("questionNum");
let Question=document.getElementById("questionId");
let Answer_1=document.getElementById("option1");
let Answer_2=document.getElementById("option2");
let Answer_3=document.getElementById("option3");
let Answer_4=document.getElementById("option4");
let submitBtn =document.getElementById("submitId");
let progressBar = document.getElementById("progFront");
let index =0;
var Questions;
var newQuestion;
var counter=1;
//==================================================Ajax request ============================
function getQuestions(){
    let Request =new XMLHttpRequest();
    Request.onreadystatechange=function(){
        if(this.readyState === 4 && this.status === 200){
            // console.log(this.responseText)  //for showing if we get data from json
            Questions = JSON.parse(this.responseText);  // to transfer json object to js object
            // for showing if we transfer data from json to js
             newQuestion=Questions.sort(()=>Math.random() - .5);
            displayQuestions();
        }
    };
    Request.open("GET", "../classes/scripts.php",true);
    Request.send();
}

/*=========================================================== Display Questions Function ============================================*/
let answerR= document.getElementsByName("options");

answerR.forEach(element=>{                            
    element.addEventListener("click",()=>{
        submitBtn.style.visibility="visible";
        element.parentElement.parentElement.style.background="#4161ff";
    })
});

function displayQuestions(){
    if(index<Questions.length){
        answerR.forEach(element=>{
            element.parentElement.parentElement.style.background="none";
        })
        let cunt = ((counter*100)/Questions.length);
        progressBar.style.width=cunt+"%";
        rulesForm.style.display="none";
        quizForm.style.display="block";
        QuestionNum.innerText=`${index+1}`;
        Question.innerText= newQuestion[index]["question"];
        Answer_1.innerText= newQuestion[index]["choice1"];
        Answer_2.innerText= newQuestion[index]["choice2"];
        Answer_3.innerText= newQuestion[index]["choice3"];
        Answer_4.innerText= newQuestion[index]["choice4"];
        quizCountdown();
    }
}
    

//======================================================start button=======================================

let startBtn =document.getElementById("startId");
let QuizStep =document.getElementById("QuizStep");
startBtn.addEventListener("click",()=>{
    getQuestions();
    QuizStep.classList.add("completed");
});

//====================================================progress Bar / correctAnswer===========================
let rightAnswers=0;
let wrongAnswers=0;
let score=0;

    submitBtn.addEventListener("click",()=>{
        index++;
        counter++;
        console.log(index);
        submitBtn.style.visibility="hidden";
        if(index<Questions.length){
            clearInterval(counterTime);
            counterElement.innerHTML = 10;
          
            answerR.forEach(element=>{
                let elementBtn =element.parentElement.parentElement;
                if(element.checked==true){
                   let x=element.value;
                    if(x==Questions[index-1]["answer"]){
                        elementBtn.style.background="green";
                        rightAnswers++;
                        score+=10;
                    }else{
                        elementBtn.style.background="red";
                        wrongAnswers++;
                    }
                }
                element.checked=false;
            })
        }else {
            setTimeout(Result,1500);
            Result();            //to take me to the result form after last submit
        }
        next =setTimeout(displayQuestions,1500); // to wait for 1.5 s Before go to the next question
    });




//====================================================timeCounter===========================

var counterElement = document.getElementById("timeCounter");
function quizCountdown(){
   counterTime = setInterval(()=>{
    if(counterElement.innerHTML>0){
        counterElement.innerHTML -= 1;
    }else if(counterElement.innerHTML==0){
        if(index<Questions.length){
            submitBtn.click();
            counterElement.innerHTML = 10;
        }else{
            Result();
        }
    }
  }, 1000);
}



//===================================================Result===========================
let ResultStep =document.getElementById("ResultStep");
let tASpan = document.getElementById("tA");
let fASpan = document.getElementById("fA");
let totalScore = document.getElementById("score");
let level = document.getElementById("level");


function Result(){
    ResultStep.classList.add("completed");
    rulesForm.style.display="none";
    quizForm.style.display="none";
    resultForm.style.display="block";
    // tASpan.innerText=rightAnswers;
    // fASpan.innerText=wrongAnswers;
    totalScore.innerText=score;
    if(score<50){
        level.innerText="bad better luck next time";

    }else if(score>=50 && score<70){
        level.innerText="good";

    }else if(score>=70){
        level.innerText="perfect";

    }
}







