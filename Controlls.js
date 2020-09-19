var character =
    document.getElementById("character");
var medCactus = document.getElementById(`enemy`);
var score = 0;
document.addEventListener('keypress', changeStance);
var gameRunning = false;
function changeStance(e) {
    gameRunning = true
    if (character.classList !== "animate" && e.code === "Space") {
        character.classList.remove("run");
        character.classList.add("animate");
    }
    if (character.classList !== "crouch" && e.code === "KeyC") {
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
    var colBox = 0;
    while (colBox < cacCount) {
        colBox++
        console.log(colBox)
        let character = document.getElementById("character")
        var cactus1 = document.getElementById(`enemy` + colBox.toString());
        var enBox = cactus1.getBoundingClientRect();
        var charRec = character.getBoundingClientRect();
        var overlap = !(enBox.right < charRec.left ||
            enBox.left > charRec.right ||
            enBox.bottom < charRec.top ||
            enBox.top > charRec.bottom)

        if (overlap === true) {
            cactus1.style.animation = "none";
            cactus1.style.display = "none";
            character.classList.add("dead")
            alert("U Lose")
        }
    }
}, 10);

setInterval(function () {
    if (gameRunning) {
        score++;
        releaseMove();
    }
    document.getElementById("Score").innerHTML = score
}, 100);

