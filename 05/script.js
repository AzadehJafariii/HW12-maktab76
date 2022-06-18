let div = document.getElementById("buttons");

div.addEventListener("click", function (e) {
  if(e.target.className == "buttonClass"){
        console.log("buttonClass");
    } else {
        console.log("click!");
    }
});
