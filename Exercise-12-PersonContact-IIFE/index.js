let Persons = [];//Empty Array. This is supposed to hold Persons Objects

function addPerson() {
  //1. Get Person details from DOM

  //used domAccess.js file methods
  //2. Create Persons Object
  let person = new Person();
  person.init(personDOM.getName(), personDOM.getAge(), personDOM.getAddress());

  //3.Add it to the list
  Persons.push(person);
}

function getByAgeCondition() {
  setTimeout(searchByAge, 2000)
}
function searchByAge() {
  //1. Get Age condition using html input ageCondition
  let ageCondition = personDOM.getAgeCondition();
  //2. if Age is zero get all persons description
  let tempList = Persons;
  if (ageCondition != 0) {
    tempList = tempList.filter(function (person) {
      return person.age <= ageCondition;
    });
    console.log(tempList);
  }
  //3. if age is some value, filter persons whose age is lower than given
  let personsList = "";
  for (person of tempList) { //This is ES6 for loop
    personsList += person.describe();
  }

  //4. update personsList
  let listElement = personDOM.updatePersonsList(personsList);
}

//Please fill code
function getBySearchCondition() {
  setTimeout(searchByName, 0)
}

function searchByName() {

  let searchCondition = personDOM.getSearchCriteria();
  console.log(searchCondition);
  let newList = Persons;

  if (searchCondition.length != 0) {
    newList = Persons.filter(function (person) {
      //console.log(person.name);
      return person.name.match(searchCondition);
    });
  }
  //console.log(newList);

  let personsList = "";
  for (person of newList) { //This is ES6 for loop
    personsList += person.describe();
  }
  //4. update personsList
  let listElement = personDOM.updatePersonsList(personsList);
}