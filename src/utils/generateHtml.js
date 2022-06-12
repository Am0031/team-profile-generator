const generateHtml = (manager, team) => {
  console.log(manager);
  console.log(team);

  const teamName = manager.team;

  const alertMessage = `<div class="warning-message alert-warning w-100 mt-2 mb-2 text-center">
    No engineers
  </div>`;

  const engineerCard = `<div class="card employee-card m-2">
<div class="card-body bg-engineer">
  <h5 class="card-title">John</h5>
  <p class="card-subtitle">
    <i class="fa-solid fa-brain"></i> Engineer
  </p>
</div>
<ul class="list-group list-group-flush p-2 list-container">
  <li class="list-group-item">ID: 41</li>
  <li class="list-group-item d-flex flex-row">
    <p class="link-text pr-2">
      <i class="fa-solid fa-envelope"></i> Email:
    </p>
    <a href="mailto:john@gmail.com" target="_blank" class="card-link"
      >john@gmail.com</a
    >
  </li>
  <li class="list-group-item d-flex flex-row">
    <p class="link-text pr-2">
      <i class="fa-brands fa-github"></i> Github:
    </p>
    <a
      href="https://github.com/John-Smith-Modded"
      target="_blank"
      class="card-link"
      >John-Smith-Modded</a
    >
  </li>
</ul>
</div>`;

  const internCard = `<div class="card employee-card m-2">
<div class="card-body bg-intern">
  <h5 class="card-title">Max</h5>
  <p class="card-subtitle">
    <i class="fa-solid fa-seedling"></i> Intern
  </p>
</div>
<ul class="list-group list-group-flush p-2 list-container">
  <li class="list-group-item">ID: 62</li>
  <li class="list-group-item d-flex flex-row">
    <p class="link-text pr-2">
      <i class="fa-solid fa-envelope"></i> Email:
    </p>
    <a
      href="mailto:max0215@gmail.com"
      target="_blank"
      class="card-link"
      >max@gmail.com</a
    >
  </li>
  <li class="list-group-item d-flex flex-row">
    <p class="link-text pr-2">
      <i class="fa-solid fa-graduation-cap"></i> School:
    </p>
    <p class="link-text">University of Nottingham</p>
  </li>
</ul>
</div>`;

  const createManagerHtml = (manager) => {
    const managerName = manager.name;
    const managerId = manager.id;
    const managerEmail = manager.email;
    const managerOffice = manager.officeNumber;

    const managerString = `<section
        class="manager-container d-flex flex-column align-items-center separator"
        id="manager-section"
      >
        <div class="card employee-card m-2">
          <div class="card-body bg-manager">
            <h5 class="card-title">${managerName}</h5>
            <p class="card-subtitle">
              <i class="fa-solid fa-people-roof"></i> Manager
            </p>
          </div>
          <ul class="list-group list-group-flush p-2 list-container">
            <li class="list-group-item">ID: ${managerId}</li>
            <li class="list-group-item d-flex flex-row">
              <p class="link-text pr-2">
                <i class="fa-solid fa-envelope"></i> Email:
              </p>
              <a href="mailto:bob@gmail.com" target="_blank" class="card-link"
                >${managerEmail}</a
              >
            </li>
            <li class="list-group-item">
              <i class="fa-solid fa-door-closed"></i> Office number: ${managerOffice}
            </li>
          </ul>
        </div>
      </section>`;

    return managerString;
  };

  const createEngineerHtml = () => {
    const section = `<section
    class="engineer-container d-flex flex-row flex-wrap justify-content-around align-items-center separator"
    id="engineer-section"
  >
  </section>`;
  };

  const createInternHtml = () => {
    const section = `<section
      class="intern-container d-flex flex-row flex-wrap justify-content-around align-items-center"
      id="intern-section"
    >
    </section>`;
  };

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

  const headerHtml = `<header class="jumbotron jumbotron-fluid header-title mb-0">
  <div class="container">
    <h1 class="display-4 text-center">${teamName}</h1>
  </div>
</header>`;

  const managerHtml = createManagerHtml();
  const engineerHtml = createEngineerHtml();
  const internHtml = createInternHtml();

  return ` <!DOCTYPE html>
  <html>
  ${headHtml}
  <body>
  ${headHtml}
  <main class="main" id="main">
  ${managerHtml}
  ${engineerHtml}
  ${internHtml}
  </main>
    <footer class="footer p-3">
      <div class="footer-text w-100 text-center">&copy; 2022 Copyright</div>
    </footer>
    <script src="./assets/js/script.js" async defer></script>
  </body>
</html>
  `;
};

module.exports = generateHtml;
