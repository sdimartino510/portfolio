// Initialize Firebase
var config = {
  apiKey: "AIzaSyCsCoiUT-AMa7eCQxEG-9pVwRZnHOK2-TY",
  authDomain: "messages-f3ba6.firebaseapp.com",
  databaseURL: "https://messages-f3ba6.firebaseio.com",
  projectId: "messages-f3ba6",
  storageBucket: "messages-f3ba6.appspot.com",
  messagingSenderId: "1097339608029"
};
firebase.initializeApp(config);

  var database = firebase.database();
  console.log(database);

  $(".btn").on("click", function(event) {
    event.preventDefault();
  
    // Get values from form inputs
    var name = $("#inputName")
      .val()
      .trim();
    var email = $("#inputEmail")
      .val()
      .trim();
    var subject = $("#inputSubject")
      .val()
      .trim();
    var message = $("#inputMessage")
      .val()
      .trim();
  
  
    // Creates local "temporary" object for holding order data
    var contactInfo = {
      name: name,
      email: email,
      subject: subject,
      message: message
      }
  

  
    // Uploads contact data to the database
    database.ref().push(contactInfo);
  
  
    $("#inputName").val("");
    $("#inputEmail").val("");
    $("#inputSubject").val("");
    $("#inputMessage").val("");
  });
  