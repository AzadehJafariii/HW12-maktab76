let title = document.getElementById("elemId");

title.addEventListener("click", function() {
    title.textContent = "Goodbye"
});

function myFunction(e) {
  let x = e.clientX;
  let y = e.clientY;
  let coor = "Coordinates: clientX,clientY (" + x + "," + y + ")";
  document.getElementById("demo").innerHTML = coor;
}

function clearCoor() {
  document.getElementById("demo").innerHTML = "";
}