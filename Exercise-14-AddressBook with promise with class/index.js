let Contacts = [];//Empty Array. This is supposed to hold Persons Objects
let scrollTimerId = -1;
//Q. Can you creat new function to take many contacts in single function
//input can be from json text

function addPerson() {
  //1. Build Persons List here
  //Ex: const persons = [{}, {}, {}, {} ]
  let contact = new Contact(PersonDOM.getPname(), PersonDOM.getAge(), PersonDOM.getAddress()) ;
  Contacts.push(contact);

  //3.Add it to the list
  // Persons.push(person);
  // const contactList = [{ pid: 10, 'name': 'Ramu', 'age': 34, 'hno': '123-5', 'street': 'Kranthi Nagar', 'city': 'Hyd' },
  // { pid: 11, 'name': 'Vani', 'age': 31, 'hno': '123-5', 'street': 'Hyd', 'city': 'Hyd' },
  // { pid: 12, 'name': 'Madhu', 'age': 35, 'hno': '123-5', 'street': 'Hyd', 'city': 'Hyd' },
  // { pid: 13, 'name': 'Latha', 'age': 36, 'hno': '23-5', 'street': 'Hyd', 'city': 'Hyd' }];

  // //for loop to add every person in list
  // // const addressBooks =[{'pid':10,'name':'Modi'},{'pid':10,'name':'Jassu'}];
  // const addressBooks = [{ pid: 10, friends: [11, 14] },
  // {
  //     pid: 11, friends: [12, 13] }
  // ];

  // for (let contactInfo of contactList) {
  //   const contact = new Contact(contactInfo.pid, contactInfo.name, contactInfo.age, contactInfo.hno,
  //     contactInfo.street, contactInfo.city);
  //     //3.Add it to the list
  //   Contacts.push(contact);
  // }
  let ele = document.getElementById('sel');
  for (let contact of Contacts) {
    ele.innerHTML = ele.innerHTML + '<option value="' + contact.pid + '">' + contact.name + '</option>';
  }

  for (const friendsList of addressBooks) {
    const pid = friendsList.pid;
    getContactPromise(pid)
    .then((currentContact) =>{
      createFriendsList(currentContact);
    })
    .catch((error) =>{
      console.log(error);
    });
  }
}
function createFriendsList(currentContact) {
  for(const friendId of friendsList.friends) {
    getContactPromise(friendId)
    .then((friendContact) => {
      currentContact.addContact(friendContact);
    })
    .catch((error) =>{
      console.log('Contact Info is not available ' +error);
    });
  }
}
function getContactPromise(pid){
  return new Promise((resolve, reject)=>{
    for (const contact of Contacts) {
      if (contact.pid === pid) {
        resolve(contact);
        return;
      }
    }
    reject();
  });
}
function getContactAsync(pid, cbk) {
  //return the result should be using  callback and timeout 
  setTimeout(() => {
    for (const contact of Contacts) {
      if (contact.pid === pid) {
        cbk(contact);
      }
    }
    cbk(null);
  }, 0);
}

function getContact(pid) {
  //return the result should be using  callback and timeout 
  for (const contact of Contacts) {
    if (contact.pid === pid) {
      return contact;
    }
  }
  return null;
}

//Asyn
function getPersonDetails() {
  //1. Get Age condition using html input ageCondition
  let pidCondition = Number(document.getElementById("pidCondition").value);
  getContactAsync(pidCondition, (contact) => {
    let currentContact = null;
    currentContact = contact;
    if (currentContact == null) {
      return;
    } 
    let personsList = ' ';
    if (currentContact != null) {
      personsList += currentContact.describe();
      personsList += currentContact.getFriendsList();
    }
    let listElement = document.getElementById("personsDetails");
    listElement.innerHTML = personsList;
    
    
  });
 
}

function show(ele) {
  // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
  var msg = document.getElementById('msg');
  msg.innerHTML = 'Selected Peroson: <b>' + ele.options[ele.selectedIndex].text + '</b> </br>' +
    'ID: <b><input type = text name = pid value =  ' + ele.value + '>';
}




