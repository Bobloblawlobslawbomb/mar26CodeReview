$(document).ready(function () {
  //I want one of those yes no confirms to start

  /*if (beginChoice ===true) {
    // then do answerOne prompt
  } else {
    //"say why are you here then?" --WIP:hidden quest
  }*/

  const answerOne = prompt("Which programming language would you like to find in your shoe?")

  const answerTwo = prompt("Which programming language would you most like to eat?")

  const answerThree = prompt("Which programming language would you LEAST mind stepping on?")

  const answerFour = prompt("Which programming language would you MOST like to step on?")

  const answerFive = prompt("Which programming language would you confront in a dark alley?")

  const allThemAnswers = answerOne + answerTwo + answerThree + answerFour + answerFive

  const dumbAnswer = allThemAnswers.length
  const evenDumberAnswer = (dumbAnswer / 10) + 1

  alert(dumbAnswer)//for testing variable
  alert(evenDumberAnswer)//for testing variable

  if (evenDumberAnswer <= 3) {
    $('#youWantRuby').show();
  } else if (evenDumberAnswer <= 5) {
    $('#youWantPython').show();
  } else {
    $('#youWantRust').show();
  }
})