/*

Quiz App
https://replit.com/@InvicibleCoder/TANZANIA-CLI-APP#index.js?embed=1&output=1

*/
//var alphanumeric = require("is-alphanumeric")

//var regExpression = /^[0-9a-zA-Z]+$/; 

var readlineSync = require('readline-sync');
var chalk = require('chalk');
console.log(chalk.magenta.bold("****TANZANIA CLI APP ***"));

console.log("")

var userName = readlineSync.question("What's your name? :");

var regExpression = /^[a-zA-Z]+$/; 
if(userName.match(regExpression)){
var welcomeUser = "Hello " + chalk.magenta.bold.italic(userName) + " welcome to QUIZ APP"; 

console.log("\n");
console.log(chalk.cyan.bold(welcomeUser));
console.log("\n")
console.log(chalk.bold.underline.magenta("Rules and Instructions"));
console.log("1. There are 16 multiple choice based questions in this Easy Level. ");
console.log("2. You will get 1 point on each right answer.");
console.log("3. One point will be deducted when wrong is selected.");
console.log("4. By scoring 10 points, you will be admitted to Medium Level.")
console.log("5. Selecting the index/ number i.e (1 upto 4) to answer, The final score will be printed at the end of the quiz.")
console.log("")
console.log(chalk.cyan("********************************"));
console.log("");

var userMessage = "Do you wish to continue to Quiz App?, type  y to continue or q to quite the play,then press enter button to proceed (y/q): "
var userSelection = readlineSync.question(userMessage);

if(userSelection.toLowerCase() === "y"){
var score = 0;
console.log("")

console.log(chalk.cyan.bold("*****************************"));
console.log(chalk.magenta.underline("Let's start the quiz"));
var mcqList = [

  {
    question: "(1) What is the Capital City of Tanzania? : ",
    answers : ["Mwanza","Dar Es Salaam", "Mtwara","Dodoma"],
    correctAnswer: "Dodoma"
  },

  {
     question: "(2) Who was the first President of Tanzania? : ",
    answers: ["Jakaya Kikwete","Benjamin Mkapa", "Mwalim Nyerere","Dkt John Magufuli"],
    correctAnswer: "Mwalim Nyerere"
  },

  
  {
    question: "(3) When did Tanganyika got it Independence? : ",
    answers : ["9/12/1962","26/4/1964", "9/12/1964","9/12/1961"],
    correctAnswer: "9/12/1961"
  },  

  
  {
    question: "(4) What is the highest Mountain in Tanzania? : ",
    answers : ["Mount Meru","Mount Kilimanjaro", "Oldonyo Lengai","Udzungwa"],
    correctAnswer: "Mount Kilimanjaro"
  },
  
  {
   question: "(5) How many colors are in the Flag of Tanzania Republic? : ",
    answers : [2, 3, 4,1],
    correctAnswer: 4
  },

  {
    question: "(6) Which one is NOT historical site in Tanzania? : ",
    answers : ["Kalenga","Kilwa", "Isimila", "Olduvai gorge"],
    correctAnswer: "Kalenga"
  },

  {
   question: "(7) In the United Republic of Tanzania, the Juidciary is headed by the : ",
    answers : ["DPP","Prime Ministers", "Attorney General", "Chief Justice"],
    correctAnswer: "Chief Justice"
  },


  
  {
   question: "(8) What is official National Anthem of Tanzania? : ",
    answers : ["Tanzania Tanzania","Mungu Ibariki","Tazama Ramani", "Uhuru na Umoja"],
    correctAnswer: "Mungu Ibariki"
  },

  
  {
   question: "(9) Who was the Chief of Hehe Tribe who led the War against Germany? : ",
    answers : ["Chief Mirambo", "Mangi Meli", "Chief Mkwawa","Chief Mangisina"],
    correctAnswer: "Chief Mkwawa"
  },

  
  {
   question: "(10) A nationalist political party headesd by Julius Nyerere? : ",
    answers : ["TAA", "TANU", "ASP","CCM"],
    correctAnswer: "TANU"
  },

   
  {
   question: "(11) The organs responsible for administering elections in Tanzania? ",
    answers : ["SADC and NHIF", "EAC and SADC", "ZEC and NEC","CCM and CUF"],
    correctAnswer: "ZEC and NEC"
  },
  
  {
   question: "(12) The elephant tusk on the coat of arms represent? ",
    answers : ["Natural resources", "State powers", "National freedom","National prestige"],
    correctAnswer: "Natural resources"
  },

   
  {
   question: "(13) The branch of central government responsible for administrative duties is called? : ",
    answers : ["Judiciary", "The executive", "Legislature","The cabinet"],
    correctAnswer: "The executive"
  },

   
  {
   question: "(14) A voting area electing a representative to the National Assembly is called? : ",
    answers : ["a constituency", "municipal council", "universal suffrage","a polling station"],
    correctAnswer: "a polling station"
  }, 
  
   {
   question: "(15) Which place did people paint and draw in ths caves? : ",
    answers : ["Bagamoyo", "Olduvai gorge", "Isimila","Kondoa Irangi"],
    correctAnswer: "Kondoa Irangi"
  },

   {
   question: "(16) The political party in Zanzibar that overthrew Arab Regime in 1964? : ",
    answers : ["ASP", "TAA", "ZAA","ZPPP"],
    correctAnswer: "ASP"
  },
 
  
];


function quizMcq(question,arrayOfAnswers,answer){
 
  var userAnswer = readlineSync.keyInSelect(arrayOfAnswers, question);
  if(arrayOfAnswers[userAnswer] === answer){
    console.log(chalk.green.bold("You are right!")); 
    score = score + 1;
    
  } else{
    console.log(chalk.red.bold("You are wrong!"));
    console.log("The correct answer is", chalk.green.italic(answer));
    score = score - 1;
  }

  if(score < 0){
    score = 0;
  }

console.log("Score is", chalk.blue(score));
  console.log(chalk.cyan("**********************************"));
console.log("");
}

for ( var i = 0; i < mcqList.length; i++){
  currentQuestion = mcqList[i];
  quizMcq(currentQuestion.question, currentQuestion.answers, currentQuestion.correctAnswer);
}



console.log(chalk.rgb(143, 255, 20).bold("Total score is " + score));

console.log("")


// Checking score for passing to next level i.e Medium Level
  
if( score >= 10){

console.log(chalk.cyan.bold("*******************************"));
  console.log(chalk.green.bold("Congrats",userName,"you successful passed easy level😘"));

console.log(chalk.cyan.bold("*******************************"));
console.log("")
console.log(chalk.magenta.bold("MEDIUM LEVEL"));

console.log(chalk.cyan("********************************"));

// Medium level start here
var readlineSync = require('readline-sync');
var chalk = require('chalk')
var score = 0;
//var userName = readlineSync.question("What's your name? :");

var welcomeUser = "Hello " + chalk.magenta.italic.bold(userName)+ " welcome back"; 

console.log("\n");
console.log(chalk.cyan.bold(welcomeUser));
console.log("\n")

console.log(chalk.magenta.bold.underline("Rules and Instructions"));
console.log("1. There are 8 (yes/no) based questions.");
console.log("2. You will get 1 point on each right answer.");
console.log("3. One point will be deducted when wrong is selected.");
console.log("4. By scoring a minimum of 4 points is sufficient for you to go to the next Level.")
console.log("5. Selecting the index/ number i.e (1 upto 4) to answer, The final score will be printed at the end of the quiz.")
console.log("")
console.log(chalk.cyan("********************************"));
console.log("");


var userMessage = "Do you wish to continue to this level?, press y to continue or q to quite the play (y/q): "

var userMessage = readlineSync.question(userMessage);
console.log("")
console.log(chalk.cyan.bold("********************************"));
console.log("");

console.log("")
if(userMessage === "y"){
  
console.log(chalk.bold.magenta.underline("Let's start the Quiz"));
console.log("")
var answerYes = "yes";
var answerNo = "no"

var bqList = [
  {
    question: "(1) A custom of having more than one wife is called polygamy? (yes/no): ",
    answer : answerYes
  },

  {
    question: "(2) Is dual citizenship allowed in Tanzania? (yes/no): ",
    answer : answerNo
  },

  {
    question: "(3) Official language spoken by majority of Tanzanians is Swahili? (yes/no): ",
    answer : answerYes
  },

  {
    question: "(4) The largest island found in Tanzania is Mafia? (yes/no): ",
    answer : answerNo
  },

  {
    question: "(5) Was Hon. Jakaya Kikwete the third President of Tanzania? (yes/no): ",
    answer : answerNo
  },

  {
    question: "(6) In year 1999, The Tanzanians got bad news about the death of J.K Nyerere? (yes/no): ",
    answer : answerYes
  },

  {
    question: "(7) Is Lake Tanganyika the second longest lake in Africa? (yes/no): ",
    answer : answerYes 
  },

  {
    question: "(8) When local governments enact laws in their area of authority, the laws are called Manifesto? (yes/no): ",
    answer : answerNo
  }

  
]

                                   
function bqListDisp(question,answer){
  var userAnswer = readlineSync.question(question);
if(userAnswer === answer){
  console.log(chalk.bold.green("You are right!"));
   score = score + 1; 
} else if(userAnswer === "yes" || userAnswer === "no"){
  console.log(chalk .bold.red("You are wrong!"));
  console.log("The correct answer is: ", chalk.bold.green(answer));
  score = score - 1; 
} else{
  console.log(chalk.red.bold("Invalid input!"));
console.log(chalk.cyan.italic("No point is added."));  
}
  if(score < 0){
    score = 0;
  }
console.log("Score is",score);
console.log("");
  console.log(chalk.cyan.bold("********************************"));
console.log("");
}

for(var i= 0; i < bqList.length; i++ ){
  var currentQuestion = bqList[i];
  bqListDisp(currentQuestion.question, currentQuestion.answer);
}

console.log(chalk.cyan.bold("The total score is",score));
console.log("");


  // Checking score for next level (Difficult Level)
if( score >= 5){
  console.log(chalk.green.bold("Congrats",userName,"You successful passed medium level😘"));

console.log(chalk.cyan("********************************"));
console.log("")
console.log(chalk.magenta.bold("DIFFICULT LEVEL"))

console.log(chalk.cyan("********************************"));
  // Difficult start here

// difficult level start here

var readlineSync = require('readline-sync');
var chalk = require('chalk')
var score = 0;
//var userName = readlineSync.question("What's your name? :");

var welcomeUser = "Hello " + chalk.cyan.italic.bold.magenta(userName)+ " welcome back"; 

console.log("")
console.log(chalk.cyan.bold(welcomeUser));
console.log("")
console.log(chalk.bold.magenta.underline("Rules and Instructions"));
console.log("1. There are 10 short answers based questions.");
console.log("2. You will get 1 point on each right answer.");
console.log("3. One point will be deducted when wrong is selected.");
console.log("4. type your answer then press enter to submit your answer to get next questions, The final score will be printed at the end of the quiz.");
console.log("5. This is the final level, if you find this helpful or fun let me know in my inbox...☺️");

console.log("")
console.log(chalk.cyan("********************************"));
console.log("");



var userMessage = "Do you wish to continue to Quiz App?, press y to continue or q to quite the play (y/q): "

var userMessage = readlineSync.question(userMessage);
console.log("")
console.log(chalk.cyan("********************************"));

if(userMessage=== "y"){
var shortAnswersQuestions = [
 
  {
    question: "(1) Biological difference between female and male is called? :" ,
    answer: "sex"
  },

  {
    question: "(2) Is the large of group of people living together in one area with their own government,language,tradition and history: ",
    answer: "nation"
  },


  {
    question: "(3) In which year did Tanzania become a Republic State: ",
    answer: "1962"
  },


  {
    question: "(4) Is the government of the people, for the people, by the people: ",
    answer: "democracy"
  },


  {
    question: "(5) Is the system of laws and basics principles that a country or institution is governed by is also known as: ",
    answer: "constitution"
  },


  {
    question: "(6) Are the basics needs which are granted to the citizens of a country including rights to express his/herself, marriage, worship, security and others: " ,
    answer: "human rights"
  },

  {
    question:"(7) Is the process of choosing a person by vote, especially for political positions within a community or a country: ",
    answer: "election"
  },

  {
    question:"(8) Is the union/ agreement between a man and a woman to live as husband and wife is known as: ",
    answer: "marriage"
  },

  {
    question: "(9) The global pandemic COVID-19 that also hit Tanzania was caused by which virus: ",
    answer: "corona"
  },

  {
    question: "(10) Is the person who leads a group of people within a community or population: ",
    answer: "leader"
  }

]

console.log(chalk.underline.magenta("Let's start the quiz"));
console.log("")
function shortAnswers(question,answer){
  var userAnswer = readlineSync.question(question);
userAnswer = userAnswer.toLowerCase();
if(userAnswer === answer){
  console.log(chalk.bold.green("You are correct!"));
  score = score + 1;
} else{
  console.log(chalk.bold.red("You are wrong!"));
  console.log(chalk.green.bold("The correct answer is", answer));
  score = score - 1;
}

  if(score < 0){
    score = 0;
  }

  console.log("Score is",score);
  console.log("");
  console.log(chalk.cyan.bold("******************************"));
console.log("");
}

for(var i= 0 ; i < shortAnswersQuestions.length;  i++){
  var currentQuestion= shortAnswersQuestions[i];
  shortAnswers(currentQuestion.question, currentQuestion.answer)
}
  //console.log("")
  console.log(chalk.blue.bold("Total score is",score));
  //console.log(chalk.cyan.bold("*****************************"));
if(score >= 5){
  console.log(chalk.green.bold("Congratulations,You did very good!😀"))
} else{
  console.log(chalk.red.bold("Not really bad. Keep it up!✌️"))
}
 console.log(chalk.cyan.bold("*****************************")); 
console.log("")
 console.log(chalk.bold.blue("End of quiz app,please share your opinion, thought and ideas to improve the App. Thanks for participation👋..."));
}

else if(userMessage === "q"){
  console.log(chalk.bold.magenta("You've chosen not to proceed with quiz"))
}

else{
  console.log(chalk.red.bold("Invalid selection entered!"))
}

// End of difficult level
  
  // End of difficult level
} else{
  console.log(chalk.red.bold("Oops! You didn't pass this medium level."));
} 
  
} // End of if block quiz for User Selection to continue with quiz medium level

 else if(userMessage === "q"){
 console.log(chalk.bold.magenta("Oops!, You opted to quit the play!"))
 } 

 else{
   console.log(chalk.bold.red("Invalid option selected!"))
 }

// End of Medium Level
}
  
else{
  console.log(chalk.bold.red("You didn't score enough point to continue with medium level"));
}


// End of checking score to be admitted to the next level( Medium Level)

// End of if block for easy level

} else if(userSelection.toLowerCase() === "q"){
  console.log("")  
  console.log(chalk.magenta.bold("Sorry! you have chosen not to proceed to quiz."));
} else{
  console.log("")
  console.log(chalk.red.bold("Oops! Invalid input entered!"))
}

  // End of Easy Level
} else{
  // Throw an error for wrong username
  console.log(chalk.bold.red("Incorrect name entered. Names must contain only letters."))
}

