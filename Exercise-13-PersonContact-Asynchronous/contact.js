function Contact() {
};
Contact.name = "";
Contact.age = "";
Contact.address = ""; //Can Address be separate class?
//Q. In address class have fields like House Number, street Name, City, State, ZipCode
Contact.prototype.init = function(name, age, hno,colName) {
  this.name = name;
  this.age = Number(age);
  this.address = new Address();
  this.address.init(hno,colName);
  
}
Contact.prototype.describe = function() {
  let description = "==>Person Name is ";
    description += this.name;
    description += " and person age is ";
    description += String(this.age);
    description += " and address is ";
    description += this.address.describe();
    description += "\n"; //Hack, should not do it 

    return description;
}

