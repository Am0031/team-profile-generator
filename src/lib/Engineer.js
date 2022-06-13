const Employee = require("./Employee");
const { capitalCase } = require("change-case");

class Engineer extends Employee {
  constructor({ name, id, email, githubUsername }) {
    super({ name, id, email });

    this.githubUsername = githubUsername;
    this.role = "Engineer";
  }

  getGithubUsername() {
    return this.githubUsername;
  }

  createCardHtml() {
    return `<div class="card employee-card engineer-card m-2">
    <div class="card-body bg-engineer">
      <h5 class="card-title">${capitalCase(this.name)}</h5>
      <p class="card-subtitle">
        <i class="fa-solid fa-brain"></i> Engineer
      </p>
    </div>
    <ul class="list-group list-group-flush p-2 list-container">
      <li class="list-group-item">ID: ${this.id}</li>
      <li class="list-group-item d-flex flex-row">
        <p class="link-text pr-2">
          <i class="fa-solid fa-envelope"></i> Email:
        </p>
        <a href="mailto:${this.email}" target="_blank" class="card-link"
          >${this.email}</a
        >
      </li>
      <li class="list-group-item d-flex flex-row">
        <p class="link-text pr-2">
          <i class="fa-brands fa-github"></i> Github:
        </p>
        <a
          href="https://github.com/${this.githubUsername}"
          target="_blank"
          class="card-link"
          >${this.githubUsername}</a
        >
      </li>
    </ul>
    </div>`;
  }
}

module.exports = Engineer;
