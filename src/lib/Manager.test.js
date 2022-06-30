/**
 * @jest-environment jsdom
 */

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
    it("should set the name value under the key 'name'", () => {
      const actual = new Manager(testData);
      expect(actual.name).toEqual("Bob Smith");
    });
    it("should set the id value under the key 'id'", () => {
      const actual = new Manager(testData);
      expect(actual.id).toEqual("521");
    });
    it("should set the email value under the key 'email'", () => {
      const actual = new Manager(testData);
      expect(actual.email).toEqual("bob.smith@example.org");
    });
    it("should set the role value under the key 'role'", () => {
      const actual = new Manager(testData);
      expect(actual.role).toEqual("Manager");
    });
    it("should set the office number value under the key 'officeNumber'", () => {
      const actual = new Manager(testData);
      expect(actual.officeNumber).toEqual("45");
    });
  });

  describe("methods", () => {
    // methods getName, getId, getEmail, getRole are accessible in the parent instance and already tested in Employee tests

    //method for office number specific to Manager
    it("should get the office number of the manager created", () => {
      const manager = new Manager(testData);
      const actual = manager.getOfficeNumber();
      expect(actual).toEqual(manager.officeNumber);
    });

    //method for creating the html string specific to the manager card
    it("should confirm the manager info has been populated correctly in the string", () => {
      const manager = new Manager(testData);
      const actual = manager.createCardHtml();
      document.body.innerHTML = actual;

      expect(document.querySelector(".card-title").innerHTML).toEqual(
        "Bob Smith"
      );
      expect(
        document.querySelector(".list-container > li:first-of-type").innerHTML
      ).toEqual("ID: 521");
      expect(document.querySelector(".email-link").innerHTML).toEqual(
        "bob.smith@example.org"
      );
      expect(document.querySelector(".office-number").innerHTML).toEqual(
        "Office number: 45"
      );
    });
  });
});
