<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript</title>
</head>

var sound1 = new Audio("boing_x.wav");
var sound4 = new Audio("boing_poing.wav");
var buttonElement1 = document.getElementById('boing')
buttonElement1.addEventListener('click', function() {
    sound1.play()
})
buttonElement1.addEventListener('mouseenter', function() {
    sound4.play()
})



var sound2 = new Audio("can_pop.wav");
var sound5 = new Audio("cork_pop_x.wav");
var buttonElement2 = document.getElementById('pop')
buttonElement2.addEventListener('click', function() {
    sound2.play()
})
buttonElement2.addEventListener('mouseenter', function() {
    sound5.play()
})


var sound3 = new Audio("bomb_x.mp3.wav");
var sound6 = new Audio("croc_chomp_x.wav");
var buttonElement3 = document.getElementById('boom')
buttonElement3.addEventListener('click', function() {
    sound3.play()
})
buttonElement3.addEventListener('mouseenter', function() {
    sound6.play()
})


