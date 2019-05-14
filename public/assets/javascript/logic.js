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
    }).then(function(result) {
      // console.log(result);
    });
  });
});
