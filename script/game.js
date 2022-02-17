// Function Reset
function resetGameStatus() {
    activePlayer = 0;
    currentRound = 1;
    gameIsOver = false;
    gameOverElement.firstChild.innerHTML = 'You Won! <span id="winner">PLAYER NAME</span>';
    gameOverElement.style.display = 'none'

    let gameBoardIndex = 0;
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            gameData[i][j] = 0;
            const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
            gameBoardItemElement.textContent = '';
            gameBoardItemElement.classList.remove('disabled');
            gameBoardIndex++;
        }
    }
}

function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set player name first!");
    return;
  }
  resetGameStatus();
  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

// Check if the game is over or not
function checkForGameOver() {
  // For checking row
  for (let i = 0; i <= 2; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }
  // For checking collumn
  for (let i = 0; i <= 2; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  // diagonal: top left to bottom right
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }
  // diagonal: bottom left to top right
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }
  if (currentRound === 9) {
      return -1;
  }

  return 0;
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
    if (gameIsOver === true) {
        return;
    }
  const selectedField = event.target;

  //As array start from 0 so we deduct 1 from selectedRow and selectedColumn from above
  const selectedColumn = selectedField.dataset.col - 1; // As we operate a math operation it will autometically convert the data string to number
  const selectedRow = selectedField.dataset.row - 1; // As we operate a math operation it will autometically convert the data string to number

  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("Click select and empty field");
    return;
  }
  selectedField.textContent = players[activePlayer].symbol; // Players[0]
  selectedField.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1; // active player by default is 0 but in array i want to store first player 1 and second player to 2

  const winnerId = checkForGameOver();
  if (winnerId !== 0) {
    endGame(winnerId);
  }

  currentRound++;
  switchPlayer();
}

// 
function endGame(winnerId) {
    gameIsOver = true;
    gameOverElement.style.display = 'block'
    if (winnerId > 0) {
        const winnerName = players[winnerId - 1].name;
    winnerNameElement.textContent = winnerName;
    } else {
        gameOverElement.firstElementChild.textContent = 'It\'s a DRAW!'
    }
    
}