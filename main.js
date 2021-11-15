// Anropar main funktionen när sidan laddats in
// window.onload = main; 

function main () {
    addEventListeners()
}

// Hämtar element ur HTML:en
function addEventListeners() {

}

document.getElementById('myButton').onclick = function() {
    const myName = document.getElementById('myText').value;
    console.log('Hey', myName);
}