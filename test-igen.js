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
var userName;





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
    var userName = document.getElementById('myText').value;
    inputContainer.style.display = 'none';
    choiceButtons.style.display = 'unset';
    inventory.style.display = 'unset';
    state = {};
    showTextNode(1);
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex); //This function returns the first matching element, in this example, the id that matches the index.
    textElement.innerText = textNode.text;

    while (choiceButtons.firstChild) {
        choiceButtons.removeChild(choiceButtons.firstChild); //Tar bort det översta barnet till choiceButtons (alla, då en tas bort, blir en ny firstCHild)
    }

    textNode.choices.forEach(choice => {    //Loopar igenom alla våra choices i objektet, och om det KAN visas upp. Ibland visas bara choices upp om ett state är true.
        if(showChoice(choice)) {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.classList.add('button-choice');
        button.addEventListener('click', () => selectChoice(choice)); //Gör knappen klickbar. 
        choiceButtons.appendChild(button);  //Lägger till knappen som ett barn till choiceButtons
        }
    })

    // const findScene = scenes.find(function currentText(currentScene) {return scenes.id === textNodeIndex;});

}

function showChoice(choice) { 
    return true;

}

function selectChoice(choice) {
    const nextTextNodeId = choice.nextText;
    if (nextTextNodeId === 11 && key === false) {
        textElement.innerText = 'You need a key to enter this room!';
    }
    else {showTextNode(nextTextNodeId);}
    

}


const textNodes = [
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
                requiredState: (currentState) => currentState.key,
                nextText: 11
            }
        ]
    }, {
        id: 7,
        text: 'You entered door One. Here you find three more doors, which one do you enter?',
        choices: [
            {
                text: 'Door to the left',
                nextText: 8

            },
            {
                text: 'Door in the middle',
                nextText: 9
            },
            {
                text: 'Door to the right',
                nextText: 10

            },
            {
                text: 'Go back to previous room.',
                nextText: 6
            }
            
        ]
    }, {
        id: 8,
        text: 'You entered the door to the left. This room is empty. Do you want to go back?',
        choices: [
            {
                text: 'Go back to previous room.',
                nextText: 7
            }
        ]
    }, {
        id: 9,
        text: 'You entered the door in the middle. You found a key! Do you want to go back?',
        choices: [
            {
                text: 'Go back to previous room.',
                nextText: 7
            }
        ]
    }, {
        id: 10,
        text: 'You entered the door to the right. This room is empty. Do you want to go back?',
        choices: [
            {
                text: 'Go back to previous room.',
                nextText: 7
            }
        ]
    }, {
        id: 11,
        text: 'You succesfully used to key to get in! You find two doors once again',
        choices: [
            {
                text: "Go to Bowsers' door(!!!).",
                nextText: 16
            },
            {
                text: 'Go to the other door...',
                nextText: 12
            }
        ]
    }, {
        id: 12,
        text: 'Surprise! You found three more doors! Does it feel like it’s getting repetetive? Ok. I’m sorry. I added a clue to your inventory',
        choices: [
            {
                text: "Go to the blue door",
                nextText: 13
            },
            {
                text: 'Go to the green door',
                nextText: 14
            },
            {
                text: 'Go to the red door',
                nextText: 15
            },
            {
                text: 'Go back to previous room',
                nextText: 11
            }
        ]
    }, {
        id: 13,
        text: 'You entered the blue door. Wow you found a picture! It’s now in your inventory',
        choices: [
            {
                text: 'Go back to previous room',
                nextText: 12
            }
        ]
    }, {
        id: 14,
        text: 'You entered the green door. Wow you found a picture! It’s now in your inventory',
        choices: [
            {
                text: 'Go back to previous room',
                nextText: 12
            }
        ]
    }, {
        id: 15,
        text: 'You entered the red door. Wow you found a picture! It’s now in your inventory',
        choices: [
            {
                text: 'Go back to previous room',
                nextText: 12
            }
        ]
    }, {
        id: 16,
        text: 'Mohahaha! You finally found me. Behind this door i got your precious Peach. I will only let you thru if you guess my favorite song!',
        choices: [
            {
                text: 'Enter favorite song',
                nextText: 17
            }
        ]
    }, {
        id: 17,
        text: 'Peach: Wow you saved me etc etc.',
        choices: [
            {
                text: 'Start over',
                id: -1,
            }
        ]
    }

]
