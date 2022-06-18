let div = document.querySelector(".cta_container");
div.addEventListener("click", (e) => {
  let text = document.querySelector("div").nodeName;
  console.log(text);
});
let button = document.querySelector(".cta_button");
button.addEventListener("click", (e) => {
  let text = document.querySelector("button").nodeName;
  e.stopPropagation();
  console.log(text);
});
