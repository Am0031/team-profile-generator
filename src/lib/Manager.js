const Employee = require("./Employee");
const { capitalCase } = require("change-case");

class Manager extends Employee {
  constructor({ name, id, email, officeNumber }) {
    super({ name, id, email });

    this.officeNumber = officeNumber;
    this.role = "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  createCardHtml() {
    return `<div class="card employee-card manager-card m-2">
      <div class="card-body bg-manager">
        <h5 class="card-title">${capitalCase(this.name)}</h5>
        <p class="card-subtitle">
          <i class="fa-solid fa-people-roof"></i> Manager
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
        <li class="list-group-item">
          <i class="fa-solid fa-door-closed"></i> Office number: ${
            this.officeNumber
          }
        </li>
      </ul>
    </div>`;
  }
}

module.exports = Manager;
