let names;
let winner = false;
let winnerPlayer = 0;
const winningPlace = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

let x = [];
let y = [];

let list = {
  1: true,
  2: true,
  3: true,
  4: true,
  5: true,
  6: true,
  7: true,
  8: true,
  9: true,
  counter: 0,
};

function nameCheker(string, numberName) {
  if (
    string == "" ||
    string == "1" ||
    string == "2" ||
    string == null ||
    string == undefined
  ) {
    string = `Player ${numberName}`;
  }
  return string;
}

function inputNames() {
  let tempNames = [];
  let playerOne = prompt("Input first player name:");
  let playerTwo = prompt("Input second player name:");
  //let playerOne = "Player one";
  //let playerTwo = "Player two";
  tempNames.push(nameCheker(playerOne, "one"), nameCheker(playerTwo, "two"));
  return tempNames;
}

function start(ClearID, ShowID, placeID) {
  document.getElementById(ClearID).style.display = "none";
  document.getElementById(ShowID).style.display = "inline-block";
  document.getElementById(placeID).style.display = "grid";
  names = inputNames();
  displayPlayerNames();
}

function displayPlayerNames() {
  document.getElementById(
    "displayFirstPlayerNumber"
  ).innerHTML = `${names[0]} <i class="fas fa-times"></i>`;
  document.getElementById(
    "displaySecondPlayerNumber"
  ).innerHTML = `${names[1]} <i class="far fa-circle"></i>`;
}

function placerLogic(displayID, char) {
  if (!winner) {
    if (list[`${displayID}`]) {
      if (char == "X") {
        document.getElementById(
          `${displayID}`
        ).innerHTML = `<i class="fas fa-times"></i>`;
        x.push(parseFloat(`${displayID}`));
      } else {
        document.getElementById(
          `${displayID}`
        ).innerHTML = `<i class="far fa-circle"></i>`;
        y.push(`${displayID}`);
      }
      list[`${displayID}`] = false;
      list.counter++;
    }
  }
}

function displaymarker(counter) {
  if (counter % 2 == 0) return `X`;
  else return `O`;
}

function displayWinner(player) {
  if (player == 1) {
    Swal.fire({
      icon: "success",
      title: "We have winner",
      text: `Congratulations ${names[0]}`,
    });
  } else {
    Swal.fire({
      icon: "success",
      title: "We have winner",
      text: `Congratulations ${names[1]}`,
    });
  }
}

function guessingMove(char) {
  if (!winner) {
    if (char == "X") {
      document.getElementById(
        `displayPlayerTurn`
      ).innerHTML = `Now making move O`;
    } else {
      document.getElementById(
        `displayPlayerTurn`
      ).innerHTML = `Now making move X`;
    }
  } else {
    if (winnerPlayer == 0) {
      document.getElementById(`displayPlayerTurn`).innerHTML = "Tie";
    } else if (winnerPlayer == 1) {
      document.getElementById(
        `displayPlayerTurn`
      ).innerHTML = `Winner is ${names[0]}`;
    } else {
      document.getElementById(
        `displayPlayerTurn`
      ).innerHTML = `Winner is ${names[1]}`;
    }
  }
}

function checkWinner(counter) {
  if (counter == 5) {
    let xArray = x.sort();
    let win = false;
    let currentString = `${xArray[0]},${xArray[1]},${xArray[2]}`;
    for (let i = 0; i < winningPlace.length; i++) {
      if (winningPlace[i].toString() == currentString) {
        win = true;
        break;
      }
    }
    if (win) {
      displayWinner(1);
      winner = true;
      winnerPlayer = 1;
    }
  }
  if (counter == 6) {
    let yArray = y.sort();
    let win = false;
    let currentString = `${yArray[0]},${yArray[1]},${yArray[2]}`;
    for (let i = 0; i < winningPlace.length; i++) {
      for (let j = 0; j < 3; j++) {
        if (winningPlace[i].toString() == currentString) {
          win = true;
          break;
        }
      }
    }
    if (win) {
      displayWinner(2);
      winnerPlayer = 2;
      winner = true;
    }
  }
  if (counter == 7) {
    let xArray = x.sort();
    let counter = 0;
    for (let i = 0; i < winningPlace.length; i++) {
      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 4; k++) {
          if (winningPlace[i][j] == xArray[k]) {
            counter++;
            if (counter == 3) {
              displayWinner(1);
              winner = true;
              winnerPlayer = 1;
              return;
            }
          }
        }
      }
      counter = 0;
    }
  }
  if (counter == 8) {
    let yArray = y.sort();
    let counter = 0;
    for (let i = 0; i < winningPlace.length; i++) {
      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 4; k++) {
          if (winningPlace[i][j] == yArray[k]) {
            counter++;
            if (counter == 3) {
              displayWinner(2);
              winner = true;
              winnerPlayer = 2;
              return;
            }
          }
        }
      }
      counter = 0;
    }
  }
  if (counter == 9) {
    let xArray = x.sort();
    let counter = 0;
    for (let i = 0; i < winningPlace.length; i++) {
      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 5; k++) {
          if (winningPlace[i][j] == xArray[k]) {
            counter++;
            if (counter == 3) {
              displayWinner(1);
              winner = true;
              winnerPlayer = 1;
              return;
            }
          }
        }
      }
      counter = 0;
    }
    Swal.fire({
      icon: "info",
      title: "Oops...",
      text: "Tie , there is no winner",
    });
    document.getElementById(`displayPlayerTurn`).innerHTML = "Tie";
    winner = true;
    winnerPlayer = 0;
  }
}

function displayPoint(displayID) {
  let char = displaymarker(list.counter);
  placerLogic(displayID, char);
  if (list.counter == 5) checkWinner(5);
  if (list.counter == 6) checkWinner(6);
  if (list.counter == 7) checkWinner(7);
  if (list.counter == 8) checkWinner(8);
  if (list.counter == 9) checkWinner(9);
  guessingMove(char);
}

function restart() {
  for (let i = 1; i <= 9; i++) {
    list[i] = true;
    document.getElementById(`${i}`).innerHTML = "";
  }
  list.counter = 0;
  x.length = 0;
  y.length = 0;
  winner = false;
  guessingMove("0");
}
