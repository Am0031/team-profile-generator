//requiring chalk module from Node.js core - chalk will be used to style the lines in the CLI
const chalk = require("chalk");

//requiring the open module
const open = require("open");

//requiring the change-case for correct filename
const { paramCase } = require("change-case");

//requiring classes
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//requiring the utils js files
const {
  teamNameQuestion,
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

    switch (answer) {
      //if exit, set in progress to false
      case "exit":
        inProgress = false;
        break;
      //if engineer, start the engineer questions (inquirer) + create new engineer + save in array
      case "engineer":
        const engineerAnswers = await getUserAnswers(engineerQuestions);
        const engineer = new Engineer(engineerAnswers);
        // engineer.role = "engineer";
        team.push(engineer);
        break;
      //if intern, start the intern questions (inquirer) + create new intern + save in array
      case "intern":
        const internAnswers = await getUserAnswers(internQuestions);
        const intern = new Intern(internAnswers);
        // intern.role = "intern";
        team.push(intern);
        break;
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

  //start with asking the team name
  const teamName = await getUserAnswers(teamNameQuestion);
  console.log(teamName);
  // teamInfo.push(teamName);
  //start the manager questions
  const managerAnswers = await getUserAnswers(managerQuestions);
  const manager = new Manager(managerAnswers);
  // teamInfo.push(manager);

  console.log(chalk.blue("Now let's add engineers and interns!"));
  //move onto team structure
  const team = await getTeamInfo();
  console.log(team);

  console.log(
    chalk.green(
      `Your team is complete and has ${team.length + 1} team members!`
    )
  );
  //ask for filename
  const filename = (await getUserAnswers(filenameQuestion)).filename;

  console.log(chalk.yellow("Generating your html string from your answers..."));
  //generate html string
  const htmlString = generateHtml(teamName, manager, team);

  console.log(chalk.yellow("Creating your html file..."));
  //write to new file
  writeToFile(filename, htmlString);

  console.log(chalk.green("Your html file has been created successfully!"));
  //open created file
  open(`http://127.0.0.1:5500/dist/${paramCase(filename)}.html`, {
    app: "chrome",
  });
};

init();
