/**
 * @jest-environment jsdom
 */

//requiring the classes needed and the generateHtml function
const generateHtml = require("./generateHtml");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

describe("describe", () => {
  const teamData = {
    teamName: "coding team",
    members: [
      new Manager({
        name: "Bob Smith",
        id: "10",
        email: "bob.smith@example.org",
        officeNumber: "45",
      }),
      new Engineer({
        name: "Alex Smith",
        id: "52",
        email: "alex.smith@example.org",
        githubUsername: "Alex",
      }),
      new Engineer({
        name: "James Smith",
        id: "58",
        email: "james.smith@example.org",
        githubUsername: "James-S",
      }),
      new Intern({
        name: "Max Smith",
        id: "65",
        email: "max.smith@example.org",
        school: "University of Birmingham",
      }),
    ],
  };

  describe("test html generation", () => {
    it("should confirm number of manager cards in section", () => {
      const actual = generateHtml(teamData);
      document.body.innerHTML = actual;

      const managers = document.querySelectorAll(".manager-card");
      expect(managers.length).toEqual(1);
    });

    it("should confirm number of engineer cards in section", () => {
      const actual = generateHtml(teamData);
      document.body.innerHTML = actual;

      const engineers = document.querySelectorAll(".engineer-card");
      expect(engineers.length).toEqual(2);
    });
    it("should confirm number of intern cards in section", () => {
      const actual = generateHtml(teamData);
      document.body.innerHTML = actual;

      const interns = document.querySelectorAll(".intern-card");
      expect(interns.length).toEqual(1);
    });
  });
});
