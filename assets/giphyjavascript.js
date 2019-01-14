$(document).ready(function() {
  var setButtons = ["llama", "tiger", "lion", "sea turtle"];

  function displayGif() {
    $("#display-gifs").empty();
    var animal = $(this).attr("data-name");
    var inputLimit = 15;
    console.log("hello");
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      animal +
      "&inputLimit=" +
      inputLimit +
      "&api_key=dc6zaTOxFJmzC";
    console.log(queryURL);

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      for (var j = 0; j < inputLimit; j++) {
        var gifDiv = $("<div>");
        gifDiv.addClass("holder");

        var newImage = $("<img>");
        newImage.attr("src", response.data[j].images.original_still.url);
        newImage.attr("data-still", response.data[j].images.original_still.url);
        newImage.attr("data-animate", response.data[j].images.original.url);
        newImage.attr("data-state", "still");
        newImage.attr("class", "gif");
        gifDiv.append(newImage);

        var rating = response.data[j].rating;
        console.log(response);

        var displayRating = $("<p>").text("Rating:" + rating);
        gifDiv.append(displayRating);

        $("#display-gifs").append(gifDiv);
      }
    });
  }

  function newButtons() {
    $("#new-buttons").empty();
    for (var i = 0; i < setButtons.length; i++) {
      var newButton = $("<button>");
      newButton.attr("class", "btn btn-default animalBtn");
      newButton.attr("id", "animal");
      newButton.attr("data-name", setButtons[i]);
      newButton.text(setButtons[i]);
      $("#new-buttons").append(newButton);
    }
    //displayGif();
  }

  $("#submitting").on("click", function() {
    var input = $("#user-input")
      .val()
      .trim();
    form.reset();
    setButtons.push(input);

    newButtons();
    return false;

    debugger;
  });
  newButtons();

  $(document).on("click", ".animalBtn", displayGif);
});
