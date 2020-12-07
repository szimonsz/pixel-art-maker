const color = document.getElementById('pixelCanvas');
const log = document.getElementById('log');

sizePicker.addEventListener('submit', makeGrid);

function makeGrid(event) {
    let gridH = Number(document.getElementById('inputHeight').value);
    let gridW = Number(document.getElementById('inputWidth').value);

    event.preventDefault();

    function addTable() {
        let t = document.getElementById('pixelCanvas');
        while (t.hasChildNodes())
            t.removeChild(t.firstChild);

        for (let i = 0; i < gridH; i++) {
            let newTR = t.insertRow(i);
            for (let j = 0; j < gridW; j++) {
                let newTD = newTR.insertCell(j);
                color.addEventListener('click', addColor)
            }
        };
    }
    addTable();
}

function addColor(event) {
    event.target.style.backgroundColor = colorPicker.value;
}

//In order to be able to create this project I have used the following websites:
// - https://code-maven.com/
// - https://developer.mozilla.org/en-US/
// - https://stackoverflow.com/
// - https://www.w3schools.com/
// - https://knowledge.udacity.com/
