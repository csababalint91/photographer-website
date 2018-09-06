document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("btn");
  
  button.addEventListener("click", function() {
    var box = document.getElementById("box");
  	box.classList.add("box");
  });
});

