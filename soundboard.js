

var sound1 = new Audio("boing_x.wav");
var buttonElement1 = document.getElementById('boing')
buttonElement1.addEventListener('click', function() {
    sound1.play()
})
buttonElement1.addEventListener('mouseenter', function() {
    sound1.play()
})



var sound2 = new Audio("can_pop.wav");
var buttonElement2 = document.getElementById('pop')
buttonElement2.addEventListener('click', function() {
    sound2.play()
})
buttonElement2.addEventListener('mouseenter', function() {
    sound2.play()
})


var sound3 = new Audio("bomb_x.mp3.wav");
var buttonElement3 = document.getElementById('boom')
buttonElement3.addEventListener('click', function() {
    sound3.play()
})
buttonElement3.addEventListener('mouseenter', function() {
    sound3.play()
})


