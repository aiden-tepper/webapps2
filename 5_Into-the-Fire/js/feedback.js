var ref = new Firebase(""); //Use your app's Firebase URL

// Add some event handlers for FB events

$(document).ready(function(){
  console.log("Document loaded");
  $("#add-form").submit(function(event){
    event.preventDefault();
    console.log("Form submitted!");
    // Go grab your info and do something with it.
  });
});
