$(document).ready(function() {
  $("#user").submit(function(event) {
    event.preventDefault();
    var items = [];
    for (var i = 1; i <= 6; i ++) {
      items.push($("#item" + i).val());
    }

    items = items.sort();
    items.forEach(function(item) {

      $(".g-list").append("<li>" + item.toUpperCase() + "</li>");
    });
  });

});
