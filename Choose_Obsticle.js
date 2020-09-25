var cacCount = 0;
var deadEn = 0;
var stopLoop = false;
var elmPos = {
    enemy1: 600,
    enemy1spe: 2,
};
var c = 1;
var lastRelease = 0;
function releaseOb(enNum) {
    if (document.getElementById('enemy' + cacCount.toString()) === null ) {
        let deadly = document.getElementById("deadly1");
        var newguy = document.createElement("div");
        newguy.setAttribute("id", "enemy" + enNum.toString());
        deadly.append(newguy);
        var elem = document.getElementById(`enemy`+ cacCount.toString());
        randomType(elem, 0, 2);
        var meantPos;
    }

    var id = setInterval(frame,10);
    var enID = `enemy` + enNum.toString()
    var elems = document.getElementById(enID);
    elmPos[enID] = 600;
    elmPos[enID + "spe"] = 3 + score/80000;
    elmPos[enID + "frameId"] = id;


    function frame() {
           c++
        if (c > 3) {
            c = 1;
        }
        enID = `enemy` + c.toString()
        var curElm = document.getElementById(enID);
        meantPos = curElm.style.left.replace('px','');
        meantPos = Math.floor(meantPos);

        var ID = curElm.id;
        var pos = elmPos[ID];
        if (pos <= 10) {
            curElm.style.visibility = 'hidden';
        } else {
            curElm.style.visibility = 'visible';
        }
        if (pos <= 5) {
            clearInterval(elmPos[ID + "frameId"]);
            curElm.remove()
            deadEn++
            cacCount = 0;
        } else {
            pos -= (elmPos[ID + "spe"]);
        }

        elmPos[ID] = Math.floor(pos);
        curElm.style.left = pos + "px";
        document.getElementById("Debug").innerText = elmPos["enemy1spe"];
    }
}

function releaseMove() {
    var setRealease = Math.floor(Math.random() * 1500) + 10;
    console.log(setRealease);
    setTimeout(function() {
        if (cacCount <= 2 && score-lastRelease >= 100) {
            lastRelease = score;
            stopLoop = true;
            cacCount++;
            var release = releaseOb(cacCount);
        }
    }, setRealease)
}

function randomType(changed, enMintype, enMaxtype) {
    changed.classList.add("standard");
    changed.style.left = "600px";
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

