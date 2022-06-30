//requiring classes and functions to create strings
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const {
  createHeadHtml,
  createHeaderHtml,
  createManagerHtml,
  createEngineerHtml,
  createInternHtml,
  footerHtml,
} = require("./createContentHtml");

//main function to generate the overall html string
const generateHtml = (team) => {
  //get the team name for the header
  const teamName = team.teamName;

  //separate the team members for each section
  const manager = team.members.filter(
    (employee) => employee instanceof Manager
  );
  const engineers = team.members.filter(
    (employee) => employee instanceof Engineer
  );
  const interns = team.members.filter((employee) => employee instanceof Intern);

  //gather number of team members for displaying a recap table in the console
  const recapTable = {
    managers: manager.length,
    engineers: engineers.length,
    interns: interns.length,
  };
  console.table(recapTable);

  //main call to generate the section strings
  const headHtml = createHeadHtml("Team Profile");
  const headerHtml = createHeaderHtml(teamName);
  const managerHtml = createManagerHtml(manager);
  const engineerHtml = createEngineerHtml(engineers);
  const internHtml = createInternHtml(interns);

  //return the overall string for a complete html file
  return ` <!DOCTYPE html>
  <html>
  ${headHtml}
  <body>
  ${headerHtml}
  <main class="main" id="main">
  ${managerHtml}
  ${engineerHtml}
  ${internHtml}
  </main>
  ${footerHtml}
  </body>
    </html>
  `;
};

module.exports = generateHtml;
