const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const state = {
  a: Array(3).fill(null),
  b: Array(3).fill(null),
  c: Array(3).fill(null)
};

let currentPlayer;

function handleInput(input) {
  const coordinate = getCoordinate(input);
  if (coordinate) {
    updateState(coordinate);
    const result = checkResult();
    if (checkResult) {
      console.log("You win");
      process.exit();
    } else {
    nextPlayer();
    }
  } else {
    console.log("This is not a valid move");
  }
  playTurn();
}

function checkResult() {
  if (
  (state.a[0] === state.a[1] === state.a[2] === "X") ||
  (state.a[0] === state.a[1] === state.a[2] === "O") ||
  (state.b[0] === state.b[1] === state.b[2] === "X") ||
  (state.b[0] === state.b[1] === state.b[2] === "O") ||
  (state.c[0] === state.c[1] === state.c[2] === "X") ||
  (state.c[0] === state.c[1] === state.c[2] === "O") ||
  (state.a[0] === state.b[0] === state.c[0] === "X") ||
  (state.a[0] === state.b[0] === state.c[0] === "O") ||
  (state.b[0] === state.b[1] === state.b[2] === "X") ||
  (state.b[0] === state.b[1] === state.b[2] === "O") ||
  (state.c[0] === state.c[1] === state.c[2] === "X") ||
  (state.c[0] === state.c[1] === state.c[2] === "O") ||
  (state.a[1] === state.b[2] === state.c[3] === "X") ||
  (state.a[1] === state.b[2] === state.c[3] === "O") ||
  (state.a[3] === state.b[2] === state.c[1] === "X") ||
  (state.a[3] === state.b[2] === state.c[1] === "O")) {
    return true;
  } else {
    return false;
  }
}

function getCoordinate(input) {
  const letter = input[0];
  const digit = input[1] - 1;

  if (state[letter] && state[letter][digit] === null) {
    return { letter: letter, digit: digit };
  } else {
    return null;
  }
}

function updateState(coordinate) {
  const line = state[coordinate.letter];

  line[coordinate.digit] = currentPlayer;
}

function nextPlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function playTurn() {
  console.log(renderBoard());
  reader.question(`${currentPlayer}: What is your move? e.g: a1\n`, handleInput);
}

function start() {
  currentPlayer = ["X", "O"][Math.round(Math.random())];

  playTurn();
}

function renderCell(cell) {
  if (cell === null) {
    return "_";
  } else {
    return cell;
  }
}

function renderRow(letter) {
  const cells = state[letter];

  const row = cells.map(renderCell).join(" | ");

  return `${letter} ${row}`;
}

function renderBoard() {
  const letters = Object.keys(state);

  const rows = letters.map(renderRow).join("\n");

  const header = "  1   2   3";

  return `${header}\n${rows}`;
}

start();
