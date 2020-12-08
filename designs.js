const color = document.getElementById('pixelCanvas');
const log = document.getElementById('log');


sizePicker.addEventListener('submit', makeGrid);
pixelCanvas.addEventListener('click', addColor); //performance optimalisation

//creates an HTML table with the dimensions set by user.
function makeGrid(event) {
    //using input for number of rows to be created
    const gridH = Number(document.getElementById('inputHeight').value);
    //using input for number of columns to be created
    const gridW = Number(document.getElementById('inputWidth').value);
    
    event.preventDefault();

    function addTable() {
        const table = document.getElementById('pixelCanvas');
        while (table.hasChildNodes())//checks for content and if there's any - clears it 
            if (table.innerHTML !== null)
                table.removeChild(table.firstChild);

        for (let i = 0; i < gridH; i++) {
            const newTR = table.insertRow(i); 
            for (let j = 0; j < gridW; j++) {
                const newTD = newTR.insertCell(j);
            }
        };
    }
    addTable();
}


function addColor(event) {
    if (event.target.nodeName === 'TD')
        event.target.style.backgroundColor = colorPicker.value;//using the value of the color picker, can be changed
}


//In order to be able to create this project I have used the following websites:
// - https://code-maven.com/
// - https://developer.mozilla.org/en-US/
// - https://stackoverflow.com/
// - https://www.w3schools.com/
// - https://knowledge.udacity.com/
// - Thanks for my Udacity reviewer for insightful comments and recommendations!
