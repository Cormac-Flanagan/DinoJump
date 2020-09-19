var cacCount = 0;
var deadEn = 0;
var stopLoop = false;
function releaseOb(enNum) {
    var newguy = document.createElement("div");
    newguy.setAttribute("id", "enemy" + enNum.toString());
    let deadly = document.getElementById("deadly1");
    deadly.append(newguy);
    document.getElementById("Debug").innerText = cacCount;
    var elem = document.getElementById(`enemy`+ cacCount.toString());
    console.log(elem)
    randomType(elem, 0, 2);
    var pos = 600;
    var meantPos;
    var c = deadEn;
    while (c < cacCount) {
        c++
        console.log(c)
        var id = setInterval(frame,5);
        var elems = document.getElementById(`enemy` + c.toString());
    }

    function frame() {
        meantPos = elems.style.left.replace('px','');
        meantPos = parseFloat(meantPos);
        document.getElementById("Debug").innerText = meantPos;

        if (pos <= 10) {
            elems.style.visibility = 'hidden';
        } else {
            elems.style.visibility = 'visible';
        }
        if (pos <= 5) {
            clearInterval(id);
            elems.remove()
            deadEn ++
        } else {
            pos -= (2 + score/300);
        }
        elems.style.left = pos + "px";
    }
}

function releaseMove() {
    var setRealease = Math.floor(Math.random() * 15000) + 500;
    setTimeout(function() {
        if (stopLoop === false) {
            var i = 0;
            for (; i < 2; i++) {
                cacCount++;
                var release = releaseOb(cacCount);
            }
        }
        else {
            stopLoop = true
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

