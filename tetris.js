const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const mapWidth = 400;
const mapHeight = 800;
const mapPadding = 10;

const mapBlockWidth = 9;
const mapBlockHeight = 18;

function drawMap(){    
    for (let x = 0; x <= mapWidth * 2 + 1; x+= mapHeight/mapBlockHeight) {
        ctx.moveTo(mapPadding, x + mapPadding);
        ctx.lineTo(mapWidth + mapPadding, x + mapPadding);       
    }

    for (let y = 0.5; y <= mapHeight / 2 + 1; y+= mapWidth/mapBlockWidth) {
        ctx.moveTo(y + mapPadding, mapPadding);
        ctx.lineTo(y + mapPadding, mapHeight + mapPadding);       
    }
    
}

drawMap();

ctx.strokeStyle = "black";
ctx.stroke();

    drawMap();

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