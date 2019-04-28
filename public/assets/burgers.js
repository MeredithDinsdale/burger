// Make sure we wait to attach our handlers until the DOM is fully loaded.
// const devouredContainer = $(".devouredContainer");
// const readyToEatContainer = $(".readyToEatContainer");

// $(document).on("click", "devourBtn", handleDevour);

// let burgers;

$(function() {

  $.get("/", function(data) {
    console.log("Burgers`'`'`", data);
    if (burgers.devoured === true) {
      devouredContainer.append(data);
    }
    else if (burgers.devoured === false) {
      readyToEatContainer.append(data);
    }
  });
    
  
$(".create-form").on("submit", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();
  var newBurger = {
    name: $("#burger").val().trim(),
  };
  // Send the POST request.
  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
  }).then(
    function() {
      console.log("`'`'`'`NEW BURGER CREATED`'`'`'`");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});
  
    // $(".delete-burger").on("click", function(event) {
    //   var id = $(this).data("id");
  
    //   // Send the DELETE request.
    //   $.ajax("/api/burgers/" + id, {
    //     type: "DELETE"
    //   }).then(
    //     function() {
    //       console.log("`'`'`'`'`'BURGER DELETED'`'`'`'`'`", id);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });

  })
    