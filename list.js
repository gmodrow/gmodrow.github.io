$(document).ready(function() {
  $(".btn-list").on("click", addItem);
  $("ol").on("click", ".link-delete", deleteItem);
});

// This function prompts the user for a to-do item
// and then appends it to the existing list of items.
// It also updates the counter at the top of the screen.
function addItem() {
  text = window.prompt("New To-Do Item");
  delete_link = '<a href="#" class="link-delete">(Delete)</a>'
  $("ol").append("<li>" + text + " " + delete_link + "</li>");
  var numItems = $("li").length;

  numItems = $("li").length;
  $(".total").html(numItems + " items");

  // Singular vs Plural
  if (numItems == 1) {
    $(".total").html(numItems + " item");
  }
  else {
    $(".total").html(numItems + " items");
  }
}

// This function deletes an item from the list.
function deleteItem(event) {
  $(event.target).parent().remove();

  numItems = $("li").length;
  $(".total").html(numItems + " items");
}
