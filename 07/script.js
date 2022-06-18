function event_function(event) {
  let x = event.pageX;
  let y = event.pageY;
  let coor = "Coordinates: pageX,pageY (" + x + "," + y + ")";
  document.getElementById("show_position").innerHTML = coor;
}


function clearCoor() {
  document.getElementById("show_position").innerHTML = "";
}
