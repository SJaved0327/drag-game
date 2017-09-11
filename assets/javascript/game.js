//targetNumber starts at 0 and is visible in html
var targetNumber = 0;
$("#targetNumber").html(targetNumber);

//winsCounter starts at 0 and is visible in html
var winsCounter = 0;
$("#winsCounter").html(targetNumber);

//lossesCounter starts at 0 and is visible in html
var lossesCounter = 0;
$("#lossesCounter").html(targetNumber);

//totalScore starts at 0 and is visible in html
var totalScore = 0;
$("#totalScore").html(totalScore);

//targetNumber is a random value between 19 and 120
var targetNumber = Math.floor((Math.random() * 120) + 19);
$("#targetNumber").html(targetNumber);

//each crystal is unique and assigned a random value between 1 and 12
//crystalValue is an object so that a random number is generated per key and stored
var crystalValue = {
  crystal01: Math.floor((Math.random() * 12) + 1),
  crystal02: Math.floor((Math.random() * 12) + 1),
  crystal03: Math.floor((Math.random() * 12) + 1),
  crystal04: Math.floor((Math.random() * 12) + 1)
};

//reset values at the top of each round
function valuesReset(){
  //restate crystalValue so new random numbers are generated and stored
  crystalValue = {
    crystal01: Math.floor((Math.random() * 12) + 1),
    crystal02: Math.floor((Math.random() * 12) + 1),
    crystal03: Math.floor((Math.random() * 12) + 1),
    crystal04: Math.floor((Math.random() * 12) + 1)
  };
  //assign newly-generated value to crystals as data attributes
  $("#crystal01").attr("data-crystalvalue", crystalValue.crystal01);
  $("#crystal02").attr("data-crystalvalue", crystalValue.crystal02);
  $("#crystal03").attr("data-crystalvalue", crystalValue.crystal03);
  $("#crystal04").attr("data-crystalvalue", crystalValue.crystal04);
  //reset targetNumber to a random number and print to page
  targetNumber = Math.floor((Math.random() * 120) + 19);
  $("#targetNumber").html(targetNumber);
  //reset total score to 0 and print to page
  totalScore = 0;
  $("#totalScore").html(totalScore);
};

$("document").ready(function() {
  //when page loads, call function to reset all values
  valuesReset();

  console.log("crystal01: " + crystalValue.crystal01);
  console.log("crystal02: " + crystalValue.crystal02);
  console.log("crystal03: " + crystalValue.crystal03);
  console.log("crystal04: " + crystalValue.crystal04);

  //establish click event for all crystals
  $(".crystal-image").on("click", function() {

      //pull crystalValue from data attribute assigned to each crystal (from the object)
      //convert string attribute to integer
      var crystalValue = ($(this).attr("data-crystalvalue"));
      crystalValue = parseInt(crystalValue);
      //every time crystals are clicked, their value is added to totalScore
      totalScore += crystalValue;
      $("#totalScore").html(totalScore);
      //if totalScore is equal to targetNumber:
      if (totalScore === targetNumber) {
        //winsCount increases by 1 and stores its value
        winsCounter++;
        //winsCount prints to page
        $("#winsCounter").html(winsCounter);
        //game starts from the top and values are reset
        valuesReset();
      }
      //if totalScore is greater than targetNumber:
      else if (totalScore >= targetNumber) {
        //lossesCounter decreases by one and stores value
        lossesCounter++;
        //lossesCounter prints to page
        $("#lossesCounter").html(lossesCounter);
        //game starts from the top and values are reset
        valuesReset();
      }

  });

});

