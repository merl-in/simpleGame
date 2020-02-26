const show = console.log;

var randomTo1 = Math.random();
var random100 = Math.floor((randomTo1*10)*(randomTo1*10));      // gives a random whole number between 0 and 100


var beasts = ["bear", "boar", "ape", "panther", "snake", "monkey", "tiger", "scorpion", "crocodile"]; // gives a random beast
var beast = beasts[Math.floor(Math.random()*beasts.length)];

var alert = document.getElementById("warning");
alert.innerHTML = "A wild "+beast+" appeared!"; // on page load a wild beast appears

document.getElementById("attack").addEventListener("click", swing);



function swing(){
    if (random100 < 25){
        document.getElementById("attackResult").innerHTML= "You swung and you missed..";
    } else if (random100 >= 80){
        document.getElementById("attackResult").innerHTML= "You got a critical hit, on the "+beast+"!!";
    } else {
        document.getElementById("attackResult").innerHTML= "You hit the "+beast+", but it only makes the "+beast+" angrier!"
    }
}


