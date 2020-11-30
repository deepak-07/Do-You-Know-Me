
var readlineSync = require('readline-sync');
var Chalk =require('chalk');
var name = readlineSync.question(Chalk.cyan('Please, Give your name '));
console.log(Chalk.green("Welcome ") + name +Chalk.green( " to Do you know Deepak game "));
console.log(Chalk.yellow.bold("----BEGIN-----"));
score=0;

 var questionOne = {
  question : "In which city do I stay? ",
  answer : "Kolkata",
}

var questionTwo = {
  question : "What is my age? ",
  answer : "23",
}
var lvl1 =[questionOne, questionTwo];

 var questionThree = {
  question : "In which city I am moving? ",
  answer : "Hyderabad",
}

var questionFour = {
  question : "What is my birthday month?  ",
  answer : "August",
}
var lvl2 =[questionThree, questionFour];


function play(question, answer)
{
  console.log(Chalk.bgBlue.bold(question));
  var userAns = readlineSync.question(Chalk.cyan('Enter your answer '));
  if(userAns.toUpperCase() === answer.toUpperCase())
  {
    console.log(Chalk.green("Yaay , you got this!!"));
    score++;
  }
  else
  {
    console.log(Chalk.red("Opps, You need to know more."));
  }
  console.log(Chalk.yellow.bold("----------"));
}

for(var i=0;i<lvl1.length;i++)
{
  var currentQus=lvl1[i];
  play(currentQus.question,currentQus.answer);
}
console.log(Chalk.bgMagenta("Final Score = " + score));
console.log();
// Level 2
if(score >=2)
{
  console.log(Chalk.yellow.bold("-----Welcome to Round two----"));
  console.log();
  for(var i=0;i<lvl2.length;i++)
  {
    var currentQus=lvl2[i];
    play(currentQus.question,currentQus.answer);
  }
  console.log(Chalk.bgMagenta("Well Done, Final Score = " + score));
}
else
{
  console.log(Chalk.red("You did'nt qualify for round two :( "));
}
console.log(Chalk.yellow.bold("----END-----"));