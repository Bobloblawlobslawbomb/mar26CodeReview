////let answerOne
//let answerTwo
//let answerThree
//let answerFour
//let answerFive

$(document).ready(function () {

  const pickOrNot = confirm("Would you like to pick a programming language? Click OK for yes or Cancel for no.")
  if (pickOrNot === true) {
    $("h1").text("Let's answer a few questions:")
    $("#formOne").show()
  }
  else {
    $("h1").text("That's cool. You do you.")
  }


  //let answerOne = 0
  //let answerTwo = 0
  //let answerThree = 0
  //let answerFour = 0
  //let answerFive = 0


  $("#formOne").submit(function (event) {
    event.preventDefault();
    answerOne = $("#radioOneDiv input[type='radio']:checked").val()
    $("#formTwo").slideDown()
    $("#formOne").slideUp()
  })



  $("#formTwo").submit(function (event) {
    event.preventDefault();
    answerTwo = $("#radioTwoDiv input[type='radio']:checked").val()
    $("#formThree").slideDown()
    $("#formTwo").slideUp()
  })
  $("#formThree").submit(function (event) {
    event.preventDefault();
    answerThree = $("#radioThreeDiv input[type='radio']:checked").val()
    $("#formFour").slideDown()
    $("#formThree").slideUp()
  })
  $("#formFour").submit(function (event) {
    event.preventDefault();
    answerFour = $("#radioFourDiv input[type='radio']:checked").val()
    $("#formFive").slideDown()
    $("#formFour").slideUp()
  })
  $("#formFive").submit(function (event) {
    event.preventDefault();
    answerFive = $("#radioFiveDiv input[type='radio']:checked").val()
    $("#formFive").slideUp()
    $("#results").fadeIn()
    $("h1").hide()
  })

  let answerSum = answerOne + answerTwo + answerThree + answerFour + answerFive

  if (answerSum <= 5) {
    $('#youWantPython').show();
  } else if (answerSum <= 10 && answerSum > 5) {
    $('#youWantRuby').show();
  } else if (answerSum <= 15 && answerSum > 10) {
    $('#youWantRust').show();
  } else {
    alert("What the Heck? How did this happen?")
  }

  $(".refresh").click(function () {
    location.reload()
  })
})




//let answerOne //went back and forth on const or let. const because they dont change 
//let answerTwo //but let because Im declaring them'early' --let seems to not throw an error tho...
//let answerThree
//let answerFour
//let answerFive
//const answerSum = answerOne + answerTwo + answerThree + answerFour + answerFive

//if (answerSum <= 5) {
// $('#youWantPython').show();
//} else if (answerSum <= 10) {
// $('#youWantRuby').show();
//} else {
// $('#youWantRust').show();
//}

/*var selectedVal = "";
var selected = $("#radioDiv input[type='radio']:checked");
if (selected.length > 0) {
  selectedVal = selected.val();
}

$("#radioDiv input[type='radio']:checked")*/
