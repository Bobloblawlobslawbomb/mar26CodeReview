$(document).ready(function () {
  $(".clickable").click(function () {
    $("#thing-showing").toggle();
    $("#thing-hidden").toggle();
  });
});