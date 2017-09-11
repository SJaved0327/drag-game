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
$("#totalScore").html(targetNumber);

//targetNumber is a random value between 19 and 120
var targetNumber = Math.floor((Math.random() * 120) + 19);
$("#targetNumber").html(targetNumber);
console.log("targetNumber: " + targetNumber);

//each crystal is unique and assigned a random value between 1 and 12
//crystalValue is an object so that a random number is generated per key and stored
var crystalValue = {
  crystal01: Math.floor((Math.random() * 12) + 1),
  crystal02: Math.floor((Math.random() * 12) + 1),
  crystal03: Math.floor((Math.random() * 12) + 1),
  crystal04: Math.floor((Math.random() * 12) + 1)
};

//the random number generated is attached to each crystal as a data attribute
$("#crystal01").attr("data-crystalvalue", crystalValue.crystal01);
$("#crystal02").attr("data-crystalvalue", crystalValue.crystal02);
$("#crystal03").attr("data-crystalvalue", crystalValue.crystal03);
$("#crystal04").attr("data-crystalvalue", crystalValue.crystal04);

console.log("crystal01: " + crystalValue.crystal01);
console.log("crystal01: " + crystalValue.crystal02);
console.log("crystal01: " + crystalValue.crystal03);
console.log("crystal01: " + crystalValue.crystal04);

// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    console.log(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    //new score prints to html
    totalScore += crystalValue;
    $("#totalScore").html(totalScore);
    
    if (totalScore === targetNumber) {
      winsCounter++;
      $("#winsCounter").html(winsCounter);
    }

    else if (totalScore >= targetNumber) {
      lossesCounter++;
      $("#lossesCounter").html(lossesCounter);
    }

});


