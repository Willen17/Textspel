window.onload = addEventListeners;

// Globala
const textElement = document.getElementById('storyBox');

const choiceButtons = document.getElementById('choicesBox');

const inputContainer = document.getElementById('inputBox');
const inputLabel = document.querySelector('inputBox > label');
const inputButton = document.getElementById('myButton');
const input = document.getElementById('myText');


const inventory = document.getElementById('inventory');
const keyItem = document.getElementById('key');
const zeppelinItem = document.getElementById('zeppelin');
const stairwayHeavenItem = document.getElementById('stairwayHeaven');

const currentLocation = document.getElementById('location');

const songContainer= document.getElementById('songContainer');




//State
let userName = '';
let key = '';
let zeppelin = '';
let stairwayHeaven = '';
let check = '';


function addEventListeners() {
    const startButton = document.getElementById('startButton');
    startButton.onclick = startGame;
    input.addEventListener('input', saveName);
    inputButton.onclick = startRealGame;
    
    
}



function startGame() {
    startButton.remove();
    textElement.style.display = 'unset';
    inputContainer.style.display = 'unset';
}

function saveName(event) {
    userName = event.target.value;
}

function startRealGame() {
    inputContainer.style.display = 'none';
    choiceButtons.style.display = 'unset';
    inventory.style.display = 'flex';
    updateTextNodes();
    showTextNode(1);
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex); //This function returns the first matching element, in this example, the id that matches the index.
    textElement.innerText = textNode.text;

    while (choiceButtons.firstChild) {
        choiceButtons.removeChild(choiceButtons.firstChild); //Removes the buttons
    }

    textNode.choices.forEach(choice => {    //Loopar igenom alla våra choices i objektet, och om det KAN visas upp. Ibland visas bara choices upp om ett state är true.
        if(showChoice(choice)) {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.classList.add('button-choice');
        button.addEventListener('click', () => selectChoice(choice)); //Makes the button clickable and displays the choice as text in the button. 
        choiceButtons.appendChild(button);  //Adds the button as a child of my button container.
        }
    })
}

function showChoice(choice) { 
    return true;

}

function showKey() {                // A key is added into the inventory.
    keyItem.style.display ='unset';
    key = 1;
}

function showZeppelin() {           // A zeppelin is added into the inventory
    zeppelinItem.style.display ='unset';
    zeppelin = 1;
}

function showStairwayHeaven() {     // A picture of a stairway (in heaven lol) is added to the inventory
    stairwayHeavenItem.style.display ='unset';
    stairwayHeaven = 1;
}

function showSongContainer() {
    songContainer.style.display = 'unset';
    const songInput = document.getElementById('songInput');
    const songButton = document.getElementById('songButton');

    songButton.addEventListener('click', (e) => {
        e.preventDefault();
        let value = songInput.value;
       
       check = [ "stairway to heaven", "Stairway to heaven" ].includes(value);

        // check = ("stairway to heaven"===value || "Stairway to heaven"===value);
    });
} 



function selectChoice(choice) { // Goes to the next textNode. Used if and if else to decide certain states. Example, add a key to user inventory when he/she enters a room.
    const nextTextNodeId = choice.nextText; 
    
     if (nextTextNodeId === 11 && key === '') { // Or that user only can enter a room if they have a key.
        textElement.innerText = 'You need a key to enter door two!';
     } else if (nextTextNodeId === 11 && key === 1){
        showTextNode(nextTextNodeId);
     } else if (nextTextNodeId === 9) {
         showKey();
        showTextNode(nextTextNodeId);
     } else if (nextTextNodeId === 12 && zeppelin === ''){ // Adds a zeppelin to users inventory, (as a clue)
         showZeppelin();
         showTextNode(nextTextNodeId);
     } else if (nextTextNodeId === 15 && stairwayHeaven === ''){ // Adds a picture of a stairway to users inventory, (as a clue)
         showStairwayHeaven();
         showTextNode(nextTextNodeId);
     } 
        else if (nextTextNodeId <= 0) { // Restarts game when a specifi button in the end is pressed.
         location.reload();
         return false;
     } else if (textNodes[15].id === 16 && nextTextNodeId === 16)  {
        showSongContainer();
        if(check) {
            showTextNode(17);
            console.log('sant i senare skede');
        }
        if (!check) {
            textElement.innerText = 'That’s superwrong! Maybe if you would use that small brain of yours you’d figure it out!';
            showTextNode(11);
            console.log('falskt i senare skede');
        }
     }
     else {
        showTextNode(nextTextNodeId);
        
    
    }
}
            
    

let textNodes = [];
 updateTextNodes();
function updateTextNodes(){ 
    textNodes =  [
    {
        id: 1,
        text: 'Anyways... Once upon a time there was a plumber from italy named ' + userName +'.',
        key: '',
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
        key: '',
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
        key: '',
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
        key: '',
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
        key: '',
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
        key: '',
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
    }, {
        id: 7,
        text: 'You entered door One. Here you find three more doors, which one do you enter?',
        key: '',
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
                text: 'Go back.',
                nextText: 6
            }
            
        ]
    }, {
        id: 8,
        text: 'You entered the door to the left. This room is empty. Do you want to go back?',
        key: '',
        choices: [
            {
                text: 'Go back.',
                nextText: 7
            }
        ]
    }, {
        id: 9,
        text: 'You entered the door in the middle. You found a key! Do you want to go back?',
        key: 1,
        choices: [
            {
                text: 'Go back.',
                nextText: 7
            }
        ]
    }, {
        id: 10,
        text: 'You entered the door to the right. This room is empty. Do you want to go back?',
        key: '',
        choices: [
            {
                text: 'Go back.',
                nextText: 7
            }
        ]
    }, {
        id: 11,
        text: 'You succesfully used to key to get in! You find two doors once again',
        key: 1,
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
                text: 'Go back',
                nextText: 11
            }
        ]
    }, {
        id: 13,
        text: 'You entered the blue door. Nothing special in here...',
        choices: [
            {
                text: 'Go back',
                nextText: 12
            }
        ]
    }, {
        id: 14,
        text: 'You entered the green door. Wow you found... absolutely nothing.',
        choices: [
            {
                text: 'Go back.',
                nextText: 12
            }
        ]
    }, {
        id: 15,
        text: 'You entered the red door. Wow you found a picture! It’s now in your inventory',
        stairwayHeaven: 1,
        choices: [
            {
                text: 'Go back.',
                nextText: 12
            }
        ]
    }, {
        id: 16,
        text: 'Mohahaha! You finally found me. Behind this door i got your precious Peach. I will only let you thru if you guess my favorite song!',
        input: 1,
        choices: [

            {
                text: 'Enter favorite song',
                nextText: 17
            },
            {
                text: 'Go back.',
                nextText: 11
            }
        ]
    }, {
        id: 17,
        text: 'Peach: Wow you saved me etc etc.',
        choices: [
            {
                text: 'Start over',
                nextText: -1,
            }
        ]
    }

]
}