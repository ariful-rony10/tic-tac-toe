const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;
const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    },
];

// Selecting elements form the DOM

const playerConfigOverlayElement = document.querySelector('#config-overlay');
const backdropElement = document.querySelector('#backdrop');
const formElement = document.querySelector('form');
const errorOutputElement = document.querySelector('#config-error');
const gameAreaElement = document.querySelector('#active-game')
const gameFieldElements = document.querySelectorAll('#game-board li');
const gameBoardElement = document.querySelector('#game-board');
const activePlayerNameElement = document.querySelector('#active-player-name')
const gameOverElement = document.querySelector('#game-over');
const winnerNameElement = document.querySelector('#winner')

const editPlayer1BtnElement = document.querySelector('#edit-player-1-btn');
const editPlayer2BtnElement = document.querySelector('#edit-player-2-btn');
const cancelConfigBtnElement = document.querySelector('#cancel-config-button')
const startGameBtnElement = document.querySelector('#start-game-btn')

// EventListener

// This will open edit player name form section 
editPlayer1BtnElement.addEventListener('click', openPlayerConfig)
editPlayer2BtnElement.addEventListener('click', openPlayerConfig)

// This will close form section
cancelConfigBtnElement.addEventListener('click', closePlayerConfig)
backdropElement.addEventListener('click', closePlayerConfig)
// Form submit button
formElement.addEventListener('submit', savePlayerConfig)

startGameBtnElement.addEventListener('click', startNewGame)

for (const gameFieldElement of gameFieldElements) {
    gameFieldElement.addEventListener('click', selectGameField);
}