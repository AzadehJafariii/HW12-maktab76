//part1
const username = document.querySelector("#username");
const v = username.firstElementChild;
const span = document.createElement("span");
username.appendChild(span);
v.onchange = function () {
  span.innerHTML = "";
  if (!v.value) {
    username.style.border = "2px solid red";
    span.innerHTML += '<br/>' + '<span style="color:red">' + 'name is required!' + '</span>';
  } else {
    username.style.border = "2px solid green";
    span.innerHTML += '<br/>' + '<span style="color:green">' + 'name is valid.' + '</span>';
  }
};


//part2
const useremail = document.querySelector("#useremail");
const v1 = useremail.firstElementChild;
  const oldEmail = document.getElementById("workspace");
v1.onchange = function () {
  oldEmail.textContent = v1.value;
}


//part3
const form = document.querySelector("#form");
form.addEventListener("submit", notSubmit);

function notSubmit(event) {
  alert("event preventDefault!");
  event.preventDefault();
  return false;
}

