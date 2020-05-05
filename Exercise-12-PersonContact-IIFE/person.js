function Person() {
};
Person.name = "";
Person.age = "";
Person.address = "";
Person.prototype.init = function (name, age, address) {
  this.name = name;
  this.age = Number(age);
  this.address = address;
}
Person.prototype.describe = function () {
  var description = "==>Person Name is ";
  description += this.name;
  description += " and person age is ";
  description += String(this.age);
  description += " and address is ";
  description += String(this.address);
  description += "\n"; //Hack, should not do it 

  return description;
}

