document.addEventListener('keydown', moveBlock);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const mapWidth = 400;
const mapHeight = 800;
const mapPadding = 10;
let map = [];

const blockWidth = 9;
const blockHeight = 18;
const blockPadding = mapHeight/blockHeight;

const mapMiddleBlockPosition = blockPadding * (blockWidth - 1) / 2 ;

const keyCodes = {LEFT: 37, RIGHT: 39, DOWN: 40}

let position = -1;
let blockPositionX = mapMiddleBlockPosition;
let blockPositionY = -1;
let randomBlock = 0;

let gameSpeed = 8;

class Block {
    constructor(x, color, template){
        this.x = x;
        this.color = color;
        this.template = template;
    }
}
const blocks = [
    new Block(0, "blue", [
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0],
    ]),

    new Block(0, "orange", [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1],
    ]),

    new Block(0, "purple", [
        [0, 0, 0],
        [0, 1, 0],
        [1, 1, 1],
    ]),

    new Block(0, "yellow", [
        [0, 0, 0],
        [1, 1, 0],
        [1, 1, 0],
    ]),

    new Block(0, "green", [
        [0, 0, 0],
        [0, 1, 1],
        [1, 1, 0],
    ]),

    new Block(0, "red", [
        [0, 0, 0],
        [1, 1, 0],
        [0, 1, 1],
    ])
]

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
    moveBlock();  
}

function createMapGrid(){
    for (let x = 0; x < blockWidth; x++) {
        for (let y = 0; y < blockHeight; y++) {
           addGridCoordinates(x,y)
            
        }
        
    }

}

function addGridCoordinates(x, y){
    map[x] = map[x] || [];
    map[x][y] = x + ';' + y;

}

function moveBlock(event){
    let e = event.keyCode;
    if (e == keyCodes.LEFT) {
        blockPositionX = blockPositionX - blockPadding
    }

    if (e == keyCodes.RIGHT) {
        blockPositionX =  blockPositionX + blockPadding
    }
}

function getRandomBlockShape(){
    return Math.floor(Math.random() * blocks.length);
}

function getBlockTemplate(){ 
    const block = blocks[randomBlock].template;
        for (let template = 0; template < block.length; template++) { 
            const element = blocks[randomBlock].template[template];
                for (let templateArrayIndex = 0; templateArrayIndex < element.length; templateArrayIndex++) {
                    if(blocks[randomBlock].template[template][templateArrayIndex] > 0){         
                        drawShapeFromTemplate(templateArrayIndex  * blockPadding - blockPadding, template * blockPadding - blockPadding * 2, blocks[randomBlock].color)
                    }                 
                
                }  
            
            }
        
}

function addCurrentBlock(block){
                 
}

function drawShapeFromTemplate(x, y, color){
    ctx.fillStyle = color;
    ctx.fillRect(mapPadding + 0.5 + x + blockPositionX, mapPadding + 0.5 + y + blockPositionY, blockPadding, blockPadding);
}

function updateMap(){   

    checkBlockPosition();

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    position++;
    blockPositionY = position * blockPadding;
    getBlockTemplate();
    drawMap();
    
}

function checkBlockPosition(){
    if (position >= blockHeight - 1) {
        position = -1;

        blockPositionX = mapMiddleBlockPosition
        randomBlock = getRandomBlockShape();
    }
}

createMapGrid();
console.log(map[8]);
gameLoop();



