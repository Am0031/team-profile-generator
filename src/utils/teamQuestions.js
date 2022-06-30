//requiring chalk module from Node.js core - chalk will be used to style the lines in the CLI
const chalk = require("chalk");

//requiring email validator package
const validator = require("email-validator");

const teamNameQuestion = [
  {
    type: "input",
    name: "team",
    message: "Please enter a team name:",
    validate: (answer) =>
      !answer
        ? chalk.yellow("This is mandatory. Please enter a team name.")
        : true,
  },
];
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Please enter the manager's name:",
    validate: (answer) =>
      !answer
        ? chalk.yellow("This is mandatory. Please enter a team name.")
        : true,
  },
  {
    type: "input",
    name: "id",
    message: "Please enter the manager's employee ID:",
    validate: (answer) =>
      answer && !isNaN(answer)
        ? true
        : chalk.yellow(
            "This is mandatory and must be a number. Please enter a valid id."
          ),
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the manager's email address:",
    validate: (email) =>
      !validator.validate(email)
        ? chalk.yellow("Please enter a valid email address.")
        : true,
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Please provide the manager's office number:",
    validate: (answer) =>
      answer && !isNaN(answer)
        ? true
        : chalk.yellow(
            "This is mandatory and must be a number. Please enter a valid office number."
          ),
  },
];

const selectionQuestion = [
  {
    type: "list",
    name: "selection",
    message: "What team member would you like to add next?",
    choices: [
      {
        name: "Engineer",
        value: "engineer",
      },
      {
        name: "Intern",
        value: "intern",
      },
      {
        name: "None - Exit",
        value: "exit",
      },
    ],
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Please enter the engineer's name:",
    validate: (answer) =>
      !answer ? chalk.yellow("This is mandatory. Please enter a name.") : true,
  },
  {
    type: "input",
    name: "id",
    message: "Please enter the engineer's employee ID:",
    validate: (answer) =>
      answer && !isNaN(answer)
        ? true
        : chalk.yellow(
            "This is mandatory and must be a number. Please enter a valid id."
          ),
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the engineer's email address:",
    validate: (email) =>
      !validator.validate(email)
        ? chalk.yellow("Please enter a valid email address.")
        : true,
  },
  {
    type: "input",
    name: "githubUsername",
    message: "Please provide the engineer's github username:",
    validate: (answer) =>
      !answer
        ? chalk.yellow("This is mandatory. Please enter a github username.")
        : true,
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Please enter the intern's name:",
    validate: (answer) =>
      !answer ? chalk.yellow("This is mandatory. Please enter a name.") : true,
  },
  {
    type: "input",
    name: "id",
    message: "Please enter the intern's employee ID:",
    validate: (answer) =>
      answer && !isNaN(answer)
        ? true
        : chalk.yellow(
            "This is mandatory and must be a number. Please enter a valid id."
          ),
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the intern's email address:",
    validate: (email) =>
      !validator.validate(email)
        ? chalk.yellow("Please enter a valid email address.")
        : true,
  },
  {
    type: "input",
    name: "school",
    message: "Please provide the intern's school:",
    validate: (answer) =>
      !answer
        ? chalk.yellow("This is mandatory. Please enter a school.")
        : true,
  },
];

const filenameQuestion = [
  {
    type: "input",
    name: "filename",
    message:
      "What name would you like for your file? Please provide only the name without the extension.",
    default: "team-profile",
  },
];

module.exports = {
  teamNameQuestion,
  managerQuestions,
  selectionQuestion,
  engineerQuestions,
  internQuestions,
  filenameQuestion,
};
