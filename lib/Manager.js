const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeIdNumber) {
    super(name, id, email)
    this.officeIdNumber = officeIdNumber;
  }

  getOfficeIdNumber() {
    return this.officeIdNumber
  }

  getRole() {
    return "Manager"
  }
}

module.exports = Manager