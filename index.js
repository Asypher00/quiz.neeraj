var readlineSync = require('readline-sync');
var userName = readlineSync.question('What is your name? ');
console.log("Welcome To the quiz " + userName);
var score = 0;

var high_scores = {
  name : "Abhay",
  high_score : 3 ,
}

function questions(question , answer)
{
  var my_Answer = readlineSync.question(question);
  if (my_Answer === answer)
  {console.log("You are correct ");
  score = score + 1;
  console.log("Current Score = " + score);}
  else
  {console.log("You are incorrect ");
  score=score-1;
  console.log("Current Score = " + score);
  console.log("--------------------");
  }

}

var question_one = {
  question : "Where Do I live?",
  answer : "Kolkata",

}

var question_two = {
  question : "What is my favourite sport?",
  answer : "Cricket",

}
 var question_three = {
   question : "In which college do I study?",
   answer : "IIEST Shibpur",
 }

var question_four = {
  question : "Who is my favourite player?",
  answer : "Virat Kohli",
};

var question_five = {
  question : "What is my birth month?",
  answer : "October",
};

var question_array = [question_one, question_two, question_three, question_four, question_five];
for(var i = 0 ; i < question_array.length ; i++)
{ var current_question = question_array[i];
questions(current_question.question, current_question.answer);}

if(score >= high_scores.high_score)
{console.log("You are the new high scorer");
high_scores.name = userName;
high_scores.high_score = score;
console.log(" The new high score is " + score + " by " + userName);}
else{console.log("The High score is scored by " + high_scores.name + " and the high score is " + high_scores.high_score);

}


  

console.log("Your total score is " + score);
