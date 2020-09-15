var character =
    document.getElementById("character");
var medCactus = document.getElementById(`enemy`);
var score = 0;
document.addEventListener('keypress', changeStance);
var gameRunning = false;
var jumping = false;
var crouching = false;
function changeStance(e) {
    gameRunning = true
    if (character.classList !== "animate" && e.code === "Space" && jumping === false) {
        jumping = true;
        character.classList.remove("run");
        character.classList.add("animate");
    }
    if (character.classList !== "crouch" && e.code === "KeyC" && crouching === false && jumping === false) {
        crouching = true;
        character.classList.remove("run");
        character.classList.add("crouch");
    }
    setTimeout(function(){
        character.classList.remove("animate");
        character.classList.remove("crouch");
        character.classList.add("run");
        jumping = false;
        crouching = false;
    }, 500)
}

var checkDead = setInterval(function() {
    cactus1 = document.getElementById(`enemy`)
    rect1 = document.getElementById("character").getBoundingClientRect()
    rect2 = cactus1.getBoundingClientRect()

    var overlap = !(rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom)

    if(overlap === true){
        medCactus.style.animation = "none"
        medCactus.style.display = "none"
        alert("U Lose")
    }
}, 10);

setInterval(function () {
    if (gameRunning) {
        score++;
        if (running === false){
            releaseMove();
        }
    }
    document.getElementById("Score").innerHTML = score
}, 100);

