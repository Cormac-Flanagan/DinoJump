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
    var characterTop =
        parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft =
        parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft < 85 && blockLeft > 60 && characterTop >=130){
        block.style.animation = "none"
        block.style.display = "none"
        alert("U Lose")
    }
}, 10);

setInterval(function () {
    score++;
    document.getElementById("Score").innerHTML = score
}, 100);
