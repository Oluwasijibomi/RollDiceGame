


document.querySelector(".btn").addEventListener("click", function() {
  var dice = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".img-btn").src = "dice-" + dice + ".png"
})