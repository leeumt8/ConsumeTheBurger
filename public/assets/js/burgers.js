$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
  
      var eaten = {
        devoured: true
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: eaten
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        name: $("#burg").val().trim()
      };

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Inserted new Burger");
          location.reload();
        }
      );
    });
});