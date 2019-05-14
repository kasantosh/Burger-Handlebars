$(document).ready(function() {
  $("#burger-submit").on("click", function() {
    var text = $("#burger-text")
      .val()
      .trim();
    // console.log(text);
    var set = {
      burger_name: text
    };

    $.ajax({
      method: "POST",
      url: "/",
      data: set
    });
    location.reload();
    // console.log(result);
  });

  $(".devour").on("click", function() {
    var id = $(this).attr("devour_id");

    var set = {
      id: id
    };

    $.ajax({
      method: "PUT",
      url: "/",
      data: set
    });
    location.reload();
    // console.log(result);
  });
});
