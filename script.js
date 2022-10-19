let greenGuy = document.createElement('img')
greenGuy.src="assets/green-guy/green-character.gif"
greenGuy.style.position = "fixed"
greenGuy.style.bottom = "100px"
greenGuy.style.left = "100px"
document.body.append(greenGuy)

//Images to go with movement
const player = newGif('assets/green-guy/static.gif')
function directionChange(direction){
    if(direction === null){
        player.src="assets/green-guy/static.gif"
    }
    if(direction === "north"){
        player.src = "assets/green-guy/north.gif"
    }
    if(direction === "south"){
        player.src = "assets/green-guy/south.gif"
    }
    if(direction === "east"){
        player.src = "assets/green-guy/east.gif"
    }
    if(direction === "west"){
        player.src = "assets/green-guy/west.gif"
    }
}
move(player).witharrowKeys(100,250, directionChange)
let direction = null;
let y = 250;
let x = 100;
setInterval(function(){
    if(direction === "north"){
        y = y + 1
    }
    if(direction === "south"){
        y = y - 1
    }
    if(direction === "east"){
        x = x + 1
    }
    if(direction === "west"){
        x = x - 1
    }
    player.style.bottom = y + 'px'
    player.style.left = x + 'px'
},1)


//Functions that will move character with each key stroke(and what direction)
function move(element){
    element.style.position = 'fixed'
function moveToPlaces(left,bottom){
    element.style.bottom = y + 'px'
    element.style.left = x + 'px'
}
function movewitharrowKeys(left,bottom,callback){
    let direction = null;
    let y = bottom;
    let x = left;
    element.style.bottom = y + 'px'
    element.style.left = x + 'px'
    function moveCharacter(){
        if(direction==="north"){
            y+=1
        }
        if(direction==="south"){
            y-=1
        }
        if(direction==="east"){
            x+=1
        }
        if(direction==="west"){
            x-=1
        }
        element.style.bottom = y + 'px'
        element.style.left = x + 'px'
    }
    setInterval(moveCharacter,1)
    document.addEventListener('keydown',function(e){
        if(e.repeat) return;
        if(e.key === "ArrowUp"){
            direction = "north"
        }
        if(e.key === "ArrowDown"){
            direction = "south"
        }
        if(e.key === "ArrowRight"){
            direction = "east"
        }
        if(e.key === "ArrowLeft"){
            direction = "west"
        }
        callback(direction)
    })
    document.addEventListener("keyup",function(e){
    direction = null
    callback(direction)
    })
    }
    return{
    to: moveToPlaces,
    withkeys:movewitharrowKeys
    }
}
