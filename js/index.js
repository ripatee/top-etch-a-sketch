function createDivs(x, y, container) {
    for(let i = 0; i<x; i++){
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j<y; j++) {
            let column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
        }
        container.appendChild(row)
    }
}

let container = document.querySelector(".container");
createDivs(16, 16, container);