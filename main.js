let names = inputNames();
let list = {
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  7: false,
  8: false,
  9: false,
  counter: 0,
};

function inputNames() {
  let tempNames = [];
  let playerOneName = `Player 1  <i class="fas fa-times"></i>`;
  let playerTwoName = `Player 2  <i class="far fa-circle"></i>`;
  tempNames.push(playerOneName, playerTwoName);
  return tempNames;
}

function start(ClearID, ShowID, placeID) {
  document.getElementById(ClearID).style.display = "none";
  document.getElementById(ShowID).style.display = "inline-block";
  document.getElementById(placeID).style.display = "grid";
  displayPlayerNames();
}

function displayPlayerNames() {
  document.getElementById("displayFirstPlayerNumber").innerHTML = names[0];
  document.getElementById("displaySecondPlayerNumber").innerHTML = names[1];
}

function placerLogic(displayID, char) {
  if (list[`${displayID}`]) {
    document.getElementById(`${displayID}`).innerHTML = "";
    list[`${displayID}`] = false;
  } else {
    document.getElementById(`${displayID}`).innerHTML = `${char}`;
    list[`${displayID}`] = true;
    list.counter++;
  }
}

function displaymarker(counter) {
  if (counter % 2 == 0) return ` <i class="fas fa-times"></i>`;
  else return `<i class="far fa-circle"></i>`;
}

function displayPoint(displayID) {
  let char = displaymarker(list.counter);
  placerLogic(displayID, char);
}
