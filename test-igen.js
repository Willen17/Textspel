window.onload = addEventListener;

// Globala
const textElement = document.getElementById('storyBox');

const choiceButtons = document.getElementById('choicesBox');

const inputContainer = document.getElementById('inputBox');
const inputLabel = document.querySelector('inputBox > label');
const inputButton = document.getElementById('myButton');

const inventory = document.getElementById('inventory');

const currentLocation = document.getElementById('location');



//State
let state = {};
let userName = {}; 




function addEventListener() {
    const startButton = document.getElementById('startButton');
    startButton.onclick = startGame;

    inputButton.onclick = getInputValue;

}



function startGame() {
    startButton.remove();
    textElement.style.display = 'unset';
    inputContainer.style.display = 'unset';
}

function getInputValue() {
    let userName = document.getElementById('myText').value;
    inputContainer.style.display = 'none';
    choiceButtons.style.display = 'unset';
    inventory.style.display = 'unset';
    state = {};
    showTextNode(1);
}

function showTextNode(textNodeIndex) {
    const textNode = scenes.find(textNode => scenes.id === textNodeIndex);
    textElement.innerText = textNode.text;

    // const findScene = scenes.find(function currentText(currentScene) {return scenes.id === textNodeIndex;});

}

function selectChoice(choice) {

}


const scenes = [
    {
        id: 1,
        text: 'Anyways... Once upon a time there was a plumber from italy named ' + userName +'.',
        choices: [
            {
                text: 'Continue',
                nextText: 2
            }
        ]
    },
    {
        id: 2, 
        text: userName + ' wasn’t like any other plumber. He had an ever recurring feud with a turtle named... BOWSER!',
        choices: [
            {
                text: 'Continue',
                nextText: 3
            }
        ]

    },
    {
        id: 3,
        text: 'This time BOWSER had taken it way too far. He had hit ' + userName + ' where he knew it would hurt him...',
        choices: [
            {
                text: 'Continue',
                nextText: 4
            }
        ]
    },
    {
        id: 4,
        text: 'Bowser had kidnapped his ever loving wife... PEACH.',
        choices: [
            {
                text: 'OH NO!',
                nextText: 5
            }
        ]
    },
    {
        id: 5,
        text: 'Can ' + userName + ' defeat BOWSER and save his dear wife, Peach?',
        choices: [
            {
            text: "Begin " + userName +"'s adventure!",
            nextText: 6
            }
        ]
    },
    {
        id: 6,
        text: 'You find yourself in a castle with two doors ahead of you. Which door do you choose, door one or two?',
        choices: [
            {
                text: 'Door One.',
                nextText: 7
            },
            {
                text: 'Door Two.',
                nextText: 11
            }
        ]
    },

]
