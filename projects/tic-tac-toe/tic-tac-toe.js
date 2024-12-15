/*
const cells = document.querySelectorAll('.cell');
const statusText = document.querySelector('#statusText');
const restartBtn = document.querySelector('#restarBtn');
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let options = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let running = false;

initializeGame();

function initializeGame() {
  cells.forEach(cell => cell.addEventListener('click', cellClicked))
  restartBtn.addEventListener('click', () => restartGame());
  statusText.textContent = `${currentPlayer}'s turn`;
  running = true;
};

function cellClicked() {
  const cellIndex = this.getAttribute('cellIndex');

  if (options[cellIndex] != '' || !running) {
    return; 
  };

  updateCell(this, cellIndex);
  checkWinner();
};

function updateCell(cell, index) {
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;
};

function changePlayer() {
  currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
  statusText.textContent = `${currentPlayer}'s turn`;
};

function checkWinner() {
  let roundWon = false;

  for(let i = 0; i < winConditions.length; i++){
    const condition = winConditions[i];
    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];

    if ((cellA === '')||(cellB === '')||(cellC === '')) {
      continue;
    } else if  ((cellA === cellB)&&(cellB === cellC)) {
      roundWon = true;
      break;
    };
  }

  if (roundWon) {
    statusText.textContent = `${currentPlayer} wins!`
    running = false
  } else if (!options.includes('')) {
    statusText.textContent = `Draw!`
    running = false;
  } else {
    changePlayer();
  }
};

function restartGame() {
  currentPlayer= 'X';
  options = ['', '', '', '', '', '', '', '', ''];
  statusText.textContent = `${currentPlayer}'s turn`
  cells.forEach(cell => cell.textContent = '');
  running=true;
};



const cells = document.querySelectorAll('.cell');
const statusText = document.querySelector('#statusText');
const restartBtn = document.querySelector('#restarBtn');
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let options = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let running = true;

initializeGame();

function initializeGame() {
  cells.forEach((cell) => cell.addEventListener('click', () => {
      cellClicked(cell);
    })
  );
  restartBtn.addEventListener('click', () => restartGame())
  statusText.textContent = `${currentPlayer}'s turn`
};

function cellClicked(cell) {
  const cellIndex = cell.getAttribute('cellindex');
  const cellDom = cell;

  if (options[cellIndex] != '' || !running) {
    return;
  } else {
    updateCell(cellDom, cellIndex);
    checkWinner();
  };
};

function updateCell(cell, index) {
  options[index] = currentPlayer;
  cell.innerHTML = currentPlayer;
};

function changePlayer() {
  currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
  statusText.textContent = `${currentPlayer}'s turn`;
};

function checkWinner() {
  let roundWon = false;

  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];

    const typeA = options[condition[0]];
    const typeB = options[condition[1]];
    const typeC = options[condition[2]];

    if ((typeA === '')||(typeB === '')||(typeC === '')) {
      continue;
    } else if ((typeA === typeB)&&(typeB === typeC)) {
      roundWon = true; 
    }
  };

  if (roundWon) {
    statusText.textContent = `${currentPlayer} won`
    running = false;
  } else if (!options.includes('')) {
    statusText.textContent = `Draw`
  } else {
    changePlayer();
  }
};

function restartGame() {
  options = ['', '', '', '', '', '', '', '', ''];
  cells.forEach((cell) => {
    cell.innerHTML = '';
  });
  statusText.textContent = `${currentPlayer}'s turn`
  currentPlayer='X'
  running = true;
};
*/

const cells = document.querySelectorAll('.cell');

const statusText = document.querySelector('#statusText');

const restartBtn = document.querySelector('#restarBtn');

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let options = ['', '', '', '', '', '', '', '', ''];

let currentPlayer = 'X'

let running = true;

let winner = false;

initializeGame();

function initializeGame() {
  cells.forEach((cell) => {
    cell.addEventListener('click', () => {
      cellSign(cell);
    })
  });
  restartBtn.addEventListener('click', () => {
    restartGame();
  });
  statusText.innerHTML = `${currentPlayer}'s turn`
};

function cellSign(cell) {

  const cellIndex = cell.getAttribute('cellindex');

  const inputCell = cell;

  if ((!inputCell.innerHTML) && (!winner)) {
    if (running) {
      inputCell.innerHTML = currentPlayer;
      options[cellIndex] = currentPlayer;
      running = false;
      checkWinner();
      if (winner) {
        return;
      } else {
        currentPlayer = 'O';
        statusText.innerHTML = `${currentPlayer}'s turn`;
      };
    } else if (!running){
      inputCell.innerHTML = currentPlayer;
      options[cellIndex] = currentPlayer;
      running = true;
      checkWinner();
      if (winner) {
        return;
      } else {
        currentPlayer = 'X';
        statusText.innerHTML = `${currentPlayer}'s turn`;
      };
    };
  };
};

function checkWinner() {

  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i]

    const typeA = options[condition[0]];
    const typeB = options[condition[1]];
    const typeC = options[condition[2]];

    if ((typeA === '')||(typeB  === '')||(typeC === '')) {
      continue;
    } else if ((typeA===typeB)&&(typeB===typeC)) {
      winner = true;
      break;
    };
  }

  if (winner) {
    statusText.innerHTML = `${currentPlayer} win!`
    return;
  };
};

function restartGame() {
  currentPlayer = 'X';
  options = ['', '', '', '', '', '', '', '', ''];
  running = true;
  winner = false;
  cells.forEach((cell) => {
    cell.innerHTML = '';
  });
  statusText.innerHTML = `${currentPlayer}'s turn`
};

