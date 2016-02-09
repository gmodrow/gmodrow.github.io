//This javascript will allow a user to create a list
$(document).ready(function() {
  $(".btn").on("click", addItem);
  $(".ol").on("click", ".link-delete", deleteItem);
});

function addItem() {
  text = window.prompt("Add an item to your Superbowl checklist");
  delete_link = '<a href="#" class="link-delete">(Delete)</a>'
  $("ol").append("<li>" + text + " " + delete_link + "</li>");
  var numItems= $("li").length;

  numItems = $("li").length;
  $(".total").html(numItems = " items");

//differentiate between singular and plural items
  if (numItems == 1) {
    $(".total").html(numItems + " item");
    }
  else {
    $(".total").html(numItems + " items");
    }
  }

function deleteItem(event) {
  $(event.target).parent().remove();

  numItems = $("li").length;
  $(".total").html(numItems + " items");
}