window.addEventListener('load', init)

// Global Variables

//Available levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}

// To change level
const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'muharram',
    'saffa',
    'wahid',
    'ithnayn',
    'thalatha',
    'arbaa',
    'khamsa',
    'hayba',
    'breezy',
    'drawback',
    'lean-cat',
    'liquid-budge',
    'thirteen',
    'fourteen',
    'fifteen',
    'ramadan',
    'bounty',
    'capturing',
    'development',
    'variable',
    'array',
    'irony',
    'github',
    'factuality',
    'working',
    'javascript',
    'python',
    'boston',
    'somalia',
    'spilt-milk',
    'hamza-yusuf'
];

// Initialize game

function init() {

    //Show number of seconds in UI
    seconds.innerHTML = currentLevel;
    // Load word from Array;
    showWord(words);
    // Start matching word input
    wordInput.addEventListener('input', startMatch);
    // Call countdown every second
    setInterval(countdown, 1000);
    // Check game status
    setInterval(checkStatus, 50)
};

// Start Match
function startMatch(){
    if(matchWords()){
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }

    // If score is -1 display 0
    if(score === -1){
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;

    }
}

// Match currentWord to wordInput
function matchWords(){
    
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct!';
        return true
    } else {
        message.innerHTML = '';
        return false;
    }

}

// Pick & show random word
function showWord(words) {
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    // Output random word
    currentWord.innerHTML = words[randIndex];
}

//Countdown timer
function countdown() {
    // Make sure time has not run out
    if (time > 0) {
        //Decrement
        time--
    } else if (time === 0) {
        //Game over
        isPlaying = false;
    }

    // show time
    timeDisplay.innerHTML = time;
}

//Check game status
function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!!';
        score = -1;
    }
}