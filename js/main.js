// My Firebase link 
var url ="https://train-schedule-9e509.firebaseio.com/";
var dataRef = new Firebase(url);
var name ='';
var destination = '';
var firstTrainTime = '';
var frequency = '';
var nextTrain = '';
var nextTrainFormatted = '';
var minutesAway = '';
var firstTimeConverted = '';
var currentTime = '';
var diffTime = '';
var tRemainder = '';
var minutesTillTrain = '';
var keyHolder = '';
var getKey = '';


$(document).ready(function() {

     // Capture Button Click

     $("#add-train").on("click", function() {
     	
     	

          // Grabbed values from text boxes

     	name = $('#name-input').val().trim();
     	destination = $('#destination-input').val().trim();
     	firstTrainTime = $('#first-train-time-input').val().trim();
     	frequency = $('#frequency-input').val().trim();
          firstTimeConverted = moment(firstTrainTime, "hh:mm").subtract(1, "years");
          currentTime = moment();
          diffTime = moment().diff(moment(firstTimeConverted), "minutes");
          tRemainder = diffTime % frequency;
          minutesTillTrain = frequency - tRemainder;
          nextTrain = moment().add(minutesTillTrain, "minutes");
          nextTrainFormatted = moment(nextTrain).format("hh:mm");

     	// Code for handling the push

     	keyHolder = dataRef.push({
     		name: name,
     		destination: destination,
     		firstTrainTime: firstTrainTime,  
     		frequency: frequency,
               nextTrainFormatted: nextTrainFormatted,
               minutesTillTrain: minutesTillTrain
     	});

          $('#name-input').val('');
          $('#destination-input').val('');
          $('#first-train-time-input').val('');
          $('#frequency-input').val('');

          return false;
     });



     
}); // Closes jQuery wrapper