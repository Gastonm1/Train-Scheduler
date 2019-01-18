// Instructions:
// 1. Initialize Firebase
//2. Create a button for adding the new trains > update the html & update the firebase database
// 3. Create a way to retrieve trains from the train database.
//4. Create a way to calculate the next arrival time.
//5. Calculate Minutes away

//-----------------------------------------------------------------------------------------------
$(document).ready(function() {

// 1. Initialize Firebase

    var config = {
        apiKey: "AIzaSyBJ22lSRMAeepuElvdeKpV8MnCjAHpqJjE",
        authDomain: "train-scheduler-311e9.firebaseapp.com",
        databaseURL: "https://train-scheduler-311e9.firebaseio.com",
        projectId: "train-scheduler-311e9",
        storageBucket: "train-scheduler-311e9.appspot.com",
        messagingSenderId: "78321187755"
      };

      var database = firebase.initializeApp(config);

//2. Create a button for adding the new trains > update the html & update the firebase database
 $("#add-train-btn").on("click", function(event) {
     event.preventDefault();

     var tName = $("#InputTrain").val().trim();
     var tDestination = $("#InputDestination").val().trim();
     var tTime = $("#InputTraintime").val().trim();
     var tFrequency = $("#InputFrequency").val().trim();
 }


});
