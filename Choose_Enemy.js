var cacCount = 0;
var c = 1;
var lastRelease = 0;
var liveframe = 0;
var currentObject = []

class enemy {
    constructor(enemyID) {
        this.enemyID = enemyID
        this.enemyPos = 600
        if (3 + score/10000 < 3.5) {
            this.speed = 3 + score/8000;
        } else {
            this.speed = 3.5
        }


    }

    create(){
        let deadly = document.getElementById("deadly1");
        var newguy = document.createElement("div");
        newguy.setAttribute("id", "enemy" + this.enemyID.toString());
        deadly.append(newguy);
        this.elem = document.getElementById(`enemy`+ this.enemyID.toString());
    }

    movement() {
        return this.enemyPos -= this.speed
    }

    setType(){
        this.enemyType = Math.floor(Math.random(0) * Math.floor(3));
        var x, y;
        switch (this.enemyType) {
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
        var i;
        for (i in y) {
            this.elem.classList.remove(i);
        }
        this.elem.classList.add("standard");
        this.elem.classList.add(x);
    }



    kill(){
        this.elem.remove()
    }

}


function releaseMove() {
    var setRealease = Math.floor(Math.random() * 1500) + 10;
    setTimeout(function() {
        if (cacCount <= 2 && score-lastRelease >= 80) {
            lastRelease = score;
            stopLoop = true;
            cacCount++;
            let Obstacle = new enemy(cacCount)
            if (document.getElementById('enemy' + cacCount.toString()) === null ) {
                Obstacle.create()
                Obstacle.setType()
            }
        currentObject.push(Obstacle)
        }
    }, setRealease)
}

function moveObjects() {

    for (objects = 0; objects <= currentObject.length; objects++) {
        if (!(currentObject[objects] === undefined)){
            let pos = currentObject[objects].movement()
            let ID = currentObject[objects].enemyID
            if (currentObject[objects].enemyPos < 5) {
                currentObject[objects].kill()
                cacCount--
                let index = currentObject.indexOf(objects)
                if (index > -1){
                    currentObject.splice(index, 1)
                }

            } else {
                document.getElementById('enemy' + ID.toString()).style.left = pos.toString() + "px"
            }


        }

    }
}