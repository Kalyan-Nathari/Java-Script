//Using IIFE (immediately invoking function express as a way to create abstraction)
class PersonDOM {
  static  PID= 'pid';
  static PNAME ='pname';
  static JOB = 'job';
  static HNO = 'hno';
  static STREET ='street';
  static  CITY = 'city';
  static PINCODE = 'pincode';
  static STATE = 'state';
 
  static getInteger (name) {
    const htmlElement = document.getElementById(name);
    let returnValue = Number(0);  //default is zero?
    if (!isNaN(htmlElement.value)) {
      returnValue = Number(htmlElement.value);
      return returnValue;
    }
    throw 'not a number';
  }
  static getString (name) {
    const htmlElement = document.getElementById(name);
    let returnValue = '';  //default is empty Name?
    if (typeof(htmlElement.value) == 'string')
      returnValue = String(htmlElement.value);
    return returnValue;
  }
  static getPid() {
    return PersonDOM.getInteger(PersonDOM.PID);
  }
  static getPname () {
    return PersonDOM.getString(PersonDOM.PNAME)
  }
  static getJob() {
    return PersonDOM.getString(PersonDOM.JOB);
  }
  static getHno() {
    return PersonDOM.getString(PersonDOM.HNO);
  }
  static getStreet() {
    return PersonDOM.getString(PersonDOM.STREET);
  }
  static getCity() {
    return PersonDOM.getString(PersonDOM.CITY);
  }
  static getState() {
    return PersonDOM.getString(PersonDOM.STATE);
  }
  static getPinCode() {
    return PersonDOM.getString(PersonDOM.PINCODE);
  }
}
