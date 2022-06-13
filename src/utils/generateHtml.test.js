/**
 * @jest-environment jsdom
 */

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
      new Intern({
        name: "Max Smith",
        id: "65",
        email: "max.smith@example.org",
        school: "University of Birmingham",
      }),
    ],
  };

  describe("test html generation", () => {
    it("should confirm number of cards in section", () => {
      const actual = generateHtml(teamData);
      document.body.innerHTML = actual;

      const managers = document.querySelectorAll(".manager-container");
      expect(managers.length).toEqual(1);
    });
  });
});
