var cacCount = 0;
var deadEn = 0;
var stopLoop = false;
var elmPos = {
    enemy1: 600,
    enemy1spe: 2,
};
var lastRelease = 0;
function releaseOb(enNum) {
    var newguy = document.createElement("div");
    newguy.setAttribute("id", "enemy" + enNum.toString());
    let deadly = document.getElementById("deadly1");
    deadly.append(newguy);
    var elem = document.getElementById(`enemy`+ cacCount.toString());
    randomType(elem, 0, 2);

    var meantPos;
    var c = 0;
    while (c < cacCount) {
        c++
        var id = setInterval(frame,5);
        var enID = `enemy` + c.toString()
        var elems = document.getElementById(enID);
        elmPos[enID] = 600;
        elmPos[enID + "spe"] = 2 + score/500;
    }

    function frame(string) {
        meantPos = elems.style.left.replace('px','');
        meantPos = Math.floor(meantPos);
        var ID = elems.id;
        var pos = elmPos[ID];
        if (pos <= 10) {
            elems.style.visibility = 'hidden';
        } else {
            elems.style.visibility = 'visible';
        }
        if (pos <= 5) {
            clearInterval(id);
            elems.remove()
            deadEn++
            cacCount--
        } else {
            pos -= (elmPos[ID + "spe"]);
        }
        elmPos[ID] = Math.floor(pos);
        elems.style.left = pos + "px";
        document.getElementById("Debug").innerText = pos;
    }
}

function releaseMove() {
    var setRealease = Math.floor(Math.random() * 1500) + 1000;
    console.log(setRealease);
    setTimeout(function() {
        if (cacCount <= 2 && score-lastRelease >= 10) {
            lastRelease = score;
            stopLoop = true;
            cacCount++;
            var release = releaseOb(cacCount);
        }
    }, setRealease)
}

function randomType(changed, enMintype, enMaxtype) {
    changed.classList.add("standard");
    var Enemy_Type = Math.floor(Math.random(enMintype) * Math.floor(enMaxtype+1));
    var x, y;
    switch (Enemy_Type) {
        case 0:
            x = "regCactus"
            y = ["highPterodactyl", "midPterodactyl"]
            break
        case 1:
            x = "highPterodactyl"
            y = ["regCactus", "midPterodactyl"]
            break
        case 2:
            x = "midPterodactyl"
            y = ["regCactus", "highPterodactyl"]
    }
    for (i of y) {
        changed.classList.remove(i);
    }
    changed.classList.add(x);
}

