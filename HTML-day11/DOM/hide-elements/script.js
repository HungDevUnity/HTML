const text = document.getElementById("text");

document.getElementById("hideBtn").addEventListener("click", function() {
  text.style.display = "none";
});

document.getElementById("showBtn").addEventListener("click", function() {
  text.style.display = "block";
});
