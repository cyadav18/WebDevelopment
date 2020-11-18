var player1;
var player2;
var player1Count = 0;
var player2Count = 0;


function getRandomNumber(range) {
  var num = (Math.random() * (range + 1));
  num = Math.floor(num);
  if (num !== 0) {
    return num;
  } else {
    return getRandomNumber(range);
  }
}

function getRandomDice(player) {
  return ("images/dice" + (player) + ".png");
}

function rotateDice() {
  player1 = getRandomNumber(6);
  player2 = getRandomNumber(6);
  document.querySelector(".img1").setAttribute("src", getRandomDice(player1))
  document.querySelector(".img2").setAttribute("src", getRandomDice(player2))
  document.querySelector(".p1score").textContent = player1Count;
  document.querySelector(".p2score").textContent = player2Count;
  if(player1Count > player2Count){
    document.querySelector(".leadscore").textContent = "player 1 leads by "+(player1Count-player2Count);
  }else if (player2Count > player1Count){
    document.querySelector(".leadscore").textContent = "player 2 leads by "+(player2Count-player1Count);
  }else{
    document.querySelector(".leadscore").textContent = "player 1 and player 2 are equal"
  }
  if (player1 > player2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
    player1Count++;
  }else if(player2 >player1){
    document.querySelector("h1").textContent = "Player 2 Wins!";
    player2Count++;
  }else{
    document.querySelector("h1").textContent = "Opps! it's a draw";
  }
}

function onloadFunction(){
  document.querySelector("h1").textContent = "Draw!";
  document.querySelector(".img1").setAttribute("src", "images/dice6.png")
  document.querySelector(".img2").setAttribute("src", "images/dice6.png")
}
