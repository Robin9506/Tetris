const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const mapWidth = 400;
const mapHeight = 800;
const mapPadding = 10;

const blockWidth = 9;
const blockHeight = 18;
const blockPadding = mapHeight/blockHeight;

let position = -1;

let gameSpeed = 8;

function drawMap(){    
    for (let x = 0.5; x <= mapWidth * 2 + 1; x+= mapHeight/blockHeight) {
        ctx.moveTo(mapPadding, x + mapPadding);
        ctx.lineTo(mapWidth + mapPadding, x + mapPadding);       
    }

    for (let y = 0.5; y <= mapHeight / 2 + 1; y+= mapWidth/blockWidth) {
        ctx.moveTo(y + mapPadding, mapPadding);
        ctx.lineTo(y + mapPadding, mapHeight + mapPadding);       
    }

    ctx.strokeStyle = "black";
    ctx.stroke();
}

function gameLoop(){
    setInterval(updateMap, 1000/gameSpeed)

    
}

function getShape(block){

}

function drawShape(xPosition){
    ctx.fillStyle = "red";
    ctx.fillRect(mapPadding + 0.5, mapPadding + 0.5 + xPosition, blockPadding, blockPadding);
    ctx.fillRect(mapPadding + 0.5 + 44.44, mapPadding + 0.5 + xPosition, blockPadding, blockPadding);
    ctx.fillRect(mapPadding + 0.5 + 44.44, mapPadding + 0.5 + xPosition - 44.44 , blockPadding, blockPadding);
    ctx.fillRect(mapPadding + 0.5 + 44.44, mapPadding + 0.5 + xPosition - 44.44 * 2 , blockPadding, blockPadding);
}

function updateMap(){   

    if (position >= blockHeight - 1) {
        position = -1;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    position++;
    drawShape(position * blockPadding);
    drawMap();
    
}

gameLoop();



class Block {
    constructor(x, y, template){
        this.x = x;
        this.y = y;
        this.template = template;
    }
}
const blocks = [
    new Block(0, 120, [
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0],
    ]),

    new Block(0, 120, [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1],
    ]),

    new Block(0, 120, [
        [0, 0, 0],
        [0, 1, 0],
        [1, 1, 1],
    ]),

    new Block(0, 120, [
        [0, 0, 0],
        [1, 1, 0],
        [1, 1, 0],
    ]),

    new Block(0, 120, [
        [0, 0, 0],
        [0, 1, 1],
        [1, 1, 0],
    ]),

    new Block(0, 120, [
        [0, 0, 0],
        [1, 1, 0],
        [0, 1, 1],
    ])
]