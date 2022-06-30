//requiring change-case module
const { capitalCase } = require("change-case");

//static string for html head section
const createHeadHtml = (string) => {
  return `<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>${string}</title>
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.1/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      crossorigin="anonymous"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./assets/css/styles.css" />
    </head>`;
};

//create string for header
const createHeaderHtml = (teamName) => {
  return `<header class="jumbotron jumbotron-fluid header-title mb-0">
 <div class="container">
   <h1 class="display-4 text-center">${capitalCase(teamName)}</h1>
 </div>
 </header>`;
};

//create string for manager section
const createManagerHtml = (managers) => {
  return `<section
      class="manager-container d-flex flex-column align-items-center separator"
      id="manager-section">
      ${managers.map((manager) => manager.createCardHtml()).join("")}
    </section>`;
};

//create string for engineer section
const createEngineerHtml = (engineers) => {
  return engineers.length === 0
    ? `<section
    class="engineer-container d-flex flex-row flex-wrap justify-content-around align-items-center separator"
    id="engineer-section">
    <div class="warning-message alert-warning w-100 mt-2 mb-2 text-center">
  No engineers </div></section>`
    : `<section
  class="engineer-container d-flex flex-row flex-wrap justify-content-around align-items-center separator"
  id="engineer-section">
  ${engineers.map((engineer) => engineer.createCardHtml()).join("")}
</section>`;
};

//create string for intern section
const createInternHtml = (interns) => {
  return interns.length === 0
    ? `<section
    class="intern-container d-flex flex-row flex-wrap justify-content-around align-items-center"
    id="intern-section">
    <div class="warning-message alert-warning w-100 mt-2 mb-2 text-center">
  No interns </div></section>`
    : `<section
    class="intern-container d-flex flex-row flex-wrap justify-content-around align-items-center"
    id="intern-section">
    ${interns.map((intern) => intern.createCardHtml()).join("")}
  </section>`;
};

//static string for footer
const footerHtml = `<footer class="footer p-3">
<div class="footer-text w-100 text-center">&copy; 2022 Copyright</div>
</footer>`;

module.exports = {
  createHeadHtml,
  createHeaderHtml,
  createManagerHtml,
  createEngineerHtml,
  createInternHtml,
  footerHtml,
};
