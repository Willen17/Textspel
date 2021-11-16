

// Anropar på main funktionen när sidan laddats in

window.onload = main;

// State
const scenes = [{
    location: 'Start',
    text: 'Hello bla bla bla.',
    nextScene: [1, 5,],
    amountOfButtons: [doorOne, doorTwo]
}, 

{
    location: 'Start > Door One',
    text: 'You entered door one bla bla',
    nextScene: [0, 2, 3, 4],
    amountOfButtons: [doorStart, doorLeft, doorMiddle, doorRight],
    items: ['']
}, {
    location: 'Start > Door One > Door to the left',
    text: 'Theres no key in here',
    nextScene: [1],
    amountOfButtons: [doorOne],
    items: ['']
}, {
    location: 'Start > Door One > Door in the middle >',
    text: 'You entered the door in the middle and found a key!',
    nextScene: [1],
    amountOfButtons: [doorOne],
    items: ['Key']
}, {
    location: 'Start > Door One > Door to the right',
    text: 'Theres no key in here',
    nextScene: [1],
    amountOfButtons: [doorOne],
    items: ['']
}, 

{
    location: 'Start > Door Two',
    text: 'You used the key to get in, welcome',
    nextScene: [6, 10],
    amountOfButtons: [otherDoor, bowserDoor],
    items: ['']
},

{
    location: 'Start > Door Two > The other door(6)',
    text: 'Theres three more doors in here',
    nextScene: [5, 7, 8, 9],
    amountOfButtons: [doorTwo, blueDoor, greenDoor, redDoor],
    items: ['Picture of a zeppelin']
}, {
    location: 'Start > Door Two > The other door > Blue door(7)',
    text: 'You found a picture (Stairway)',
    nextScene: [6],
    amountOfButtons: [doorTwo],
    items: ['Stairway']
}, {
    location: 'Start > Door Two > The other door > Green door 2(8)',
    text: 'You found a picture (Number 2)',
    nextScene: [6],
    amountOfButtons: [doorTwo],
    items: ['PictureOfNumberTwo']
}, {
    location: 'Start > Door Two > The other door > Red Door 3(9)',
    text: 'You found a picture (Heaven)',
    nextScene: [6],
    amountOfButtons: [doorTwo],
    items: ['Heaven']
}, 

{
    location: 'Start > Door Two > Bowsers door',
    text: 'Peach: Thank you for saving me! My hero!',
    nextScene: ['']
}, 
];

// Start av programmet
function main() {
     addEventListener();
    
 }


// Hämtar element ur HTML:en
 function addEventListener() {
    const startButton = document.getElementById('startButton');
    startButton.onclick = firstPage;
    
    const locationDiv = document.getElementById('location');
    const location = document.querySelector('#location > p').innerHTML;
   
    const storyBox = document.getElementById('storyBox');
    const storyText = document.querySelector('#storyBox > p').innerHTML;
    
    inputContainer = document.getElementById('inputBox');
    const inputLabel = document.querySelector('#inputBox > label').innerHTML;

    const inputButton = document.getElementById('myButton');
    inputButton.onclick = getInputValue;
 }

// Funktioner
 function firstPage() {
     startButton.remove();
     storyBox.style.display = 'unset';
     inputContainer.style.display = 'unset';        
 }

 function getInputValue() {
    inputValue = document.getElementById('myText').value;
    setTimeout(function() {storyText.style.innerHTML('Uppdaterad text')}, 5000);

 }