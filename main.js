let names = inputNames();

function inputNames() {
  let tempNames = [];
  let playerOneName = "Player 1";
  let playerTwoName = "Player 2";
  tempNames.push(playerOneName, playerTwoName);
  return tempNames;
}

function start(ClearID, ShowID) {
  document.getElementById(ClearID).style.display = "none";
  document.getElementById(ShowID).style.display = "inline-block";
  displayPlayerNames();
}

function displayPlayerNames() {
  document.getElementById("displayFirstPlayerNumber").innerHTML = names[0];
  document.getElementById("displaySecondPlayerNumber").innerHTML = names[1];
}
