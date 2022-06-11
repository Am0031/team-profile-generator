const Engineer = require("./Engineer");

describe("Engineer", () => {
  const testData = {
    name: "Bob Smith",
    id: "521",
    email: "bob.smith@example.org",
    role: "Engineer",
    github: "Bob45",
  };

  describe("instance", () => {
    it("should create an instance of Engineer", () => {
      const actual = new Engineer(testData);
      expect(actual).toBeInstanceOf(Engineer);
    });
  });

  describe("data", () => {
    it("should set the name value under the key 'name'", () => {
      const actual = new Engineer(testData);
      expect(actual.name).toEqual("Bob Smith");
    });
    it("should set the id value under the key 'id'", () => {
      const actual = new Engineer(testData);
      expect(actual.id).toEqual("521");
    });
    it("should set the email value under the key 'email'", () => {
      const actual = new Engineer(testData);
      expect(actual.email).toEqual("bob.smith@example.org");
    });
    it("should set the role value under the key 'role'", () => {
      const actual = new Engineer(testData);
      expect(actual.role).toEqual("Engineer");
    });
    it("should set the github value under the key 'github'", () => {
      const actual = new Engineer(testData);
      expect(actual.github).toEqual("Bob45");
    });
  });

  describe("methods", () => {
    // methods getName, getId, getEmail, getRole are accessible in the parent instance and already tested in Employee tests

    //new method for office number specific to Manager
    it("should get the github username of the engineer created", () => {
      const engineer = new Engineer(testData);
      const actual = engineer.getGithubUsername();
      expect(actual).toEqual(engineer.github);
    });
  });
});
