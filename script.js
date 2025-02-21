
const container = document.querySelector("#container")
const btn = document.querySelector("#btn");

function newGrid(row, column){
    container.innerHTML ="";
    for (let i = 0; i < row * column; i++){
        const div = document.createElement("div");
        div.classList.add("grid-item");
        div.style.width = `${100 / column}%`;
        div.style.height = `${100 / row}%`;

        container.appendChild(div);
    }
}

newGrid(16,16);

