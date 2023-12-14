let container = document.getElementById("container");

for(let i = 0; i < 16; i++){   
    for(let j = 0; j < 16; j++){
        let gridItems = document.createElement("div");
        gridItems.innerHTML = 1;
        gridItems.className = "gridItems";
        container.appendChild(gridItems);
    }
    let lineBreak = document.createElement("div");
    lineBreak.style.flex = '0 0 100%';
    container.appendChild(lineBreak);
}