const Contacts = [];//Empty Array. This is supposed to hold Persons Objects
let scrollTimerId = -1;
let isScrollOn = false;
let scrollTime = 0;
//Q. Can you creat new function to take many contacts in single function
//input can be from json text
const contactList = [{ 'name': 'Ramu', 'age': 34, 'hno': '123-5', 'colName': 'Hyd' },
                     { 'name': 'Vani', 'age': 31, 'hno': '123-5', 'colName': 'Hyd' },
                     { 'name': 'Madhu', 'age': 35, 'hno': '123-5', 'colName': 'Hyd'},
                     { 'name': 'Latha', 'age': 36, 'hno': '23-5', 'colName': 'Hyd' }];

function addPerson() {
  //1. Get Contact details from DOM
  //used domAccess.js file methods
  //2. Create contact Object
  for (const contactInfo of contactList) {
    const contact = new Contact(contactInfo.name, contactInfo.age, contactInfo.hno, contactInfo.colName);
    // contact.init(contactInfo.name, contactInfo.age, contactInfo.hno, contactInfo.colName);
    Contacts.push(contact);
  }
  //3.Add it to the list

}

function getByAgeCondition() {
  //Using setTimeout since this logic to search
  //a person by Age might take more time
  //By using setTimeout, we are freeing the original 'Click' call-stack
  //So that UI looks fluid
  setTimeout(() => {
    //1. Get Age condition using html input ageCondition
    //var ageCondition = personDOM.getAgeCondition();
    const ageCondition = Number(document.getElementById('ageCondition').value);
    //2. if Age is zero get all persons description
    let tempList = Contacts;
    if (ageCondition != 0) {
      tempList = tempList.filter(person => person.age <= ageCondition);
    }
    console.log(tempList);
    //3. if age is some value, filter persons whose age is lower than given
    let personsList = "";
    for (contact of tempList) { //This is ES6 for loop
      personsList += contact.describe();
    }

    //4. update personsList
    personDOM.updatePersonsList(personsList);
  }, 0);
}

//Please fill code
function getBySearchCondition() {

}
function updatePersonData() {
  if (Contacts.length > 0) {
    let ind = Math.floor(Math.random() * Math.floor(Contacts.length));
    ind = ind % Contacts.length;
    personDOM.updateScrollText(Contacts[ind].describe());
  }
  if (isScrollOn) {
    scrollTimerId = setTimeout(updatePersonData, scrollTime * 1000); //multiply by 1000 to make it in milli seconds
  }

}
function onStartScroll() {
  isScrollOn = true;
  scrollTime = personDOM.getScrollTime();
  //onStopScroll();
  if (scrollTimerId != -1) {
    clearTimeout(scrollTimerId);
  }
  scrollTimerId = setTimeout(updatePersonData, scrollTime * 1000); //multiply by 1000 to make it in milli seconds
}
function onStopScroll() {
  isScrollOn = false;
  if (scrollTimerId != -1) {
    clearTimeout(scrollTimerId);
  }
  //if (scrollTimerId != -1) {
  // clearInterval(scrollTimerId);
  //}
  // scrollTimerId = -1;
}