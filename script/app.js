const playerConfigOverlayElement = document.querySelector('#config-overlay');
const backdropElement = document.querySelector('#backdrop');
const formElement = document.querySelector('form');
const errorOutputElement = document.querySelector('#config-error');

const editPlayer1BtnElement = document.querySelector('#edit-player-1-btn');
const editPlayer2BtnElement = document.querySelector('#edit-player-2-btn');
const cancelConfigBtnElement = document.querySelector('#cancel-config-button')

editPlayer1BtnElement.addEventListener('click', openPlayerConfig)
editPlayer2BtnElement.addEventListener('click', openPlayerConfig)
cancelConfigBtnElement.addEventListener('click', closePlayerConfig)
backdropElement.addEventListener('click', closePlayerConfig)
formElement.addEventListener('submit', savePlayerConfig)