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