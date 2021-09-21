const readlineSync = require ("readline-sync");
const chalk = require ('chalk');
let score = 0;
let userName = readlineSync.question(chalk.blue("What is your good name?"));
console.log(`Hello ${userName}`);

const array = [
  {
    question : "\n Where does Pratik live ? \n",
    answer : "pune"
  },
    {
    question : "\n Which is the favourite sport of Pratik ? \n",
    answer : "basketball"
  },
    {
    question : "\n Pratik's favourite food is ? \n",
    answer : "biryani"
  },
    {
    question : "\n What is Pratik's mother tongue ?\n",
    answer : "marathi"
  },
    {
    question : "\n Favourite color is ? \n",
    answer : "red"
  }
]

if(readlineSync.keyInYN(chalk.red("Shall we begin the game ? y/n"))){
  console.log(chalk.green("lets begin the game of how well do you know Pratik"));
  for (let i=0;i<array.length;i++){
    let currentQuestion = array[i].question;
    let currentAnswer = array[i].answer;
    console.log(chalk.yellow(`\n Question ${i+1} of ${array.length}`))
  play(currentQuestion,currentAnswer);
  if (i<array.length -1){
      console.log(chalk.cyan(`Your current score is ${score}/50`));
  }
  }
  console.log(chalk.yellow(`Your final score is ${score}/50`));
} else {
  console.log(chalk.red("cancelled"));
  console.log(chalk.blue("Run again to start"));
}

function displayAnswerMessage(isRight){
  if(isRight){
    console.log(chalk.green("Yaay,Correct Answer!!"));
  } else {
     console.log(chalk.red("Opps,Incorrect Answer!!"));
  }
}

function play(que,ans){
  let userAnswer = readlineSync.question(que);
  if(userAnswer === ans){
    displayAnswerMessage(true)
    score += 10 ;
  }else{
    displayAnswerMessage(false)
  }
}