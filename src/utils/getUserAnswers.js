//requiring the inquirer package
const inquirer = require("inquirer");

//function to get answers from user
const getUserAnswers = async (questions) => {
  const answers = await inquirer.prompt(questions);
  return answers;
};

module.exports = getUserAnswers;
