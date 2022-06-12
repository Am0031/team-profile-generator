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

//function to get answers from user
const getUserAnswers = async (questions) => {
  const answers = await inquirer.prompt(questions);
  return answers;
};

//function to get the team structure depending on selection question answers
const getTeamInfo = async () => {
  //set up the team array
  const team = [];

  //set up the inProgress variable
  let inProgress = true;

  //start asking for new team members
  while (inProgress) {
    //present the selection question
    const answer = (await getUserAnswers(selectionQuestion)).selection;

    //if exit, set in progress to false
    if (answer === "exit") {
      inProgress = false;
    } else {
      //if engineer, start the engineer questions (inquirer) + save engineer in array
      if (answer === "engineer") {
        const engineer = await getUserAnswers(engineerQuestions);
        engineer.role = "engineer";
        team.push(engineer);
      }
      //if intern, start the intern questions (inquirer) + save intern in array
      if (answer === "intern") {
        const intern = await getUserAnswers(internQuestions);
        intern.role = "intern";
        team.push(intern);
      }
    }
  }

  return team;
};

//main function
const init = async () => {
  console.log(
    "Let's build your team structure! Starting with the team manager..."
  );

  //start the manager questions
  const manager = await getUserAnswers(managerQuestions);

  console.log("Now let's add engineers and interns!");
  //move onto team structure
  const team = await getTeamInfo();

  console.log("Your team is complete.");
  //ask for filename
  const filename = await getUserAnswers(filenameQuestion);

  console.log("Generating your html string from your answers...");
  //generate html string
  const htmlString = generateHtml(manager, team, filename);

  console.log("Creating your html file...");
  //write to new file
  writeToFile(filename, htmlString);

  console.log("Your html file has been created successfully!");
  //open created file
  //open("http://localhost:port/filename", { app: "chrome" });
};

init();
