class AddressBook {
  constructor(name,phoneNumber) {
    this.name = name;
    this.phoneNumber = phoneNumber; 
 
  }
  describe() {
    let description = " AddressBook[Name = ";
    description += this.name;
    description += ', '+ this.phoneNumber;
    description += "]";
    return description;
  }
};
