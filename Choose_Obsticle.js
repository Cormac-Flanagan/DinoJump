var running = false;
var cacCount = 0;
function myMove() {
    cacCount ++;
    var elem = document.getElementById(`enemy`);
    randomType(elem, 0, 2);
    var pos = 600;
    var id = setInterval(frame,5);
    function frame() {
        if (pos <= 10) {
            elem.style.visibility = 'hidden';
        } else {
            elem.style.visibility = 'visible';
        }
        if (pos <= 5) {
            clearInterval(id);
            running = false;
            cacCount = 0;
        } else {
            pos -= (2 + score/300);
        }
        elem.style.left = pos + "px";
    }
}

function releaseMove() {
    if (running === false) {
        running = true;
        setTimeout(function() {
            var release = myMove();
        }, 10*Math.floor((Math.random() * 100) + 10));
    }
}

function randomType(changed, enMintype, enMaxtype) {
    var Enemy_Type = Math.floor(Math.random(enMintype) * Math.floor(enMaxtype+1));
    var x, y;
    switch (Enemy_Type) {
        case 0:
            x = "regCactus";
            y = ["highPterodactyl", "midPterodactyl"];
            break
        case 1:
            x = "highPterodactyl";
            y = ["regCactus", "midPterodactyl"];
            break
        case 2:
            x = "midPterodactyl";
            y = ["regCactus", "highPterodactyl"]
    }
    for (i of y) {
        changed.classList.remove(i);
    }
    changed.classList.add(x);
}

