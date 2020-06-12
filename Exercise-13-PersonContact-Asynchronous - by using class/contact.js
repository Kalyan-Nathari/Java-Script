class Contact {
  constructor(name, age, hno, colName) {
    this.name = name;
    this.age = Number(age);
    this.address = new Address(hno, colName);
  }
  describe() {
    let description = "==>Person Name is ";
    description += this.name;
    description += " and person age is ";
    description += String(this.age);
    description += " and address is ";
    description += this.address.describe();
    description += "\n"; //Hack, should not do it
    return description;
  }
}
