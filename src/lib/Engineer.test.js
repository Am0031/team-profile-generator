/**
 * @jest-environment jsdom
 */

const Engineer = require("./Engineer");

describe("Engineer", () => {
  const testData = {
    name: "Bob Smith",
    id: "521",
    email: "bob.smith@example.org",
    role: "Engineer",
    githubUsername: "Bob45",
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
      expect(actual.githubUsername).toEqual("Bob45");
    });
  });

  describe("methods", () => {
    // methods getName, getId, getEmail, getRole are accessible in the parent instance and already tested in Employee tests

    //method for github username specific to Engineer
    it("should get the github username of the engineer created", () => {
      const engineer = new Engineer(testData);
      const actual = engineer.getGithubUsername();
      expect(actual).toEqual(engineer.githubUsername);
    });

    //method for creating the html string specific to the engineer card
    it("should confirm the engineer info has been populated correctly in the string", () => {
      const engineer = new Engineer(testData);
      const actual = engineer.createCardHtml();
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
      expect(document.querySelector(".github-link").innerHTML).toEqual("Bob45");
    });
  });
});
