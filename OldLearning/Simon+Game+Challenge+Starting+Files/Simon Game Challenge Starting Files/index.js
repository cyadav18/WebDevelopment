var arr1 = [];
var arr2 = [];
var index = 0;
var level = 0;
var levelWin = false;
var restart = false;
$("body").keypress(loadLevel);
function loadLevel() {
  if(restart){
    level = 0;
    index = 0;
    arr1 = [];
    arr2 = [];
    levelWin = false;
    restart = false;
  }
  level = 1 + level;
  $("#level-title").text("level " + level);
  blinkRandom();
}
$(".btn").click(function() {
  var green = $(this).hasClass("green");
  var red = $(this).hasClass("red");
  var yellow = $(this).hasClass("yellow");
  var blue = $(this).hasClass("blue");
  if(green){
    greenClick();
  }else if(red){
    redClick();
  }else if(yellow){
    yellowClick();
  }else if(blue){
    blueClick();
  }
  if(arr2[index] === arr1[index]){
    console.log("level "+level+" passed!");
    index++;
    levelWin = true;
  }else{
      $("body").addClass("game-over");
      setTimeout(function() {
        $("body").removeClass("game-over");
      }, 600);
      var wrong = new Audio('sounds/wrong.mp3');
      wrong.play();
      $("#level-title").text("Game Over, Press Any Key to Restart");
      console.log("level "+level+" failed!");
      levelWin = false;
      restart = true;
  }
    if(arr1.length === arr2.length && levelWin){
      changeLevel();
    }
});
function changeLevel(){
  setTimeout(function() {
      loadLevel();
      arr2 = [];
      index = 0;
  }, 1000);
}

function blinkRandom() {
  var num = getRandomNumber(4);
  switch (num) {
    case 1:
      green();
      break;
    case 2:
      red();
      break;
    case 3:
      yellow();
      break;
    case 4:
      blue();
      break;
    default:
      blinkRandom();
  }
}


function getRandomNumber(range) {
  var num = (Math.random() * (range + 1));
  num = Math.floor(num);
  if (num !== 0) {
    return num;
  } else {
    return getRandomNumber(range);
  }
}

function onLoad() {
  $("#green").click(greenClick);
  $("#red").click(redClick);
  $("#yellow").click(yellowClick);
  $("#blue").click(blueClick);
}
function green() {
  arr1.push(1);
  changeColor("#green");
}

function red() {
  arr1.push(2);
  changeColor("#red");
}

function yellow() {
  arr1.push(3);
  changeColor("#yellow");
}

function blue() {
  arr1.push(4);
  changeColor("#blue");
}
function greenClick() {
  arr2.push(1);
  changeColor("#green");
}

function redClick() {
  arr2.push(2);
  changeColor("#red");
}

function yellowClick() {
  arr2.push(3);
  changeColor("#yellow");
}

function blueClick() {
  arr2.push(4);
  changeColor("#blue");
}


function changeColor(str) {
  $(str).addClass("pressed");
  switch (str) {
    case "#green":
      var green = new Audio('sounds/green.mp3');
      green.play();
      break;
    case "#red":
      var red = new Audio('sounds/red.mp3');
      red.play();
      break;
    case "#yellow":
      var yellow = new Audio('sounds/yellow.mp3');
      yellow.play();
      break;
    case "#blue":
      var blue = new Audio('sounds/blue.mp3');
      blue.play();
      break;
  }
  setTimeout(function() {
    $(str).removeClass("pressed");
  }, 50);
}
