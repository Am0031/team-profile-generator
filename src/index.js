//requiring chalk module from Node.js core - chalk will be used to style the lines in the CLI
const chalk = require("chalk");

//requiring the open module
const open = require("open");

//requiring the change-case for correct filename
const { paramCase } = require("change-case");

//requiring classes
const Team = require("./lib/Team");
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
const getMembersInfo = async () => {
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
        const engineer = new Engineer(await getUserAnswers(engineerQuestions));
        team.push(engineer);
        break;
      //if intern, start the intern questions (inquirer) + create new intern + save in array
      case "intern":
        const intern = new Intern(await getUserAnswers(internQuestions));
        team.push(intern);
        break;
    }
  }

  return team;
};

//main function
const init = async () => {
  //start with asking the team name
  console.log(
    chalk.blue(
      "Let's build your team structure! Starting with the team name and its manager..."
    )
  );
  const teamName = (await getUserAnswers(teamNameQuestion)).team;

  //start the manager questions
  const manager = new Manager(await getUserAnswers(managerQuestions));

  //move onto team structure
  console.log(chalk.blue("Now let's add engineers and interns!"));
  const members = await getMembersInfo();
  members.push(manager);

  const team = new Team(teamName, members);
  console.log(
    chalk.green(
      `Your team is complete and has ${team.members.length} team members!`
    )
  );

  //ask for filename
  const filename = (await getUserAnswers(filenameQuestion)).filename;

  //generate html string
  console.log(chalk.yellow("Generating your html string from your answers..."));
  const htmlString = generateHtml(team);

  //write to new file
  console.log(chalk.yellow("Creating your html file..."));
  writeToFile(filename, htmlString);

  //open created file
  console.log(
    chalk.green(
      "Your html file has been created successfully and will open in your chrome browser!"
    )
  );
  open(`http://127.0.0.1:5500/dist/${paramCase(filename)}.html`, {
    app: "chrome",
  });
};

init();
