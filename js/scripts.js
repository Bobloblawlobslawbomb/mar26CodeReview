//business logic portion
$(document).ready(function () {

  let languageTicker = 0; //want to use this keep adding then take this value into if/else to determine language

  const languageChoice = languageTicker;

  if (languageChoice <= 5) {
    $('#youWantRuby').show();
  } else if (languageChoice <= 14) {
    $('#youWantPython').show();
  } else {
    $('#youWantRust').show();
  }

  //user input logic section

  const language = $("input:radio[name=language]:checked").val();
})
