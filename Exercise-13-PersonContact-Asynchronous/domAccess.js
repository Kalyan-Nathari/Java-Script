//Using IIFE (immediately invoking function express as a way to create abstraction)
const personDOM = (function () {
  //Kind of Private within this function, cannot be accessible
  const AGE = "age";
  const AGE_CONDITION = "ageCondition";
  const NAME = "name";
  // var ADDRESS = 'address';
  const HNO = "hno";
  const COLNAME = "colName";
  const SEARCH_CRITERIA = "searchCriteria";
  const PERSONS_LIST = "personsList";
  const RANDOM_SCROLL_TEXT = "randomScrollText";
  const SCROLL_TIME = "scrollTime";
  const dom = new Object();

  dom.getInteger = (name) => {
    const htmlElement = document.getElementById(name);
    let returnValue = Number(0); //default is zero?
    if (!isNaN(htmlElement.value)) returnValue = Number(htmlElement.value);
    return returnValue;
  };
  dom.getAge = () => {
    return this.getInteger(AGE);
  };
  dom.getAgeCondition = () => {
    return this.getInteger(AGE_CONDITION);
  };
  dom.getScrollTime = function () {
    return this.getInteger(SCROLL_TIME);
  };

  dom.getString = function (name) {
    const htmlElement = document.getElementById(name);
    let returnValue = ""; //default is empty Name?
    if (typeof htmlElement.value == "string")
      returnValue = String(htmlElement.value);
    return returnValue;
  };
  dom.getName = () => {
    return this.getString(NAME);
  };
  // dom.getAddress = function() {
  //   return this.getString(ADDRESS);
  // }
  dom.getHno = () => {
    return this.getString(HNO);
  };
  dom.getColName = () => {
    return this.getString(COLNAME);
  };
  dom.getSearchCriteria = () => {
    return this.getString(SEARCH_CRITERIA);
  };

  dom.updatePersonsList = (newText) => {
    //Updating UI in separate callback from setTimeout so your logic does not wait until UI returns
    setTimeout(() => {
      const personsListElement = document.getElementById(PERSONS_LIST);
      personsListElement.innerText = newText;
    }, 0);
  };
  dom.updateScrollText = (newText) => {
    setTimeout(() => {
      const personsListElement = document.getElementById(RANDOM_SCROLL_TEXT);
      personsListElement.innerText = newText;
    }, 0);
  };
  return dom;
})();
