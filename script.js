
const container = document.querySelector("#container")
const btn = document.querySelector("#btn");

//This function creates a new grid given by the user dimensions input and creating
//equal rows and columns.
function newGrid(row, column){
    container.innerHTML ="";
    for (let i = 0; i < row * column; i++){
        const div = document.createElement("div");
        div.classList.add("grid-item");
        div.style.width = `${100 / column}%`;
        div.style.height = `${100 / row}%`;

        container.appendChild(div);
        hoverEffect(div);
    }
}

//This changes the div color when the mouse hovers over the grid item.
function hoverEffect(div) {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'black';
        div.style.color ='white'
    });
}

//This takes in user input for the rows and columns of grids.
btn.addEventListener("click", () => {
    let row = parseInt(prompt("Enter the number of rows and columns: "));
    let column = row;
    if(row > 0 && row < 100){
        newGrid(row, column);
    } else {
        alert("Enter valid numbers!");
    }
});

//Standard grid of 16 by 16
newGrid(16, 16);

