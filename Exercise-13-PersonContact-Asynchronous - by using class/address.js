class Address {
  constructor(hno, colName) {
    this.hno = hno;
    this.colName = colName;
  }
  describe() {
    let description = "Address[hno =";
    description += this.hno;
    description += ", Col Name = ";
    description += String(this.colName);

    description += "]\n"; //Hack, should not do it

    return description;
  }
}
