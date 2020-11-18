var drum_buttom = document.querySelectorAll(".drum");

var audioPath = ["sounds/tom-1.mp3", "sonunds/tom-2.mp3", "sonunds/tom-3.mp3", "sonunds/tom-4.mp3", "sounds/crash.mp3", "sounds/kick-bass.mp3", "sounds/snare.mp3"];
for (var i = 0; i < drum_buttom.length; i++) {
  drum_buttom[i].addEventListener("click", function(event) {
    var text = this.textContent;
    soundCreator(text);
    addFlash(text);
  });
}
document.addEventListener("keypress",function (event){
  soundCreator(event.key);
  addFlash(event.key);

});
function addFlash(text){
  var button = document.querySelector("."+text);
  if(button != null){
    button.classList.add("pressed");
    setTimeout(function(){button.classList.remove("pressed");}, 100);
  }
}

function soundCreator(text){

  switch (text) {
    case "w":
      initliseDrum();
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      initliseDrum();
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      initliseDrum();
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      initliseDrum();
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      initliseDrum();
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      initliseDrum();
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      initliseDrum();
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      alert("select button proper");
  }
}

function initliseDrum() {
  for (var i = 0; i < drum_buttom.length; i++) {
    if (drum_buttom[i].classList.contains("drum_select") || drum_buttom[i].classList.contains("drum_select_j_l")) {
      drum_buttom[i].classList.remove("drum_select");
      drum_buttom[i].classList.remove("drum_select_j_l");
    }
  }
}
