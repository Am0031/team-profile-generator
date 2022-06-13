const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");
const Team = require("./Team");

describe("Team", () => {
  const testName = "coding team";
  const testMembers = [
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
      name: "John Smith",
      id: "58",
      email: "john.smith@example.org",
      githubUsername: "John",
    }),
    new Intern({
      name: "Max Smith",
      id: "65",
      email: "max.smith@example.org",
      school: "University of Birmingham",
    }),
  ];

  describe("instance", () => {
    it("should create an instance of Team", () => {
      const actual = new Team(testName, testMembers);
      expect(actual).toBeInstanceOf(Team);
    });
    it("should set the property of members as an array of objects", () => {
      const actual = new Team(testName, testMembers);
      expect(typeof actual.members).toBe("array");
    });
  });

  describe("data", () => {
    it("should set the property of team name under the key 'teamName'", () => {
      const actual = new Team(testName, testMembers);
      expect(actual.teamName).toEqual("coding team");
    });
    it("should get the number of objects in the members array and find it equal to 4", () => {
      const expected = 4;
      const actual = new Team(testName, testMembers);
      expect(actual.members.length).toEqual(expected);
    });
    it("should get the number of Manager instances from the members array and result equals to 1", () => {
      const actual = new Team(testName, testMembers);
      const managerInstances = actual.members.filter(
        (item) => item instanceof Manager
      );
      expect(managerInstances).toEqual(1);
    });
    it("should get the number of Engineer instances from the members array and result equals to 2", () => {
      const actual = new Team(testName, testMembers);
      const engineerInstances = actual.members.filter(
        (item) => item instanceof Engineer
      );
      expect(engineerInstances).toEqual(2);
    });

    it("should get the number of Intern instances from the members array and result equals to 1", () => {
      const actual = new Team(testName, testMembers);
      const internInstances = actual.members.filter(
        (item) => item instanceof Intern
      );
      expect(internInstances).toEqual(1);
    });
  });

  describe("methods", () => {
    it("should get the name of the team created", () => {
      const team = new Team(testName, testMembers);
      const actual = team.getName();
      expect(actual).toEqual(team.teamName);
    });

    it("should get the number of employees in the team", () => {
      const team = new Team(testName, testMembers);
      const actual = team.getNumberOfTeamMembers();
      expect(actual).toEqual(team.members.length);
    });
  });
});
