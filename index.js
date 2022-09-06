var readlineSync= require("readline-sync");
var userName= readlineSync.question("What is your username? ")
console.log("Namaste! "+userName +" Welcome to the Online Quiz" )
var score= 0;
var highScore=[
  {
    user: "dpkpradhan17",
    score: "3"
  },
  {
    user: "swati01",
    score:"2"
  },
  {
    user: "swastik009",
    score:"1"
  },
  {
    user: "kartik90",
    score: "0"
  }
];

function play(question, answer){
  var state=readlineSync.question(question)
  if(state===answer){
    console.log("Right Answer!")
    score= score+1;
  }
  else{
    console.log("Wrong Answer!")
  }
  console.log("Your score is: "+score)
  console.log("--------------")
}

var questions=[{question: "What is my full name? ",
               answer: "deepak pradhan"},
              {question: "Where do I live? ", 
               answer:"ankleshwar"},
              {question:"Where did i completed my school? ", 
               answer:"ellenabad"}];

for (i=0;i<questions.length;i++){
  var quiz=questions[i];
  play(quiz.question,quiz.answer);
}
console.log("Your Total Score is: "+score)

console.log("------------------------------------")

for(i=0;i<highScore.length;i++){
  var check=highScore[i];
  if(score<check.score){
    console.log("You are not a high scorer")
  }
  else{
    console.log("Congratulations! "+userName+ " You have broken the records.")
  }
  break;
}