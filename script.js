var randomNum = Math.floor(Math.random() * 6) + 1;
var randomDice = "dice" + randomNum + ".png";
var randomImage = "./images/" + randomDice;

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImage);

var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomDice1 = "dice" + randomNum1 + ".png";
var randomImage1 = "./images/" + randomDice1;

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImage1);

if (randomNum > randomNum1) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNum < randomNum1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "It's a Draw!";
}
