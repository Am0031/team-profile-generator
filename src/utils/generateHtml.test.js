const { generateHtml } = require("./generateHtml");
const Manager = require("../lib/Manager");

describe("describe", () => {
  const managerData = {
    team: "teamA",
    name: "Bob Smith",
    id: "12",
    email: "bob.smith@example.org",
    role: "Manager",
    officeNumber: "45",
  };
  const teamData = [
    {
      name: "Alex Smith",
      id: "51",
      email: "alex.smith@example.org",
      role: "Engineer",
      githubUsername: "AlexS",
    },
    {
      name: "Sam Smith",
      id: "60",
      email: "sam.smith@example.org",
      role: "Intern",
      school: "University of Birmingham",
    },
  ];

  describe("test html generation", () => {
    it("should confirm number of cards in section", () => {
      const actual = generateHtml(managerData, teamData);
      const node = document.createElement("div");
      node.innerHTML = actual;

      const managers = node.querySelectorAll(".manager-container");
      expect(managers.length).toEqual(1);
    });
  });
});
