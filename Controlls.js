var character =
    document.getElementById("character");
var block = document.getElementById("block");
var score = 0;
document.addEventListener('keypress', jump);

function jump(e) {
    if (character.classList != "animate" && e.code == "Space") {
        character.classList.remove("run")
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate")
        character.classList.add("run")
    }, 500)
}

var checkDead = setInterval(function() {
    rect1 = document.getElementById("character").getBoundingClientRect()
    rect2 = document.getElementById("block").getBoundingClientRect()

    var overlap = !(rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom)
    document.getElementById("Debug").innerHTML = overlap

    if(overlap === true){
        block.style.animation = "none"
        block.style.display = "none"
        alert("U Lose")
    }
}, 10);

setInterval(function () {
    score++;
    document.getElementById("Score").innerHTML = score
}, 100);

