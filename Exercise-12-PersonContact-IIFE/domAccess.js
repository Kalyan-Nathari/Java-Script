//Using IIFE (immediately invoking function express as a way to create abstraction)
var personDOM = (function(){
  //Kind of Private within this function, cannot be accessible
  var AGE = 'age';
  var AGE_CONDITION = 'ageCondition';
  var NAME = 'name';
  var ADDRESS = 'address';
  var SEARCH_CRITERIA = 'searchCriteria';
  var PERSONS_LIST = 'personsList';

  var dom = new Object();
  dom.getAge = function() {
    var ageElement = document.getElementById(AGE);
    var age = 0;  //default is zero?
    if (!isNaN(ageElement.value)) //Any other way?
      age = Number(ageElement.value);
    return age;
  }
  dom.getAgeCondition = function() {
    var ageConditionElement = document.getElementById(AGE_CONDITION);
    var ageCondition = Number(0);  //default is zero?
    if (!isNaN(ageConditionElement.value))
      ageCondition = Number(ageConditionElement.value);
    return ageCondition;
  }
  
  dom.getName = function() {
    var nameElement = document.getElementById(NAME);
    var name = '';  //default is empty Name?
    if (typeof(nameElement.value) == 'string')
      name = String(nameElement.value);
    return name;
  }
  dom.getAddress = function() {
    var addressElement = document.getElementById(ADDRESS);
    var address = '';  //default is empty Name?
    if (typeof(addressElement.value) == 'string')
    address = String(addressElement.value);
    return address;
  }

  dom.getSearchCriteria = function() {
    var searchCriteriaElement = document.getElementById(SEARCH_CRITERIA);
    var searchCriteria = '';  //default is empty Name?
    if (typeof(searchCriteriaElement.value) == 'string')
    searchCriteria = String(searchCriteriaElement.value);
    return searchCriteria;
  }

  dom.updatePersonsList = function(newText) {
    var personsListElement = document.getElementById(PERSONS_LIST);
    personsListElement.innerText = newText;
  }
  return dom;
})();
