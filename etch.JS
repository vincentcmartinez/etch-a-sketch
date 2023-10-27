const grid = document.querySelector("#grid");
const gridHeight = grid.clientHeight;
let gridwidth = 16;

function populateGrid() {
    for(let i = 0; i < gridwidth*gridwidth; i++) {
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "blankSquare");
        newDiv.setAttribute("id", `square${i}`);
        newDiv.style.backgroundColor = "rgb(255,255,255)";
        newDiv.style.maxWidth = gridHeight/gridwidth + "px";
        newDiv.style.maxHeight = gridHeight/gridwidth + "px";
        newDiv.style.minWidth = gridHeight/gridwidth + "px";
        newDiv.style.minHeight = gridHeight/gridwidth + "px";
        newDiv.style.flex = 1;
        grid.appendChild(newDiv);
        
        
    }
    let squares = document.querySelectorAll("div.blankSquare");
    for(let square of squares) {
            square.addEventListener("mouseover",function() 
            {
               draw(square);
            });
        }
}

function draw(element) {
    let color = element.style.backgroundColor;
    let rawColor = color.slice(4,color.length-1);
    let processed = rawColor.split(',');
    processed[1] = processed[1].slice(1);
    processed[2] = processed[2].slice(1);
    element.style.backgroundColor = `rgb(${Number(processed[0]-25.5)},${Number(processed[1]-25.5)},${Number(processed[2]-25.5)})`
}


function repopulateGrid() {
    clear();
    let squares = document.querySelectorAll("div.blankSquare");
    for(let square of squares) {
        grid.removeChild(square);
    }
    populateGrid();

}

function clear() {
    let squares = document.querySelectorAll("div.blankSquare");
    for(let square of squares) {
        square.style.backgroundColor = "rgb(255,255,255)";
    }
}

populateGrid();
const input = document.querySelector("input");

input.addEventListener("keydown",function(event) { 
    console.log(event.key);
    if(event.key === "Enter") {
        if(input.value < 100) {
            gridwidth = Number(input.value);
        }
        else {
            gridwidth = 100;
        }
        
        repopulateGrid(); 
    }
     
    });

const button = document.querySelector("#clearButton");
button.addEventListener("click",function(e) {clear()});
