$(document).ready(function () {
  let answerOne
  let answerTwo
  let answerThree
  let answerFour
  let answerFive

  $("#formOne").submit(function (event) {
    event.preventDefault();
    answerOne = parseInt($("#radioOneDiv input[type='radio']:checked").val())
    $("#formTwo").slideDown()
    $("#formOne").slideUp()
  })

  $("#formTwo").submit(function (event) {
    event.preventDefault();
    answerTwo = parseInt($("#radioTwoDiv input[type='radio']:checked").val())
    $("#formThree").slideDown()
    $("#formTwo").slideUp()
  })

  $("#formThree").submit(function (event) {
    event.preventDefault();
    answerThree = parseInt($("#radioThreeDiv input[type='radio']:checked").val())
    $("#formFour").slideDown()
    $("#formThree").slideUp()
  })

  $("#formFour").submit(function (event) {
    event.preventDefault();
    answerFour = parseInt($("#radioFourDiv input[type='radio']:checked").val())
    $("#formFive").slideDown()
    $("#formFour").slideUp()
  })

  $("#formFive").submit(function (event) {
    event.preventDefault();
    answerFive = parseInt($("#radioFiveDiv input[type='radio']:checked").val())
    $("#formFive").slideUp()
    $("#results").fadeIn()
    $("h1").hide()

    let answerSum = answerOne + answerTwo + answerThree + answerFour + answerFive
    if (answerSum <= 5) {
      $('#youWantPython').show();
    } else if (answerSum <= 10 && answerSum > 5) {
      $('#youWantRuby').show();
    } else {
      $('#youWantRust').show();
    }
  })

  $(".refresh").click(function () {
    location.reload()
  })
})