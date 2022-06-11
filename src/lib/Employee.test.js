describe("Employee", () => {
  const testData = {
    name: "Bob Smith",
    id: "521",
    email: "bob.smith@example.org",
    role: "Employee",
  };

  describe("instance", () => {
    it("should create an instance of Employee", () => {
      const actual = new Employee(testData);
      expect(actual).toBeInstanceOf(Employee);
    });
  });

  describe("data", () => {
    it("should set the name property under the key 'name'", () => {
      const actual = new Employee(testData);
      expect(actual.name).toEqual("NBob Smith");
    });

    it("should set the id property under the key 'id'", () => {
      const actual = new Employee(testData);
      expect(actual.id).toEqual("521");
    });

    it("should set the email property under the key 'email'", () => {
      const actual = new Employee(testData);
      expect(actual.email).toEqual("bob.smith@example.org");
    });
  });

  describe("methods", () => {
    it("should get the name of the employee created", () => {
      const employee = new Employee(testData);
      const actual = employee.getName();
      expect(actual).toEqual(employee.name);
    });

    it("should get the id of the employee created", () => {
      const employee = new Employee(testData);
      const actual = employee.getId();
      expect(actual).toEqual(employee.id);
    });

    it("should get the email of the employee created", () => {
      const employee = new Employee(testData);
      const actual = employee.getEmail();
      expect(actual).toEqual(employee.email);
    });

    it("should get the role of the employee created", () => {
      const employee = new Employee(testData);
      const actual = employee.getRole();
      expect(actual).toEqual(employee.role);
    });
  });
});
