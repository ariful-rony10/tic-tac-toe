function openPlayerConfig() {
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block'
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none'
    formElement.firstElementChild.classList.remove('error');
    errorOutputElement.textContent = '';

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
    
}