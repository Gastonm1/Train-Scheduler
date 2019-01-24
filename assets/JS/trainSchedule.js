// Instructions:
// 1. Initialize Firebase
//2. Create a button for adding the new trains > update the html & update the firebase database
// 3. Create a way to retrieve trains from the train database.

//-----------------------------------------------------------------------------------------------
var clock = document.getElementById("clock");

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  clock.textContent = "The Current Time is: " + h + ":" + m + ":" + s;
}

setInterval(time, 1000);

// 1. Initialize Firebase

var config = {
  apiKey: "AIzaSyBJ22lSRMAeepuElvdeKpV8MnCjAHpqJjE",
  authDomain: "train-scheduler-311e9.firebaseapp.com",
  databaseURL: "https://train-scheduler-311e9.firebaseio.com",
  projectId: "train-scheduler-311e9",
  storageBucket: "train-scheduler-311e9.appspot.com",
  messagingSenderId: "78321187755"
};

firebase.initializeApp(config);

var database = firebase.database();

//2. Create a button for adding the new trains > update the html & update the firebase database
$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  //Grabs user input
  var tName = $("#InputTrain")
    .val()
    .trim();
  var tDestination = $("#InputDestination")
    .val()
    .trim();
  var tTime = $("#InputTraintime")
    .val()
    .trim();
  var tFrequency = $("#InputFrequency")
    .val()
    .trim();

  // Creates a temp object on local for holding train data
  var newTrain = {
    name: tName,
    destination: tDestination,
    time: tTime,
    frequency: tFrequency
  };
  // Pushes to database
  database.ref().push(newTrain);

  console.log(tName.name);
  console.log(tDestination.destination);
  console.log(tTime.time);
  console.log(tFrequency.frequency);

  alert("Train successfully added");

  // Clears the text boxes
  $("#InputTrain").val("");
  $("#InputDestination").val("");
  $("#InputTraintime").val("");
  $("#InputFrequency").val("");
});

// 3. Create a way to retrieve trains from the train database.
database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());

  //Storing innputs into a variable.
  var tName = childSnapshot.val().name;
  var tDestination = childSnapshot.val().destination;
  var tTime = childSnapshot.val().time;
  var tFrequency = childSnapshot.val().frequency;

  // Train info
  console.log(tName);
  console.log(tDestination);
  console.log(tTime);
  console.log(tFrequency);

  //Using moment to organize
  var trainTimePrettify = moment(tTime).format("LT");

  // Create the new row with the new information

  var newRow = $("<tr>").append(
    $("<td>").text(tName),
    $("<td>").text(tDestination),
    $("<td>").text(trainTimePrettify),
    $("<td>").text(tFrequency)
  );

  $("#train-table > tbody").append(newRow);
});
