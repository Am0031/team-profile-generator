const Intern = require("./Intern");

describe("Intern", () => {
  const testData = {
    name: "Bob Smith",
    id: "521",
    email: "bob.smith@example.org",
    role: "Intern",
    school: "University of Birmingham",
  };

  describe("instance", () => {
    it("should create an instance of Intern", () => {
      const actual = new Intern(testData);
      expect(actual).toBeInstanceOf(Intern);
    });
  });

  describe("data", () => {
    it("should set the name value under the key 'name'", () => {
      const actual = new Intern(testData);
      expect(actual.name).toEqual("Bob Smith");
    });
    it("should set the id value under the key 'id'", () => {
      const actual = new Intern(testData);
      expect(actual.id).toEqual("521");
    });
    it("should set the email value under the key 'email'", () => {
      const actual = new Intern(testData);
      expect(actual.email).toEqual("bob.smith@example.org");
    });
    it("should set the role value under the key 'role'", () => {
      const actual = new Intern(testData);
      expect(actual.role).toEqual("Intern");
    });
    it("should set the school value under the key 'school'", () => {
      const actual = new Intern(testData);
      expect(actual.school).toEqual("University of Birmingham");
    });
  });

  describe("methods", () => {
    // methods getName, getId, getEmail, getRole are accessible in the parent instance and already tested in Employee tests

    //new method for office number specific to Manager
    it("should get the school of the Intern created", () => {
      const intern = new Intern(testData);
      const actual = intern.getSchool();
      expect(actual).toEqual(intern.school);
    });
  });
});
