//requiring change-case module
const { capitalCase } = require("change-case");

const createManagerCardHtml = (each) => {
  return `<div class="card employee-card manager-card m-2">
    <div class="card-body bg-manager">
      <h5 class="card-title">${capitalCase(each.name)}</h5>
      <p class="card-subtitle">
        <i class="fa-solid fa-people-roof"></i> Manager
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
      <li class="list-group-item">
        <i class="fa-solid fa-door-closed"></i> Office number: ${
          each.officeNumber
        }
      </li>
    </ul>
  </div>`;
};

const createEngineerCardHtml = (each) => {
  return `<div class="card employee-card engineer-card m-2">
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

const createInternCardHtml = (each) => {
  return `<div class="card employee-card intern-card m-2">
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

module.exports = {
  createManagerCardHtml,
  createEngineerCardHtml,
  createInternCardHtml,
};
