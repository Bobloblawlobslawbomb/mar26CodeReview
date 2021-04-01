let answerOne //went back and forth on const or let. const because they dont change 
let answerTwo //but let because Im declaring them'early' --0let seems to not throw an error tho...
let answerThree
let answerFour
let answerFive
const answerSum = answerOne + answerTwo + answerThree + answerFour + answerFive

if (answerSum <= 5) {
  $('#youWantPython').show();
} else if (answerSum <= 10) {
  $('#youWantRuby').show();
} else {
  $('#youWantRust').show();
}

$(document).ready(function () {

  const pickOrNot = confirm("Would you like to pick a programming language? Click OK for yes or Cancel for no.")
  if (pickOrNot === true) {
    $("h1").text("Let's answer a few questions:")
    $("#formOne").show()
  }
  else {
    $("h1").text("That's cool. You do you.")
  }  //this works


  $("#formOne").submit(function (event) {
    event.preventDefault();
    answerOne = $("value#formOne").parseInt()// is $('value#formOne') correct?
    $("#formTwo").show()
    $("#formOne").hide()
    //I need to make something like: const flavor = $("input:radio[name=flave]:checked").val();
  })

  //answerOne = $("#formOne").parseInt(value) closer?
  // I think my issue here has to do with submit/input:radio/and something with the value, but need guidance

  $("#formTwo").submit(function (event) {
    event.preventDefault();
    answerTwo = $("value#questionTwo").parseInt()
    $("#formThree").slideDown()
    $("#formTwo").slideUp()
  })
  $("#formThree").submit(function (event) {
    event.preventDefault();
    answerThree = $("value#questionThree").parseInt()
    $("#formFour").slideDown()
    $("#formThree").slideUp()
  })
  $("#formFour").submit(function (event) {
    event.preventDefault();
    answerFour = $("value#questionFour").parseInt()
    $("#formFive").slideDown()
    $("#formFour").slideUp()
  })
  $("#formFive").submit(function (event) {
    event.preventDefault();
    answerFive = $("value#questionFive").parseInt()
    $("#formFive").slideUp()
    $("#results").fadeIn()
    $(h1).hide()

  })

  //all of this is to grab values of the questions and use $ to show/hide question forms


  //add lines of code to: 
  //'math' values. --think not needed as ive done so on line 6
  //then do if/else.  --think not needed as ive done so on lines 8-14
  //show results --on results have a thing to refresh page and go again--




  $(".refresh").click(function () {
    location.reload()
  })//WIP also need guidance here...
})