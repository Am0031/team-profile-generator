const Manager = require("./Manager");

describe("Manager", () => {
  const testData = {
    name: "Bob Smith",
    id: "521",
    email: "bob.smith@example.org",
    role: "Manager",
    officeNumber: "45",
  };

  describe("instance", () => {
    it("should create an instance of Manager", () => {
      const actual = new Manager(testData);
      expect(actual).toBeInstanceOf(Manager);
    });
  });

  describe("data", () => {
    it("should set the name property under the key 'name'", () => {
      const actual = new Manager(testData);
      expect(actual.name).toEqual("Bob Smith");
    });
    it("should set the id property under the key 'id'", () => {
      const actual = new Manager(testData);
      expect(actual.id).toEqual("521");
    });
    it("should set the email property under the key 'email'", () => {
      const actual = new Manager(testData);
      expect(actual.email).toEqual("bob.smith@example.org");
    });
    it("should set the role property under the key 'role'", () => {
      const actual = new Employee(testData);
      expect(actual.role).toEqual("Manager");
    });
  });

  describe("methods", () => {
    // methods getName, getId, getEmail, getRole are accessible in the parent instance and already tested in Employee tests

    //new method for office number specific to Manager
    it("should get the office number of the manager created", () => {
      const manager = new Manager(testData);
      const actual = manager.getOfficeNumber();
      expect(actual).toEqual(manager.officeNumber);
    });
  });
});
