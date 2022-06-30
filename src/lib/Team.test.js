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
      const arr = typeof actual.members;
      expect(actual.members).toBeInstanceOf(Array);
    });
  });

  describe("data", () => {
    it("should set the property of team name under the key 'teamName'", () => {
      const actual = new Team(testName, testMembers);
      expect(actual.teamName).toEqual("coding team");
    });
    it("should get the correct number of objects in the members array", () => {
      const expected = 4;
      const actual = new Team(testName, testMembers);
      expect(actual.members.length).toEqual(expected);
    });
    it("should get the correct number of Employee instances", () => {
      const expected = 4;
      const actual = new Team(testName, testMembers);
      const employeeInstances = actual.members.filter(
        (item) => item instanceof Employee
      );
      expect(employeeInstances.length).toEqual(expected);
    });
    it("should get the correct number of Manager instances from the members array", () => {
      const actual = new Team(testName, testMembers);
      const managerInstances = actual.members.filter(
        (item) => item instanceof Manager
      );
      expect(managerInstances.length).toEqual(1);
    });
    it("should get the correct number of Engineer instances from the members array", () => {
      const actual = new Team(testName, testMembers);
      const engineerInstances = actual.members.filter(
        (item) => item instanceof Engineer
      );
      expect(engineerInstances.length).toEqual(2);
    });

    it("should get the correct number of Intern instances from the members array", () => {
      const actual = new Team(testName, testMembers);
      const internInstances = actual.members.filter(
        (item) => item instanceof Intern
      );
      expect(internInstances.length).toEqual(1);
    });
  });

  describe("methods", () => {
    it("should get the name of the team created", () => {
      const team = new Team(testName, testMembers);
      const actual = team.getTeamName();
      expect(actual).toEqual(team.teamName);
    });

    it("should get the number of employees in the team", () => {
      const team = new Team(testName, testMembers);
      const actual = team.getNumberOfTeamMembers();
      expect(actual).toEqual(team.members.length);
    });
  });
});
