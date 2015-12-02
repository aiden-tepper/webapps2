$(document).ready(function(){
  console.log("Document loaded");

  $("#submit_button").click(function(){
    $("#addModal").foundation("reveal", "close");
  });

  var firebase = new Firebase("https://into-the-5ire.firebaseio.com/");

  firebase.on("value", function(snapshot){
    var data = snapshot.val();
    console.log("Snapshot recieved:");
    console.log(data);
    update(data);
    console.log("Snapshot loaded into DOM");
  }, function(errorObject){
    console.log("The read failed: " + errorObject.code);
  });

  function update(data){
    for(var fbelem in data){
      console.log("fbelem: " + fbelem);
      // var feedbackList =
      // "<div>Name: " + elem2.firstname +
      // "<div>Email: " + elem2.email +
      // "<div>Feedback: " + elem2.feedback;
      // $("#feedback-list").html(feedbackList)
    }
  }

  $("#add-form").submit(function(event){
    event.preventDefault();
    console.log("Form submitted");

    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
    var email = $("#email").val();
    var feedback = $("#feedback").val();

    var JSONObj = {
      "firstname":firstname,
      "lastname":lastname,
      "email":email,
      "feedback":feedback,
    };

    firebase.push(JSONObj, function(){
      console.log("Push to Firebase was successful");
    });

  });

});
