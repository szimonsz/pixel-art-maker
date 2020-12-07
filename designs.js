const color = document.getElementById('pixelCanvas');
const log = document.getElementById('log');


sizePicker.addEventListener('submit', makeGrid);
pixelCanvas.addEventListener('click', addColor); //performance optimalisation


function makeGrid(event) {
    const gridH = Number(document.getElementById('inputHeight').value);//using input for number of rows to be created
    const gridW = Number(document.getElementById('inputWidth').value);//using input for number of columns to be created

    event.preventDefault();

    function addTable() {
        const t = document.getElementById('pixelCanvas');
        while (t.hasChildNodes())//checks for content and if there's any - clears it 
            if (t.innerHTML !== null)
                t.removeChild(t.firstChild);

        for (let i = 0; i < gridH; i++) {
            let newTR = t.insertRow(i); 
            for (let j = 0; j < gridW; j++) {
                let newTD = newTR.insertCell(j);
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
