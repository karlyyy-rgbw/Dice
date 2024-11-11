/*
Generate Random Dice Number(2)
Compare
Win Lose Draw Conditions
*/ 
var rand1 = Math.floor(Math.random() * 6)+1;
var randDice = "dice" + rand1 + ".png";
var randSource = "../images/" + randDice;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", "randSource")