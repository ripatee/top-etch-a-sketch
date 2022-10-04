function createDivs(x, y) {
    for(let i = 0; i<x; i++){
        let row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j<y; j++) {
            let column = document.createElement("div");
            column.classList.add("column");
            column.addEventListener("mousedown", () => {
                column.classList.add("hover");
            })
            row.appendChild(column);
        }
        container.appendChild(row)
    }
}
let size = 16;

let container = document.querySelector(".container");
let sizeBtn = document.querySelector(".size");

sizeBtn.addEventListener("click", () => {
    // Update size of the grid
    size = prompt("Size of the grid:", 16);
    while (container.firstChild){
        container.firstChild.remove();
    }
    createDivs(size, size);
});

createDivs(size, size);
