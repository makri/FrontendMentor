//Handling button click
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.getElementsByClassName("drum")[i].addEventListener("click", function() {
    addSound(this.innerText);
    buttonAnimation(this.innerText);
  })
}
// Handling keyboard press
document.addEventListener("keydown", function(event) {
  addSound(event.key);
  buttonAnimation(event.key);
})

//Attach sound to keydown or click event
function addSound(currentKey) {
  switch (currentKey) {
    case "a":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "d":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "f":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    default:
      break;
  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
