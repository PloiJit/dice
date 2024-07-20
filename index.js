var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDice = "dice" + randomNumber1 + ".png";
var randomPicture = "images/" + randomDice;
var picture1 = document.querySelectorAll("img")[0];
picture1.setAttribute("src", randomPicture);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomPicture2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomPicture2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " 🚩Player 1 wins";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
