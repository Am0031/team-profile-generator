//requiring the inquirer module
const inquirer = require("inquirer");

//requiring the other js files
const writeToFile = require("./utils/writeToFile");
const {
  managerQuestions,
  selectionQuestion,
  engineerQuestions,
  internQuestions,
  filenameQuestion,
} = require("./utils/teamQuestions");
const generateHtml = require("./utils/generateHtml");

//functions needed to get the info from the user
const getManagerInfo = () => {
  //prompt questions from the manager questions set (inquirer)
};

const getTeamInfo = () => {
  //present the selection question
  //if engineer, start the engineer questions (inquirer) + back to selection question
  //set in progress to true
  //if intern, start intern questions (inquirer) + back to selection question
  //set in progress to true
  //if exit, set in progress to false
};

const getFileName = () => {
  //prompt question for filename (inquirer)
};

//main function
const init = () => {
  console.log("Let's build your team structure!");

  //start the manager questions
  const managerAnswers = getManagerInfo();

  //move onto team structure
  const teamAnswers = getTeamInfo();

  //ask for filename
  const filename = getFileName();

  //generate html string
  const htmlString = generateHtml(managerAnswers, teamAnswers, filename);

  //write to new file
  writeToFile(filename, htmlString);

  //open created file
  //open("http://localhost:port/filename", { app: "chrome" });
};

init();
