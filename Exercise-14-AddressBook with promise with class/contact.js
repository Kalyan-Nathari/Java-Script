class Contact {
  constructor(pid, pname, age, hno, street, city) {
    this.pid = Number(pid);
    this.pname = pname;
    this.age = Number(age);
    this.address = new Address(hno, street, city);
    this.friendsList = [];
  }
  describe() {
    let description = "==>Person Name is ";
    description += this.pname;
    description += " and person age is ";
    description += String(this.age);
    description += " and address is ";
    description += this.address.describe();
    description += "\n"; //Hack, should not do it
    return description;
  }
  addContact(friendContact) {
    this.friendsList.push(friendContact);
  }
  getFriendsList() {
    let friendsData = " ";
    for (friend of this.friendsList) {
      friendsData += "Friends Names :  [" + friend.name + " " + friend.age + "]";
    }
    return friendsData;
  }
}


