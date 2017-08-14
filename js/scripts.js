$(document).ready(function() {
  $("#things form").submit(function(event) {
    var blanks = ["food", "color", "place"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("p").show();

    event.preventDefault();
  });
});
