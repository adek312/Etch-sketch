const container = document.getElementById("container");

function newGrid(){
    let size = prompt("enter new grid size (max 100)");
    let container = document.getElementById("container");
    container.innerHTML = "";
    for(let i = 0; i < size; i++){   
        for(let j = 0; j < size; j++){
            let gridItems = document.createElement("div");
            gridItems.className = "gridItems";
            container.appendChild(gridItems);
        }
        let lineBreak = document.createElement("div");
        lineBreak.style.flex = '0 0 100%';
        container.appendChild(lineBreak);
    
        let gridItems = document.querySelectorAll('.gridItems');
        gridItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = 'red';
            });
        });
    }
}

function erase(){
    let gridItems = document.querySelectorAll('.gridItems');
    gridItems.forEach(item => {  
        item.style.backgroundColor = '';
    });
}