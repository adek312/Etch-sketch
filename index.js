const container = document.getElementById("container");


for(let i = 0; i < 16; i++){   
    for(let j = 0; j < 16; j++){
        let gridItems = document.createElement("div");
        gridItems.className = "gridItems";
        container.appendChild(gridItems);
    }
    let lineBreak = document.createElement("div");
    lineBreak.style.flex = '0 0 100%';
    container.appendChild(lineBreak);
}


const gridItems = document.querySelectorAll('.gridItems');

gridItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
    item.style.backgroundColor = 'red';
    });

    item.addEventListener('mouseleave', () => {
    item.style.backgroundColor = '';
    });
});