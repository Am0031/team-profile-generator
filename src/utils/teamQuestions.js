//requiring chalk module from Node.js core - chalk will be used to style the lines in the CLI
const chalk = require("chalk");

//requiring email validator package
const validator = require("email-validator");

const managerQuestions = [
  {
    type: "input",
    name: "team",
    message: "Please enter a team name:",
    validate: (answer) =>
      !answer
        ? chalk.yellow("This is mandatory. Please enter a team name.")
        : true,
  },
  {
    type: "input",
    name: "name",
    message: "Please enter the manager's name:",
    validate: (answer) =>
      !answer ? chalk.yellow("This is mandatory. Please enter a name.") : true,
  },
  {
    type: "number",
    name: "id",
    message: "Please enter the manager's employee ID:",
    validate: (answer) =>
      !answer ? chalk.yellow("This is mandatory. Please enter an ID.") : true,
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
    type: "number",
    name: "officeNumber",
    message: "Please provide the manager's office number:",
    validate: (answer) =>
      !answer
        ? chalk.yellow("This is mandatory. Please enter an office number.")
        : true,
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
    type: "number",
    name: "id",
    message: "Please enter the engineer's employee ID:",
    validate: (answer) =>
      !answer ? chalk.yellow("This is mandatory. Please enter an ID.") : true,
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
    type: "number",
    name: "id",
    message: "Please enter the intern's employee ID:",
    validate: (answer) =>
      !answer ? chalk.yellow("This is mandatory. Please enter an ID.") : true,
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
    name: "githubUsername",
    message: "Please provide the intern's school:",
    validate: (answer) =>
      !answer
        ? chalk.yellow("This is mandatory. Please enter a school.")
        : true,
  },
];

module.exports = { managerQuestions, engineerQuestions, internQuestions };
