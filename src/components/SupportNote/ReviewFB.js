const firebaseConfig = {
    //   copy your firebase config informations
    apiKey: "AIzaSyCpIULXhtdN2Ga65G65vk3qjvWp-gQQuj8",
  authDomain: "myobd-9bddd.firebaseapp.com",
  databaseURL: "https://myobd-9bddd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "myobd-9bddd",
  storageBucket: "myobd-9bddd.appspot.com",
  messagingSenderId: "538923119712",
  appId: "1:538923119712:web:eca08c61131fcd25f97f05"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};