/**
 * @jest-environment jsdom
 */

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

    //method for school name specific to Intern
    it("should get the school of the Intern created", () => {
      const intern = new Intern(testData);
      const actual = intern.getSchool();
      expect(actual).toEqual(intern.school);
    });

    //method for creating the html string specific to the intern card
    it("should confirm the intern info has been populated correctly in the string", () => {
      const intern = new Intern(testData);
      const actual = intern.createCardHtml();
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
      expect(document.querySelector(".school-name").innerHTML).toEqual(
        "University of Birmingham"
      );
    });
  });
});
