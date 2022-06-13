const Employee = require("./Employee");
const { capitalCase } = require("change-case");

class Intern extends Employee {
  constructor({ name, id, email, school }) {
    super({ name, id, email });

    this.school = school;
    this.role = "Intern";
  }

  getSchool() {
    return this.school;
  }

  createCardHtml() {
    return `<div class="card employee-card intern-card m-2">
        <div class="card-body bg-intern">
          <h5 class="card-title">${capitalCase(this.name)}</h5>
          <p class="card-subtitle">
            <i class="fa-solid fa-seedling"></i> Intern
          </p>
        </div>
        <ul class="list-group list-group-flush p-2 list-container">
          <li class="list-group-item">ID: ${this.id}</li>
          <li class="list-group-item d-flex flex-row">
            <p class="link-text pr-2">
              <i class="fa-solid fa-envelope"></i> Email:
            </p>
            <a
              href="mailto:${this.email}"
              target="_blank"
              class="card-link"
              >${this.email}</a
            >
          </li>
          <li class="list-group-item d-flex flex-row">
            <p class="link-text pr-2">
              <i class="fa-solid fa-graduation-cap"></i> School:
            </p>
            <p class="link-text">${this.school}</p>
          </li>
        </ul>
        </div>`;
  }
}

module.exports = Intern;
