//requiring change-case module
const { capitalCase } = require("change-case");

const generateHtml = (manager, team) => {
  //static string for html head section
  const headHtml = `<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Team Profile</title>
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

  //create string for header
  const headerHtml = `<header class="jumbotron jumbotron-fluid header-title mb-0">
  <div class="container">
    <h1 class="display-4 text-center">${capitalCase(manager.team)}</h1>
  </div>
</header>`;

  //create string for manager section
  const createManagerHtml = () => {
    const managerName = manager.name;

    return `<section
        class="manager-container d-flex flex-column align-items-center separator"
        id="manager-section">
        <div class="card employee-card m-2">
          <div class="card-body bg-manager">
            <h5 class="card-title">${capitalCase(managerName)}</h5>
            <p class="card-subtitle">
              <i class="fa-solid fa-people-roof"></i> Manager
            </p>
          </div>
          <ul class="list-group list-group-flush p-2 list-container">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item d-flex flex-row">
              <p class="link-text pr-2">
                <i class="fa-solid fa-envelope"></i> Email:
              </p>
              <a href="mailto:bob@gmail.com" target="_blank" class="card-link"
                >${manager.email}</a
              >
            </li>
            <li class="list-group-item">
              <i class="fa-solid fa-door-closed"></i> Office number: ${
                manager.officeNumber
              }
            </li>
          </ul>
        </div>
      </section>`;
  };

  //create string for engineer section
  const createEngineerHtml = () => {
    const createEngineerCardHtml = (each) => {
      return `<div class="card employee-card m-2">
    <div class="card-body bg-engineer">
      <h5 class="card-title">${capitalCase(each.name)}</h5>
      <p class="card-subtitle">
        <i class="fa-solid fa-brain"></i> Engineer
      </p>
    </div>
    <ul class="list-group list-group-flush p-2 list-container">
      <li class="list-group-item">ID: ${each.id}</li>
      <li class="list-group-item d-flex flex-row">
        <p class="link-text pr-2">
          <i class="fa-solid fa-envelope"></i> Email:
        </p>
        <a href="mailto:${each.email}" target="_blank" class="card-link"
          >${each.email}</a
        >
      </li>
      <li class="list-group-item d-flex flex-row">
        <p class="link-text pr-2">
          <i class="fa-brands fa-github"></i> Github:
        </p>
        <a
          href="https://github.com/${each.githubUsername}"
          target="_blank"
          class="card-link"
          >${each.githubUsername}</a
        >
      </li>
    </ul>
    </div>`;
    };

    const engineers = team.filter((employee) => employee.role === "engineer");
    return engineers.length === 0
      ? `<div class="warning-message alert-warning w-100 mt-2 mb-2 text-center">
    No engineers
  </div>`
      : `<section
    class="engineer-container d-flex flex-row flex-wrap justify-content-around align-items-center separator"
    id="engineer-section">
    ${engineers.map(createEngineerCardHtml).join()}
  </section>`;
  };

  //create string for intern section
  const createInternHtml = () => {
    const createInternCardHtml = (each) => {
      return `<div class="card employee-card m-2">
          <div class="card-body bg-intern">
            <h5 class="card-title">${capitalCase(each.name)}</h5>
            <p class="card-subtitle">
              <i class="fa-solid fa-seedling"></i> Intern
            </p>
          </div>
          <ul class="list-group list-group-flush p-2 list-container">
            <li class="list-group-item">ID: ${each.id}</li>
            <li class="list-group-item d-flex flex-row">
              <p class="link-text pr-2">
                <i class="fa-solid fa-envelope"></i> Email:
              </p>
              <a
                href="mailto:${each.email}"
                target="_blank"
                class="card-link"
                >${each.email}</a
              >
            </li>
            <li class="list-group-item d-flex flex-row">
              <p class="link-text pr-2">
                <i class="fa-solid fa-graduation-cap"></i> School:
              </p>
              <p class="link-text">${each.school}</p>
            </li>
          </ul>
          </div>`;
    };

    const interns = team.filter((employee) => employee.role === "intern");
    return interns.length === 0
      ? `<div class="warning-message alert-warning w-100 mt-2 mb-2 text-center">
    No interns
  </div>`
      : `<section
      class="intern-container d-flex flex-row flex-wrap justify-content-around align-items-center"
      id="intern-section">
      ${interns.map(createInternCardHtml).join()}
    </section>`;
  };

  //static string for footer
  const footerHtml = `<footer class="footer p-3">
  <div class="footer-text w-100 text-center">&copy; 2022 Copyright</div>
</footer>`;

  //call to generate the section strings
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
