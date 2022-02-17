// Open Player Config for edit button for both player 1 and 2
function openPlayerConfig(event) {
  // Taking which player is clicking on edit button
  editedPlayer = +event.target.dataset.playerid; // "+" will convert the string to number | playerid is declared in data on html
  // Making name edit form visible
  playerConfigOverlayElement.style.display = "block";
  // Making name edit form visible backdrop
  backdropElement.style.display = "block";
}

// For closing name form
function closePlayerConfig() {
  // This will hide the form and backdrop
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  // This will remove the error class from form section
  formElement.firstElementChild.classList.remove("error");
  // This will reset the error text to blank
  errorOutputElement.textContent = "";
  // this will reset the input to blank
  formElement.firstElementChild.lastElementChild.value = "";
}

// This will store the form input values
function savePlayerConfig(event) {
  // preventDefault() will prevent the default behaviour of html form
  event.preventDefault();
  // new FormData will create an object of the form
  // using FormData onject we will get the form player name and change it to entered name
  const formData = new FormData(event.target);
  // Validating value
  const enteredPlayerName = formData.get("playername").trim(); // this will remove unwanted spaces
  if (!enteredPlayerName) {
    // If nothing entered or use spaces it will add error class and display a message
    event.target.firstElementChild.classList.add("error");
    errorOutputElement.textContent = "Please enter a valid name!";
    return;
  }
  // selecting which player set the name
  const updatedPlayerDataElement = document.querySelector(
    "#player-" + editedPlayer + "-data"
  );
  // Displaying the player name in html
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;
  // Saving player name in a players object
  players[editedPlayer - 1].name = enteredPlayerName;

  // Calling closePlayerConfig() for closing the form after submit.
  closePlayerConfig();
}
