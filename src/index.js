//requiring chalk module from Node.js core - chalk will be used to style the lines in the CLI
const chalk = require("chalk");

//requiring the open module
const open = require("open");

//requiring the change-case for correct filename
const { paramCase } = require("change-case");

//requiring the utils js files
const {
  managerQuestions,
  selectionQuestion,
  engineerQuestions,
  internQuestions,
  filenameQuestion,
} = require("./utils/teamQuestions");
const getUserAnswers = require("./utils/getUserAnswers");
const generateHtml = require("./utils/generateHtml");
const writeToFile = require("./utils/writeToFile");

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
    chalk.blue(
      "Let's build your team structure! Starting with the team manager..."
    )
  );

  //start the manager questions
  const manager = await getUserAnswers(managerQuestions);

  console.log(chalk.blue("Now let's add engineers and interns!"));
  //move onto team structure
  const team = await getTeamInfo();

  console.log(chalk.green("Your team is complete."));
  //ask for filename
  const filename = await getUserAnswers(filenameQuestion);

  console.log(chalk.yellow("Generating your html string from your answers..."));
  //generate html string
  const htmlString = generateHtml(manager, team);

  console.log(chalk.yellow("Creating your html file..."));
  //write to new file
  writeToFile(filename, htmlString);

  console.log(chalk.green("Your html file has been created successfully!"));
  //open created file
  open(`http://127.0.0.1:5500/dist/${paramCase(filename.filename)}.html`, {
    app: "chrome",
  });
};

init();
