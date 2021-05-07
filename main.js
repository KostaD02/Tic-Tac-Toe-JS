let names = inputNames();

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
  document.getElementById(placeID).style.display = "inline-block";
  displayPlayerNames();
}

function displayPlayerNames() {
  document.getElementById("displayFirstPlayerNumber").innerHTML = names[0];
  document.getElementById("displaySecondPlayerNumber").innerHTML = names[1];
}
