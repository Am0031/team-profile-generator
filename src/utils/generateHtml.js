//requiring change-case module
const { capitalCase } = require("change-case");

//requiring classes
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const createHeadHtml = require("./createHeadHtml");
const {
  createManagerCardHtml,
  createEngineerCardHtml,
  createInternCardHtml,
} = require("./createCardsHtml");

//main function to generate the overall html string
const generateHtml = (team) => {
  const teamName = team.teamName;
  const manager = team.members.filter(
    (employee) => employee instanceof Manager
  );
  const engineers = team.members.filter(
    (employee) => employee instanceof Engineer
  );
  const interns = team.members.filter((employee) => employee instanceof Intern);

  const recapTable = {
    managers: manager.length,
    engineers: engineers.length,
    interns: interns.length,
  };
  console.table(recapTable);

  //create string for header
  const headerHtml = `<header class="jumbotron jumbotron-fluid header-title mb-0">
  <div class="container">
    <h1 class="display-4 text-center">${capitalCase(teamName)}</h1>
  </div>
</header>`;

  //create string for manager section
  const createManagerHtml = () => {
    return `<section
        class="manager-container d-flex flex-column align-items-center separator"
        id="manager-section">
        ${manager.map(createManagerCardHtml).join("")}
      </section>`;
  };

  //create string for engineer section
  const createEngineerHtml = () => {
    return engineers.length === 0
      ? `<section
      class="engineer-container d-flex flex-row flex-wrap justify-content-around align-items-center separator"
      id="engineer-section">
      <div class="warning-message alert-warning w-100 mt-2 mb-2 text-center">
    No engineers </div></section>`
      : `<section
    class="engineer-container d-flex flex-row flex-wrap justify-content-around align-items-center separator"
    id="engineer-section">
    ${engineers.map(createEngineerCardHtml).join("")}
  </section>`;
  };

  //create string for intern section
  const createInternHtml = () => {
    return interns.length === 0
      ? `<section
      class="intern-container d-flex flex-row flex-wrap justify-content-around align-items-center"
      id="intern-section">
      <div class="warning-message alert-warning w-100 mt-2 mb-2 text-center">
    No interns </div></section>`
      : `<section
      class="intern-container d-flex flex-row flex-wrap justify-content-around align-items-center"
      id="intern-section">
      ${interns.map(createInternCardHtml).join("")}
    </section>`;
  };

  //static string for footer
  const footerHtml = `<footer class="footer p-3">
  <div class="footer-text w-100 text-center">&copy; 2022 Copyright</div>
</footer>`;

  //call to generate the section strings
  const headHtml = createHeadHtml("TeamProfile");
  const managerHtml = createManagerHtml();
  const engineerHtml = createEngineerHtml();
  const internHtml = createInternHtml();

  //return the overall string
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
