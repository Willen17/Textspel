// Anropar main funktionen när sidan laddats in
window.onload = main; 

function main () {
    addEventListeners();
}

// State

// Hämtar element ur HTML:en
function addEventListeners() {
    const startButton = document.getElementById('startButton');
    startButton.onclick = startGame;

    const storyBox = document.getElementById('storyBox');

    const inputBox = document.getElementById('inputBox');

    const choicesBox = document.getElementById('choicesBox');

    const inventory = document.getElementById('inventory');
}


function startGame() {
   startButton.remove();
   storyBox.style.display = 'unset';
   inputBox.style.display = 'unset';
   inventory.style.display = 'unset';
}

document.getElementById('myButton').onclick = function() {
    const myName = document.getElementById('myText').value;
    inputBox.style.display = 'none';
   
    const textField = document.querySelector('#storyBox >p');
    textField.innerHTML = 'Anyways... Once upon a time there was a plumber from italy named ' + myName + '. ' + myName + 'was not like any other plumber';
    setTimeout(function() {textField.innerHTML = 'test'}, 10000)

}