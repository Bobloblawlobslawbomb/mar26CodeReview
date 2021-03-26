$(document).ready(function () {

  const language = $("input:radio[name=language]:checked").val();

  let languageTicker = 0; //want to use this keep adding then take this value into if/else to determine language


  if (languageTicker <= 5) {
    $('#youWantRuby').show();
  } else if (languageTicker = 6 || languageTicker >= 10 || languageTicker < 15) {
    $('#youWantPython').show();
  } else {
    $('#youWantRust').show();
  }



}




/*if (age > 21) {
   $('#drinks').show();
 } else if (age === 21) {
   alert("Now don't go wild!");
   $('#drinks').show();
 } else {
   $('#under-21').show();
 }*/
