var release = setInterval(releaseMove, 5000)
var running = false;


function myMove() {
    running = true;
    var elem = document.getElementById("regCactus");
    var pos = 600;
    var id = setInterval(frame,5);
    function frame() {
        if (pos <= 5) {
            clearInterval(id);
            document.getElementById("regCactus").style.visibility = 'hidden';
            running = false;
        } else {
            pos -= 2;
            elem.style.left = pos + "px";
            document.getElementById("Debug").innerHTML = running;
        }
    }
}

function releaseMove() {
    if (running === false) {
        document.getElementById("regCactus").style.visibility = 'visible';
        myMove();
    }
}