function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid; // it will convert the string to number
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block'
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none'
    formElement.firstElementChild.classList.remove('error');
    errorOutputElement.textContent = '';
    // 
    formElement.firstElementChild.lastElementChild.value = '';

}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    // Validating value 
    const enteredPlayerName = formData.get('playername').trim();
    if (!enteredPlayerName) {
        event.target.firstElementChild.classList.add('error');
        errorOutputElement.textContent = 'Please enter a valid name!'
        return;
    }
    const updatedPlayerDataElement = document.querySelector('#player-' + editedPlayer + '-data')
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;
    // Saving player name data
    players[editedPlayer - 1].name = enteredPlayerName;

    closePlayerConfig();
}