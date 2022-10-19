//Functions that will move character with each key stroke(and what direction)
function move(element){
    element.style.position = 'fixed'

function moveToPlaces(left, bottom) {
    element.style.bottom = bottom + 'px'
    element.style.left = left + 'px'
}
function movewitharrowKeys(left,bottom,callback){
    let direction = null;
    let y = bottom;
    let x = left;
    element.style.bottom = y + 'px'
    element.style.left = x + 'px'
 function movePlayer(){
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
    setInterval(movePlayer,1)
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
