

const lis = document.querySelectorAll("li");
lis.forEach(function (li) {
  li.onmouseover = function (event) {
     event.target.style.textDecoration = "line-through";
  };
});

