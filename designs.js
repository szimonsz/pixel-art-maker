let color = document.getElementById('pixelCanvas');
let log = document.getElementById('log');

sizePicker.addEventListener('submit', makeGrid);

function makeGrid(event) {
  let gridH = Number(document.getElementById('inputHeight').value);
  let gridW = Number(document.getElementById('inputWidth').value);

  event.preventDefault();

  function addTable() {
    let t = document.getElementById('pixelCanvas');
    while(t.hasChildNodes())
       t.removeChild(t.firstChild);

    for (let i = 0; i < gridH; i++) {
      let newTR = t.insertRow(i);
      for (let j = 0; j < gridW; j++ ){
        let newTD = newTR.insertCell(j);
      color.addEventListener('click', addColor)
      }
    };
  }
addTable();
}

//Color picker code desing from Udacity Knowledge Q&A Platform.
function addColor(event) {
  event.target.style.backgroundColor = colorPicker.value;
}
