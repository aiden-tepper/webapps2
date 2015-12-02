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
    $("#feedback-list").html("<br>");
    for(var fbelem in data){
      var elem = data[fbelem];
      var feedbackList =
      "<div>Name: " + elem.firstname +
      "<div>Email: " + elem.email +
      "<div>Feedback: " + elem.feedback;
      $("#feedback-list").append(feedbackList);
      $("#feedback-list").append("<br>");
    }
  }

  $("#add-form").submit(function(event){
    event.preventDefault();
    console.log("Form submitted");

    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
    var email = $("#email").val();
    var feedback = $("#feedback").val();
    //var time = new Date()

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
