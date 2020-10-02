var myColorArray = [
  "red",
  "blue",
  "green",
  "yellow"
];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var success=1;


//Starting the game
$(document).keypress(function(event) {
  if (level == 0) {
    nextSequence();
  }
});

//Listening to the button click event
$(".btn").click(function(event) {
  var userChosenColor = event.target.id;
  userClickedPattern.push(userChosenColor);
  animatePress(userChosenColor);
  if (gamePattern.length == userClickedPattern.length && success==1) {
    checkAnswer();
  }
});


//Adding a button to the sequence
function nextSequence() {
  var myRandomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = myColorArray[myRandomNumber];
  userClickedPattern = [];
  $("#level-title").text("Level" + " " + level);
  level++;
  gamePattern.push(randomChosenColor);
  // Flash the button based on color & play sound
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
  //console.log("comp: " + gamePattern);
}

function checkAnswer() {
  for (var i = 0; i < gamePattern.length; i++) {
  //console.log(gamePattern[i] + " ****** user:" + userClickedPattern[i]);
    if (gamePattern[i] != userClickedPattern[i]) {
      success = 0;
      $("#level-title").text("Game over !!Press any key to Restart");
      playSound("wrong");
      $("body").addClass("game-over");
      $(document).keypress(function() {
        location.reload();
      });
    }
  }
  if (success == 1) {
    nextSequence();
  }
}



function playSound(myColor) {
  // Play Sound based on the button color
  switch (myColor) {
    case "red":
      var redSound = new Audio("sounds/red.mp3");
      redSound.play();
      break;
    case "blue":
      var blueSound = new Audio("sounds/blue.mp3");
      blueSound.play();
      break;
    case "green":
      var greenSound = new Audio("sounds/green.mp3");
      greenSound.play();
      break;
    case "yellow":
      var yellowSound = new Audio("sounds/yellow.mp3");
      yellowSound.play();
      break;
    case "wrong":
      var wrongSound = new Audio("sounds/wrong.mp3");
      wrongSound.play();
      break;
  }
}

function animatePress(currentColor) {
  $("." + currentColor).addClass("pressed");
  setTimeout(function() {
    $("." + currentColor).removeClass("pressed");
  }, 100);
}
