for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.getElementsByClassName("drum")[i].addEventListener("click", function() {
    addSound(this.innerText);
  })
}

document.addEventListener("keypress", function() {
  addSound(event.key);
})

function addSound(myChar) {
  if (myChar === 'w') {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  } else if (myChar === 'a') {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  } else if (myChar === 's') {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  } else if (myChar === 'd') {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  } else if (myChar === 'j') {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
  } else if (myChar === 'k') {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  } else if (myChar === 'l') {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  }
}
